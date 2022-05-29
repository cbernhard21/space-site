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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e3bd9a9f = require("../../chunks/index-e3bd9a9f.js");
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "#home.svelte-9qjw3f.svelte-9qjw3f{background-image:url('/assets/home/background-home-mobile.jpg');background-repeat:no-repeat;background-size:cover;height:100vh}@media screen and (min-width: 767px){#home.svelte-9qjw3f.svelte-9qjw3f{background-image:url('/assets/home/background-home-tablet.jpg')}}@media screen and (min-width: 1250px){#home.svelte-9qjw3f.svelte-9qjw3f{background-image:url('/assets/home/background-home-desktop.jpg')}}.content-container.svelte-9qjw3f.svelte-9qjw3f{width:100%;justify-self:center;text-align:center}.large-button-container.svelte-9qjw3f.svelte-9qjw3f{height:100%;text-align:center;align-self:flex-end;padding-top:7rem}.large-btn.svelte-9qjw3f.svelte-9qjw3f{z-index:1;display:inline-grid;place-items:center;padding:1px 2em;border-radius:50%;aspect-ratio:1;text-decoration:none;background-color:var(--clr-white);color:var(--clr-dark)}.text.svelte-9qjw3f.svelte-9qjw3f{max-width:38ch;margin:0 auto;line-height:25px}@media screen and (min-width: 1250px){.text.svelte-9qjw3f.svelte-9qjw3f{margin:0}}@media screen and (min-width: 767px){.text.svelte-9qjw3f.svelte-9qjw3f{max-width:50ch}}@media screen and (min-width: 1250px){.content-container.svelte-9qjw3f.svelte-9qjw3f,.large-button-container.svelte-9qjw3f.svelte-9qjw3f{align-self:end}.content-container.svelte-9qjw3f.svelte-9qjw3f{text-align:left;padding:0 0 14rem 0}.large-button-container.svelte-9qjw3f.svelte-9qjw3f{padding:0 0 14rem 0;height:auto;text-align:right}.content-container.svelte-9qjw3f h5.svelte-9qjw3f{margin-bottom:3rem}.content-container.svelte-9qjw3f h1.svelte-9qjw3f{margin-bottom:5rem}.text.svelte-9qjw3f.svelte-9qjw3f{max-width:45ch;line-height:1.8}}",
  map: null
};
const Routes = (0, import_index_e3bd9a9f.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="${"home"}" class="${"svelte-9qjw3f"}"><div class="${"main-container"}"><div class="${"content-container svelte-9qjw3f"}"><h5 class="${"fs-500 text-light ff-sans-cond svelte-9qjw3f"}">So, you want to travel to</h5>
			<h1 class="${"fs-900 svelte-9qjw3f"}">Space</h1>
			<p class="${"text text-light fs-400 svelte-9qjw3f"}">Let\u2019s face it; if you want to go to space, you might as well genuinely go to outer space and
				not hover kind of on the edge of it. Well sit back, and relax because we\u2019ll give you a truly
				out of this world experience!
			</p></div>

		<div class="${"large-button-container svelte-9qjw3f"}"><a href="${"/destination"}" class="${"fs-600 uppercase large-btn svelte-9qjw3f"}">Explore</a></div></div>
</section>`;
});
