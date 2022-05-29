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
  default: () => Technology
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e3bd9a9f = require("../../chunks/index-e3bd9a9f.js");
var technology_svelte_svelte_type_style_lang = "";
const css = {
  code: "#technology.svelte-1ljcwej{background-image:url('/assets/technology/background-technology-mobile.jpg');background-repeat:no-repeat;background-size:cover;height:100vh}@media screen and (min-width: 767px){#technology.svelte-1ljcwej{background-image:url('/assets/technology/background-technology-tablet.jpg')}}@media screen and (min-width: 1250px){#technology.svelte-1ljcwej{background-image:url('/assets/technology/background-technology-desktop.jpg')}}",
  map: null
};
const Technology = (0, import_index_e3bd9a9f.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"technology"}" class="${"svelte-1ljcwej"}"><div class="${"main-container"}"><h1 class="${"fs-800"}">technology</h1></div>
</div>`;
});
