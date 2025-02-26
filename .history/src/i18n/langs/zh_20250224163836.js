/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-02-24 00:23:07
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-02-24 16:38:36
 * @FilePath: \through_baggage_webt:\Projects\VS Code\vue-bootstrap-master\src\i18n\langs\zh.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  messages: {
    langs: {
      en: "English",
      zh: "中文",
    },

    prompText: {
      switchLang: "切换语言",
      pageTitle: "通程行李状态",
      pageFooter: "温馨提示：没有托运行李的旅客无需等待，可直接通行",
    },

    baggageText: {
      stateTitle: "行李状态",
      stateInfo: {
        state0: { str1: "暂无数据", str2: "" },
        state1: { str1: "您的行李已确认安全", str2: "请通行" },
        state2: { str1: "您没有托运行李", str2: "请通行" },
        state3: { str1: "您的行李尚未完全通过检查", str2: "请耐心等待" },
        state4: { str1: "很抱歉，未能查询到您的", str2: "行程及行李信息" },
      },
    },

    userText: {
      formTitle: "请输入行程信息,查询行李状态",
      formInfo: {
        passportNo: "护照号",
        flightNo: "航班号",
        seatNo: "座位号",
        baggageNo: "行李号"
      },
      validateText: {
        passportNo: "请输入正确的护照号",
        flightNo: "请输入正确的航班号",
        seatNo: "请输入正确的座位号",
      },
      formButton: "查询",
    },
  },
};
