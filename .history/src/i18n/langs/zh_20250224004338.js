export default {
  messages: {
    langs: {
      en: "English",
      zh: "中文",
    },

    prompText: {
      pageTitle: "通程行李状态",
      pageFooter: "温馨提示：没有托运行李的旅客无需等待，可直接通行",
    },

    baggageText: {
      stateTitle: "行李状态",
      stateInfo: {
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
      },
    },
  },
};
