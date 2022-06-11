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
var import_data_59143710 = require("../../chunks/data-59143710.js");
var import_PageHeader_db1323aa = require("../../chunks/PageHeader-db1323aa.js");
var crew_svelte_svelte_type_style_lang = "";
const css = {
  code: "#crew.svelte-1f8mlbz{background-image:url('/assets/crew/background-crew-mobile.jpg');background-repeat:no-repeat;background-size:cover;min-height:100vh}@media screen and (min-width: 767px){#crew.svelte-1f8mlbz{background-image:url('/assets/crew/background-crew-tablet.jpg')}}@media screen and (min-width: 1250px){#crew.svelte-1f8mlbz{background-image:url('/assets/crew/background-crew-desktop.jpg')}}.heading.svelte-1f8mlbz{text-align:center}.crew-img-container.svelte-1f8mlbz{width:50%;margin:0 auto}hr.svelte-1f8mlbz{width:100%;height:2px;border:none;background-color:var(--clr-grey);margin-bottom:3rem}nav.svelte-1f8mlbz{width:50%;margin:0 auto;display:flex;flex-direction:row;justify-content:space-evenly}.circle.svelte-1f8mlbz{border-radius:50%;background-color:var(--clr-grey);width:10px;height:10px}.crew-active.svelte-1f8mlbz{background-color:var(--clr-white)}.hidden.svelte-1f8mlbz{display:none}",
  map: null
};
const Crew = (0, import_index_e3bd9a9f.c)(($$result, $$props, $$bindings, slots) => {
  import_data_59143710.c.forEach((member, i) => {
    member.id = i + 1;
  });
  console.log(import_data_59143710.c);
  let currentMember = "Douglas Hurley";
  $$result.css.add(css);
  return `<div id="${"crew"}" class="${"svelte-1f8mlbz"}"><div class="${"content-container top-padding"}"><div class="${"heading svelte-1f8mlbz"}">${(0, import_index_e3bd9a9f.v)(import_PageHeader_db1323aa.P, "PageHeader").$$render($$result, { stepNumber: "02", step: "Meet Your Crew" }, {}, {})}
			${(0, import_index_e3bd9a9f.e)(import_data_59143710.c, (member) => {
    return `${currentMember === member.name ? `<div class="${"crew-img-container svelte-1f8mlbz"}"><img${(0, import_index_e3bd9a9f.b)("src", member.images.webp, 0)}${(0, import_index_e3bd9a9f.b)("alt", member.name, 0)} class="${"crew-img"}">
				</div>` : ``}`;
  })}

			<hr class="${"line-break svelte-1f8mlbz"}">

			<div class="${"crew-content"}"><nav aria-label="${"secondary"}" class="${"svelte-1f8mlbz"}">${(0, import_index_e3bd9a9f.e)(import_data_59143710.c, (member) => {
    return `<div class="${[
      "circle text-dark-grey svelte-1f8mlbz",
      currentMember === member.name ? "crew-active" : ""
    ].join(" ").trim()}"><span class="${"hidden svelte-1f8mlbz"}">${(0, import_index_e3bd9a9f.d)(member.id)}</span></div>`;
  })}</nav>

				<article class="${"crew-details"}">${(0, import_index_e3bd9a9f.e)(import_data_59143710.c, (member) => {
    return `${currentMember === member.name ? `<h2 class="${"crew-role"}">${(0, import_index_e3bd9a9f.d)(member.role)}</h2>
							<h3 class="${"crew-name"}">${(0, import_index_e3bd9a9f.d)(member.name)}</h3>
							<p class="${"crew-bio"}">${(0, import_index_e3bd9a9f.d)(member.bio)}</p>` : ``}`;
  })}</article></div></div></div>
</div>`;
});
