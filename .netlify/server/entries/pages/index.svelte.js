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
  code: "#home.svelte-l7k0dv.svelte-l7k0dv{background-image:url('/assets/home/background-home-mobile.jpg');background-repeat:no-repeat;background-size:cover;height:100vh}@media screen and (min-width: 767px){#home.svelte-l7k0dv.svelte-l7k0dv{background-image:url('/assets/home/background-home-tablet.jpg')}}@media screen and (min-width: 1250px){#home.svelte-l7k0dv.svelte-l7k0dv{background-image:url('/assets/home/background-home-desktop.jpg')}}.content-container.svelte-l7k0dv.svelte-l7k0dv{width:100%;justify-self:center;text-align:center}.top-padding.svelte-l7k0dv.svelte-l7k0dv{padding-top:2rem}.large-button-container.svelte-l7k0dv.svelte-l7k0dv{height:100%;text-align:center;align-self:flex-end;padding-top:7rem}.large-btn.svelte-l7k0dv.svelte-l7k0dv{z-index:1;display:inline-grid;place-items:center;padding:1px 2em;border-radius:50%;aspect-ratio:1;text-decoration:none;background-color:var(--clr-white);color:var(--clr-dark)}.text.svelte-l7k0dv.svelte-l7k0dv{max-width:38ch;margin:0 auto;line-height:25px}@media screen and (min-width: 1250px){.text.svelte-l7k0dv.svelte-l7k0dv{margin:0}}@media screen and (min-width: 767px){.text.svelte-l7k0dv.svelte-l7k0dv{max-width:50ch}}@media screen and (min-width: 1250px){.content-container.svelte-l7k0dv.svelte-l7k0dv,.large-button-container.svelte-l7k0dv.svelte-l7k0dv{align-self:end}.content-container.svelte-l7k0dv.svelte-l7k0dv{text-align:left;padding:0 0 14rem 0}.large-button-container.svelte-l7k0dv.svelte-l7k0dv{padding:0 0 14rem 0;height:auto;text-align:right}.content-container.svelte-l7k0dv h5.svelte-l7k0dv{margin-bottom:3rem}.content-container.svelte-l7k0dv h1.svelte-l7k0dv{margin-bottom:5rem}.text.svelte-l7k0dv.svelte-l7k0dv{max-width:45ch;line-height:1.8}}",
  map: null
};
const Routes = (0, import_index_e3bd9a9f.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="${"home"}" class="${"svelte-l7k0dv"}"><div class="${"main-container"}"><div class="${"content-container top-padding svelte-l7k0dv"}"><h5 class="${"fs-500 text-light ff-sans-cond svelte-l7k0dv"}">So, you want to travel to</h5>
			<h1 class="${"fs-900 svelte-l7k0dv"}">Space</h1>
			<p class="${"text text-light fs-400 svelte-l7k0dv"}">Let\u2019s face it; if you want to go to space, you might as well genuinely go to outer space and
				not hover kind of on the edge of it. Well sit back, and relax because we\u2019ll give you a truly
				out of this world experience!
			</p></div>

		<div class="${"large-button-container svelte-l7k0dv"}"><a href="${"/destination"}" class="${"fs-600 uppercase large-btn svelte-l7k0dv"}">Explore</a></div></div>
</section>`;
});
