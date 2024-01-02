import { boot } from "quasar/wrappers";
import { VueQueryPlugin } from "@tanstack/vue-query";
app.use(VueQueryPlugin);
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (app) => {
  app.use(VueQueryPlugin);
});
