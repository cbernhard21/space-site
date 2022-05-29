var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  P: () => PageHeader
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e3bd9a9f = require("./index-e3bd9a9f.js");
var PageHeader_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1c4nj7b{letter-spacing:2.7px;margin-bottom:3rem}",
  map: null
};
const PageHeader = (0, import_index_e3bd9a9f.c)(($$result, $$props, $$bindings, slots) => {
  let { stepNumber } = $$props;
  let { step } = $$props;
  if ($$props.stepNumber === void 0 && $$bindings.stepNumber && stepNumber !== void 0)
    $$bindings.stepNumber(stepNumber);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  $$result.css.add(css);
  return `<h1 class="${"fs-500 ff-sans-cond svelte-1c4nj7b"}"><span class="${"text-dark-grey"}">${(0, import_index_e3bd9a9f.d)(stepNumber)}</span> ${(0, import_index_e3bd9a9f.d)(step)}</h1>`;
});
