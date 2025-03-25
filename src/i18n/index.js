import { createI18n } from "vue-i18n";
import zhCN from "./zh-CN";
import en from "./en";

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en", //默认语言
  fallbackLocale: "zhCN", //备用语言
  messages: {
    zhCN,
    en,
  },
});

export default i18n;
