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
  default: () => Crew
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e3bd9a9f = require("../../chunks/index-e3bd9a9f.js");
var import_PageHeader_db1323aa = require("../../chunks/PageHeader-db1323aa.js");
var crew_svelte_svelte_type_style_lang = "";
const css = {
  code: "#crew.svelte-16uz5gc{background-image:url('/assets/crew/background-crew-mobile.jpg');background-repeat:no-repeat;background-size:cover;height:100vh}@media screen and (min-width: 767px){#crew.svelte-16uz5gc{background-image:url('/assets/crew/background-crew-tablet.jpg')}}@media screen and (min-width: 1250px){#crew.svelte-16uz5gc{background-image:url('/assets/crew/background-crew-desktop.jpg')}}",
  map: null
};
const Crew = (0, import_index_e3bd9a9f.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"crew"}" class="${"svelte-16uz5gc"}"><div class="${"content-container"}"><div class="${"header"}">${(0, import_index_e3bd9a9f.v)(import_PageHeader_db1323aa.P, "PageHeader").$$render($$result, { stepNumber: "02", step: "Meet Your Crew" }, {}, {})}</div></div>
</div>`;
});
