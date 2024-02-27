import "./assets/style.css";
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import fr from "./locales/fr.json";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";

const i18n = createI18n({

  legacy: false,
  // get the default language of the browser
  locale: localStorage.getItem('locale') || navigator.language.split('-')[0] || "fr",
  fallbackLocale: "en",
  //import messages from "./locales/en.json";
  messages: {
    en: en,
    ar: ar,
    fr: fr,
  },
});
const app = createApp(App);

app.use(router);
app.use(i18n);
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.mount("#app");

// Watch for changes in locale and store it in local storage
watchEffect(() => {
  const newLocale = i18n.global.locale.value;
  localStorage.setItem('locale', newLocale);
});