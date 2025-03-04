<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-02-23 20:06:20
 * @LastEditors: john_mactavish 981192661@qq.com
 * @LastEditTime: 2025-02-28 10:59:56
 * @FilePath: \through_baggage_webt:\Projects\VS Code\vue-bootstrap-master\src\components\Main.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section class="p-4 pb-3 bg-green">
    <div class="container d-flex justify-content-between align-items-center">
      <!-- <h2 class="text-center text-white" :style="`font-size: ${locale == 'en'? '16px': ''}`" >{{$t('messages.prompText.pageTitle')}}</h2> -->
      <h2 v-if="locale == 'zh'" class="text-center text-white">
        {{ $t("messages.prompText.pageTitle") }}
      </h2>
      <h6 v-else class="text-center text-white">
        {{ $t("messages.prompText.pageTitle") }}
      </h6>
      <div class="select-group">
        <el-dropdown size="large" trigger="click" style="margin: 2px 0 0 4px; font-size: 16px">
          <span class="el-dropdown-link text-light">
            <svg data-v-f414ea64="" viewBox="0 0 24 24" width="1.2em" height="1.2em">
              <path fill="currentColor"
                d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z">
              </path>
            </svg>
            {{ $t(`messages.langs.${locale}`) }}
            <el-icon class="el-icon--right">
              <i-ep-Arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="changeLang('zh')">中文</el-dropdown-item>
              <el-dropdown-item @click="changeLang('en')">English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </section>

  <section class="p-4 bg-green rd-form">
    <div class="container">
      <div class="p-4 form-bg">
        <h6 class="form-title">{{ $t("messages.userText.formTitle") }}</h6>
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="auto">
          <!-- <el-form-item
            class="item-marginBt"
            size="large"
            :label="$t('messages.userText.formInfo.passportNo')"
            prop="pptNo"
          >
            <el-input
              v-model="ruleForm.pptNo"
              maxlength="9"
              :formatter="(value) => value.toUpperCase()"
            >
              <template #prefix>
                <i-ep-Postcard />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item
            class="item-marginBt"
            size="large"
            :label="$t('messages.userText.formInfo.flightNo')"
            prop="fltNo"
          >
            <el-input
              v-model="ruleForm.fltNo"
              maxlength="6"
              :formatter="(value) => value.toUpperCase()"
            >
              <template #prefix>
                <i-ep-Calendar />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item
            class="item-marginBt"
            size="large"
            :label="$t('messages.userText.formInfo.seatNo')"
            prop="setNo"
          >
            <el-input
              v-model="ruleForm.setNo"
              maxlength="4"
              :formatter="(value) => value.toUpperCase()"
            >
              <template #prefix>
                <i-ep-PriceTag />
              </template>
            </el-input>
          </el-form-item> -->
          <el-form-item class="item-marginBt" size="large" :label="$t('messages.userText.formInfo.baggageNo')"
            prop="bagNo">
            <el-input v-model="ruleForm.bagNo" maxlength="10" :formatter="(value) => value.toUpperCase()">
              <template #prefix>
                <i-ep-Suitcase />
              </template>
              <template #suffix>
                <i-ep-FullScreen @click="openScan" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item size="large">
            <el-button class="w-100 submitBtn" :disabled="clickable" type="primary" @click="submitForm(ruleFormRef)" @keyup.enter.native="submitForm(ruleFormRef)">
              <text :style="`
    letter-spacing: ${locale == 'zh' ? '4px' : ''};`">{{ $t("messages.userText.formButton") }} {{ !clickable ? '' : `
                ${secondes} s` }}</text>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </section>

  <section class="p-4 flex1">
    <div class="container">
      <h2 v-if="locale == 'zh'" class="info-title mb-3">
        {{ $t("messages.baggageText.stateTitle") }}
      </h2>
      <h6 v-else class="info-title mb-3">
        {{ $t("messages.baggageText.stateTitle") }}
      </h6>
      <div class="info-content p-4 d-flex justify-content-center align-items-center">
        <p :class="`text-center ${bagStyle}`">
          {{ $t(`messages.baggageText.stateInfo.${bagStat}.str1`) }}<br /><span class="attention">{{
            $t(`messages.baggageText.stateInfo.${bagStat}.str2`) }}</span>
        </p>
      </div>
    </div>
  </section>

  <footer class="p-4 text-center w-100">
    <div class="container">
      <h6>{{ $t("messages.prompText.pageFooter") }}</h6>
    </div>
  </footer>
  <!-- <Scanner/> -->
</template>

<script lang="ts" setup>
// import Scanner from "./Scanner.vue";
import { useRoute, useRouter } from "vue-router";
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import axios from "axios";
import { useI18n } from "vue-i18n";
import { watch } from 'vue';
// 在调用 ElMessage 的组件中添加样式导入
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'

const route = useRoute();
const router = useRouter();
const { locale, t } = useI18n();
const ruleFormRef = ref<FormInstance>();
const bagStat = ref(0);
const bagStyle = ref("");
const clickable = ref(false);
const secondes = ref(5);
let timer = ref(0);

const changeLang = (type: string) => {
  console.log(type);
  locale.value = type;
  localStorage.setItem("lang", type);

  rules.pptNo[0].validator = createValidator(
    /^[G|E|P|S|D|C]\d{8}$/,
    t("messages.userText.validateText.passportNo")
  );
  rules.fltNo[0].validator = createValidator(
    /^[A-Z]{2}\d{3,4}$/,
    t("messages.userText.validateText.flightNo")
  );
  rules.setNo[0].validator = createValidator(
    /^\d{1,3}[A-Z]$/,
    t("messages.userText.validateText.seatNo")
  );
  rules.bagNo[0].validator = createValidator(
    /^\d{10}$/,
    t("messages.userText.validateText.baggageNo")
  );
};

// 表单验证规则
const createValidator = (pattern: RegExp, errorMsg: string) => {
  return (_rule: any, value: string, callback: any) => {
    if (!pattern.test(value)) {
      callback(new Error(errorMsg));
    } else {
      callback();
    }
  };
};

const ruleForm = reactive({
  pptNo: "",
  fltNo: "",
  setNo: "",
  bagNo: "",
});

const rules: FormRules<typeof ruleForm> = {
  pptNo: [
    {
      validator: createValidator(
        /^[G|E|P|S|D|C]\d{8}$/,
        t("messages.userText.validateText.passportNo")
      ),
      trigger: "blur",
    },
  ],
  fltNo: [
    {
      validator: createValidator(
        /^[A-Z]{2}\d{3,4}$/,
        t("messages.userText.validateText.flightNo")
      ),
      trigger: "blur",
    },
  ],
  setNo: [
    {
      validator: createValidator(
        /^\d{1,3}[A-Z]$/,
        t("messages.userText.validateText.seatNo")
      ),
      trigger: "blur",
    },
  ],
  bagNo: [
    {
      validator: createValidator(
        /^\d{10}$/,
        t("messages.userText.validateText.baggageNo")
      ),
      trigger: "blur",
    },
  ],
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  try {
    const valid = await formEl.validate();
    if (valid) {
      const { bagNo } = ruleForm;
      const params = { bagNo };

      await axios.get("/api/baggages/status", { params }).then((res) => {
        console.log(res.data);
        const data = res.data;
        if (data.status === 200) {
          const status = data.data;
          timer.value = setInterval(() => {
            secondes.value -= 1;
            console.log(secondes.value);

            clickable.value = false;
            if (secondes.value === 0) {
              clickable.value = true;
              secondes.value = 5;
            }
          }, 1000);
          switch (status.baggageusStatus) {
            case 'SAFE':
              bagStat.value = 1;
              break;
            case 'NO_BAGGAGE':
              bagStat.value = 2;
              break;
            case 'NO_RESULT':
              bagStat.value = 3;
              break;
            case 'PROCESSING':
              bagStat.value = 4;
              break;
            default:
              break;
          }

          switch (status.passStatus) {
            case 'PASS':
              bagStyle.value = "pass";
              break;
            case 'WAIT':
              bagStyle.value = "wait";
              break;
            default:
              break;
          }
        } else {
          ElMessage.error('server error');
          bagStyle.value = "wait";
          bagStat.value = 5;
        }
      });
    }
  } catch (error) {
    console.log("axios failed");
    console.log('错误详情:', error);
    ElMessage.error('server error');
  }
};

const openScan = () => {
  console.log("openScan");
  router.push('/scanner');
};

watch(
  () => route.query.bagNo,
  (newVal) => {
    if (newVal) ruleForm.bagNo = newVal as string;
  }
);

onBeforeMount(() => { });

onMounted(() => {
  console.log(route.query.bagNo);
  if (route.query.bagNo) {
    ruleForm.bagNo = route.query.bagNo as string;
  }
});
</script>

<style lang="less" scoped>
.pass {
  color: #71d561;
}

.wait {
  color: #f5a623;
}

.bg-green {
  background-color: #71d561;
}

.rd-form {
  padding-bottom: 40px !important;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}

.item-marginBt {
  // margin-bottom: 20px;
}

.el-form-item:last-child {
  margin: 0;
}

.form-bg {
  background-color: white;
  border-radius: 24px;

  .form-title {
    color: gray;
    margin-bottom: 20px;
  }
}

.submitBtn {
  border-radius: 12px;
  background-color: #71d561;
  border: none;

  text {
    font-size: 16px;
  }
}

.info-title {
  color: #195135;
  // font-size: 24px;
}

.info-content {
  width: 100%;
  height: 100px;
  border-radius: 12px;
  font-size: 16px;
  color: #9095a0;
  background-color: white;

  .attention {
    font-size: 24px;
    font-weight: bold;
  }
}

.select-group {
  position: relative;
  top: -4px;
  color: white;
  // font-weight: bold;
  // top: 20px;
  // right: 0;
}

.flex1 {
  flex: 1;
}

footer {
  position: absolute;
  bottom: 0;
  color: #195135;
}
</style>
