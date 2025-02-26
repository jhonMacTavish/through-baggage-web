<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-02-23 20:06:20
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-02-23 21:38:04
 * @FilePath: \through_baggage_webt:\Projects\VS Code\vue-bootstrap-master\src\components\Main.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section class="pt-2 pb-4 bg-green">
    <div class="container">
      <h2 class="text-center text-white">联系我们</h2>
    </div>
  </section>

  <section class="p-4 bg-green pt-0 rd-form">
    <div class="container">
      <div class="p-4" style="background-color: white; border-radius: 24px;">
      <h6>请输入行程信息，查询行李状态</h6>
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="auto"
        >
          <el-form-item size="large" label="护照号" prop="pptNo" style="margin-bottom: 20px;">
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
          <el-form-item size="large" label="航班号" prop="fltNo" style="margin-bottom: 20px;">
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
          <el-form-item size="large" label="座位号" prop="setNo" style="margin-bottom: 20px;">
            <el-input
              v-model="ruleForm.setNo"
              maxlength="4"
              :formatter="(value) => value.toUpperCase()"
            >
              <template #prefix>
                <i-ep-PriceTag />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item size="large" style="margin: 0;">
            <el-button
              class="w-100"
              type="primary"
              @click="submitForm(ruleFormRef)"
              style="border-radius: 12px; background-color: #71d561; border: none;"
            >
              <text style="font-size: 16px; letter-spacing: 4px">查询</text>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </section>

  <section class="p-4">
    <div class="container">
      <h6>行李状态：</h6>
      <div>
        <p>
          {{ res.str1 }}<br /><span>{{ res.str2 }}</span>
        </p>
      </div>
    </div>
  </section>

  <section>
    <p>温馨提醒：没有托运行李的旅客无需等待，可直接通行。</p>
  </section>
</template>

<script lang="ts" setup>
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import axios from "axios";

const ruleFormRef = ref<FormInstance>();
const prompts = {
  res1: { str1: "您的行李已确认安全", str2: "请通行" },
  res2: { str1: "您没有托运行李", str2: "请通行" },
  res3: { str1: "您的行李尚未完全通过检查", str2: "请耐心等待" },
  res4: { str1: "很抱歉，未能查询到您的", str2: "行程及行李信息" },
};
let res = reactive({ str1: "", str2: "" });

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
  pptNo: "E98549873",
  fltNo: "CA6754",
  setNo: "152G",
});

const rules: FormRules<typeof ruleForm> = {
  pptNo: [
    {
      validator: createValidator(/^[G|E|P|S|D|C]\d{8}$/, "请输入正确护照号"),
      trigger: "blur",
    },
  ],
  fltNo: [
    {
      validator: createValidator(/^[A-Z]{2}\d{3,4}$/, "请输入正确航班号"),
      trigger: "blur",
    },
  ],
  setNo: [
    {
      validator: createValidator(/^\d{1,3}[A-Z]$/, "请输入正确座位号"),
      trigger: "blur",
    },
  ],
};

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  try {
    const valid = await formEl.validate();
    if (valid) {
      const params = ruleForm;

      await axios.get("/api/baggages/status", { params }).then((res) => {
        console.log(res);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const resize = () => {
  console.log("resize");
  // const header = document.querySelector(".header");
  // const formWrap = document.querySelector(".form-wrap");
  // const infoWrap = document.querySelector(".info-wrap");
  // formWrap.style.padding = "20px";
  // infoWrap.style.padding = "20px";

  // const background = document.querySelector(".background");
  // if (background) {
  //   background.style.height = `${
  //     header?.clientHeight + formWrap?.clientHeight + 54
  //   }px`;
  // }
};

onBeforeMount(() => {});

onMounted(() => {});
</script>

<style lang="less" scoped>
.bg-green {
  background-color: #71d561;
}

.rd-form {
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}
</style>
