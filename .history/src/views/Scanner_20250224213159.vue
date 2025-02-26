<template>
  <section class="p-4 w-100 h-100">
    <!-- 扫码区域 -->
    <div class="QrCode">
      <video ref="video" height="100%" width="100%" id="video" autoplay></video>
    </div>
    <!-- 扫码样式 -->
    <div class="qr-scanner">
      <div class="box">
        <div class="line"></div>
        <div class="angle"></div>
      </div>
      <div class="back-arrow" @click="clickIndexLeft">
        <i-ep-Close @click=""/>
      </div>
    </div>
  </section>
</template>

<script>
// WebRTC适配器 只需要引入就ok
import "webrtc-adapter";
import { BrowserMultiFormatReader } from "@zxing/library";
import { useRouter } from "vue-router";

export default {
  name: "scanCodePage",
  data() {
    return {
      router: useRouter(),
      codeReader: null,
    };
  },
  mounted() {
    this.codeReader = new BrowserMultiFormatReader();
    this.openScan();
  },
  beforeUnmount() {
    this.codeReader && this.codeReader.reset();
  },
  methods: {
    async openScan() {
      this.codeReader
        .listVideoInputDevices()
        .then((videoInputDevices) => {
          // 默认获取第一个摄像头设备id
          let firstDeviceId = videoInputDevices[0].deviceId;
          // 获取第一个摄像头设备的名称
          const videoInputDeviceslablestr = JSON.stringify(
            videoInputDevices[0].label
          );
          if (videoInputDevices.length > 1) {
            // 判断是否后置摄像头
            if (videoInputDeviceslablestr.indexOf("back") > -1) {
              firstDeviceId = videoInputDevices[0].deviceId;
            } else {
              firstDeviceId = videoInputDevices[1].deviceId;
            }
          }
          this.codeReader && this.codeReader.reset(); // 重置
          this.decodeFromInputVideoFunc(firstDeviceId);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    decodeFromInputVideoFunc(firstDeviceId) {
      this.codeReader.decodeFromInputVideoDeviceContinuously(
        firstDeviceId,
        "video",
        (result, err) => {
          if (result) {
            console.log("扫描结果", result);
            // this.router.push({ name: "Home", query: { bagNo: result.text } });
            this.clickIndexLeft(result.text);
          }
          if (err && !err) {
            console.error(err);
          }
        }
      );
    },
    // 停止扫描，并返回上一页
    clickIndexLeft(result) {
      this.codeReader && this.codeReader.reset();
      this.codeReader = null;
      this.router.push({ name: "Home", query: { bagNo: result.text } });
      // this.$route.params.result = result
      // this.$router.back()
    },
  },
};
</script>

<style lang="scss" scope>
.QrCode {
  width: 100%;
  height: 100%;
  position: relative;
  video {
    width: 100%;
    height: 100%;
  }

  // width: 75vw;
  // height: 75vw;
  // max-height: 75vh;
  // max-width: 75vh;
  // position: relative;
  // left: 50%;
  // top: 50%;
}

.qr-scanner {
  background-image: linear-gradient(
      0deg,
      transparent 24%,
      rgba(32, 255, 77, 0.1) 25%,
      rgba(32, 255, 77, 0.1) 26%,
      transparent 27%,
      transparent 74%,
      rgba(32, 255, 77, 0.1) 75%,
      rgba(32, 255, 77, 0.1) 76%,
      transparent 77%,
      transparent
    ),
    linear-gradient(
      90deg,
      transparent 24%,
      rgba(32, 255, 77, 0.1) 25%,
      rgba(32, 255, 77, 0.1) 26%,
      transparent 27%,
      transparent 74%,
      rgba(32, 255, 77, 0.1) 75%,
      rgba(32, 255, 77, 0.1) 76%,
      transparent 77%,
      transparent
    );
  background-size: 3rem 3rem;
  background-position: -1rem -1rem;
  // width: 100%;
  // height: 100%;
  // position: relative;
  // background-color: #111;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.qr-scanner .box {
  width: 75vw;
  height: 75vw;
  max-height: 75vh;
  max-width: 75vh;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  border: 0.1rem solid rgba(0, 255, 51, 0.2);
}
.qr-scanner .line {
  height: calc(100% - 2px);
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 255, 51, 0) 43%, #00ff33 211%);
  border-bottom: 3px solid #00ff33;
  transform: translateY(-100%);
  animation: radar-beam 2s infinite;
  animation-timing-function: cubic-bezier(0.53, 0, 0.43, 0.99);
  animation-delay: 1.4s;
}
.qr-scanner .box:after,
.qr-scanner .box:before,
.qr-scanner .angle:after,
.qr-scanner .angle:before {
  content: "";
  display: block;
  position: absolute;
  width: 3vw;
  height: 3vw;
  border: 0.2rem solid transparent;
}
.qr-scanner .box:after,
.qr-scanner .box:before {
  top: 0;
  border-top-color: #00ff33;
}
.qr-scanner .angle:after,
.qr-scanner .angle:before {
  bottom: 0;
  border-bottom-color: #00ff33;
}
.qr-scanner .box:before,
.qr-scanner .angle:before {
  left: 0;
  border-left-color: #00ff33;
}
.qr-scanner .box:after,
.qr-scanner .angle:after {
  right: 0;
  border-right-color: #00ff33;
}
@keyframes radar-beam {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.qr-scanner .back-arrow {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
</style>
