<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-02-23 20:06:20
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-02-23 20:25:37
 * @FilePath: \through_baggage_webt:\Projects\VS Code\vue-bootstrap-master\src\components\Main.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section class="p-2">
    <div class="container">
      <h2 class="text-center">联系我们</h2>
    </div>
  </section>
  <section>
    <div class="container">
      <p>请输入行程信息，查询行李状态</p>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="auto"
      >
        <el-form-item size="large" label="护照号" prop="pptNo" label-style="">
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
        <el-form-item size="large" label="航班号" prop="fltNo">
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
        <el-form-item size="large" label="座位号" prop="setNo">
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
        <el-form-item size="large">
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            <text>查询</text>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <p>行李状态：</p>
      <div>
        <p>
          {{ res.str1 }}<br /><span>{{ res.str2 }}</span>
        </p>
      </div>
    </div>
    <p>温馨提醒：没有托运行李的旅客无需等待，可直接通行。</p>
  </section>
</template>
<script setup>
import { ref, reactive } from "vue";
</script>
<style lang="less" scoped></style>
