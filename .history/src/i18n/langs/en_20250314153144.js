/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-02-24 00:23:07
 * @LastEditors: jhon.mactavish96 jhon.mactavish96@gmail.com
 * @LastEditTime: 2025-03-14 15:31:44
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
      switchLang: "Switch language",
      pageTitle: "Through baggage status",
      pageFooter: "Tips: Passengers without checked baggage can pass directly without waiting",
    },

    baggageText: {
      stateTitle: "Baggage status",
      stateInfo: {
        0: { str1: "No data", str2: "" },
        1: { str1: "Your baggage has been confirmed safe,", str2: "Please pass" },
        2: { str1: "You have no checked baggage,", str2: "Please pass" },
        3: { str1: "Please contact the airline staff for assistance", str2: "" },
        4: { str1: "Your baggage has not yet been fully screened,", str2: "Please wait" },
        5: { str1: "No baggage information was found, please verify the baggage No.", str2: "" },
      },
    },

    userText: {
      formTitle: "Please enter your baggage No. to check your baggage status",
      formInfo: {
        passportNo: "Passport No.",
        flightNo: "Flight No.",
        seatNo: "Seat No.",
        baggageNo: "BAG No."
      },
      validateText: {
        passportNo: "Enter your passport No.",
        flightNo: "Enter your flight No.",
        seatNo: "Enter your seat No.",
        baggageNo: "Enter 10-digit baggage No."
      },
      formButton: "Submit",
    },
  },
};
