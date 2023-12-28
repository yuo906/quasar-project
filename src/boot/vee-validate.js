import { configure, extend, ValidationObserver, ValidationProvider, useForm } from "vee-validate";
import { email, required } from "@vee-validate/rules";

export default async ({ Vue }) => {
  // Register it globally
  Vue.component("ValidationProvider", ValidationProvider);
  Vue.component("ValidationObserver", ValidationObserver);
  Vue.component("useForm", useForm);
};

// Add build-in rules
extend("required", {
  ...required,
  messaage: "This field is required",
});
extend("email", {
  ...email,
  message: "Invalid email",
});

extend("positive", value => {
  //驗證條件: 符合的話為true，不作為
    if(value >= 0){
    return true;
    };
    return '必須大於零';
  });

// Add custom rule
extend("minMaxValue", {
  validate: (value, { min, max }) => {
    return value >= Number(min) && value <= Number(max);
  },
  message: (fieldName, { min, max }) => {
    return `${fieldName} must be between ${min} and ${max}`;
  },
  params: ["min", "max"],
});
