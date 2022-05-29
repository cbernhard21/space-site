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
  default: () => Destination
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e3bd9a9f = require("../../chunks/index-e3bd9a9f.js");
var import_PageHeader_db1323aa = require("../../chunks/PageHeader-db1323aa.js");
const destinations = [
  {
    name: "Moon",
    images: {
      png: "./assets/destination/image-moon.png",
      webp: "./assets/destination/image-moon.webp"
    },
    description: "See our planet as you\u2019ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you\u2019re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days"
  },
  {
    name: "Mars",
    images: {
      png: "./assets/destination/image-mars.png",
      webp: "./assets/destination/image-mars.webp"
    },
    description: "Don\u2019t forget to pack your hiking boots. You\u2019ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It\u2019s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months"
  },
  {
    name: "Europa",
    images: {
      png: "./assets/destination/image-europa.png",
      webp: "./assets/destination/image-europa.webp"
    },
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover\u2019s dream. With an icy surface, it\u2019s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years"
  },
  {
    name: "Titan",
    images: {
      png: "./assets/destination/image-titan.png",
      webp: "./assets/destination/image-titan.webp"
    },
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years"
  }
];
var destination_svelte_svelte_type_style_lang = "";
const css = {
  code: "#destination.svelte-a7n1a{background-image:url('/assets/destination/background-destination-mobile.jpg');background-repeat:no-repeat;background-size:cover;height:100vh}@media screen and (min-width: 767px){#destination.svelte-a7n1a{background-image:url('/assets/destination/background-destination-tablet.jpg')}}@media screen and (min-width: 1250px){#destination.svelte-a7n1a{background-image:url('/assets/destination/background-destination-desktop.jpg')}}.content.svelte-a7n1a{padding-bottom:10rem;text-align:center}.planet-img.svelte-a7n1a{width:50%;min-width:17rem;margin:0 auto}.top-padding.svelte-a7n1a{padding-top:10rem}.heading.svelte-a7n1a{margin-bottom:3rem;text-align:center}nav.svelte-a7n1a{margin-bottom:2.7rem}.destination-nav.svelte-a7n1a{width:75%;margin:0 auto;display:flex;flex-direction:row;justify-content:space-between}li.svelte-a7n1a{padding:1rem 0;cursor:pointer}.text.svelte-a7n1a{line-height:1.7;margin-bottom:3.5rem}hr.svelte-a7n1a{width:100%;height:2px;border:none;background-color:var(--clr-dark-grey);margin-bottom:3rem}.distance.svelte-a7n1a{margin-bottom:4.5rem}.subheading-2.svelte-a7n1a{margin-bottom:1.5rem}.facts-container.svelte-a7n1a{display:flex;flex-direction:column}@media screen and (min-width: 767px){.content-container.svelte-a7n1a{padding-top:13.5rem}.content.svelte-a7n1a{width:75%;margin:0 auto;padding-bottom:0}.heading.svelte-a7n1a{text-align:left}.destination-nav.svelte-a7n1a{width:65%}.planet-img.svelte-a7n1a{max-width:30rem;margin:0 auto}.facts-container.svelte-a7n1a{width:100%;flex-direction:row;justify-content:space-evenly}}@media screen and (min-width: 1250px){.content-container.svelte-a7n1a{overflow:hidden;padding-top:15rem;grid-template-columns:repeat(2, 1fr);grid-template-rows:auto}.heading.svelte-a7n1a{padding:0 5rem}.planet-img-container.svelte-a7n1a{padding:0 8rem}.planet-img.svelte-a7n1a{width:100%;max-width:100%}.content.svelte-a7n1a{text-align:left;display:flex;flex-direction:column;justify-content:center}.destination-nav.svelte-a7n1a{margin-left:0}.text.svelte-a7n1a{margin-bottom:6rem}.facts-container.svelte-a7n1a{justify-content:flex-start;gap:8rem}}",
  map: null
};
const Destination = (0, import_index_e3bd9a9f.c)(($$result, $$props, $$bindings, slots) => {
  let currentDestination = "Moon";
  $$result.css.add(css);
  return `<div id="${"destination"}" class="${"svelte-a7n1a"}"><div class="${"content-container top-padding svelte-a7n1a"}"><div class="${"heading svelte-a7n1a"}">${(0, import_index_e3bd9a9f.v)(import_PageHeader_db1323aa.P, "PageHeader").$$render($$result, {
    stepNumber: "01",
    step: "Pick Your Destination"
  }, {}, {})}
			${(0, import_index_e3bd9a9f.e)(destinations, (destination) => {
    return `${currentDestination === destination.name ? `<div class="${"planet-img-container svelte-a7n1a"}"><img${(0, import_index_e3bd9a9f.b)("src", destination.images.png, 0)}${(0, import_index_e3bd9a9f.b)("alt", destination.name, 0)} class="${"planet-img svelte-a7n1a"}">
				</div>` : ``}`;
  })}</div>
		<div class="${"content svelte-a7n1a"}"><nav aria-label="${"secondary"}" class="${"svelte-a7n1a"}"><ul class="${"destination-nav svelte-a7n1a"}">${(0, import_index_e3bd9a9f.e)(destinations, (destination) => {
    return `<li class="${[
      "fs-300 text-light uppercase svelte-a7n1a",
      currentDestination === destination.name ? "active" : ""
    ].join(" ").trim()}">${(0, import_index_e3bd9a9f.d)(destination.name)}</li>`;
  })}</ul></nav>
			${(0, import_index_e3bd9a9f.e)(destinations, (destination) => {
    return `${currentDestination === destination.name ? `<h2 class="${"fs-800"}">${(0, import_index_e3bd9a9f.d)(destination.name)}</h2>
					<p class="${"fs-400 text-light text svelte-a7n1a"}">${(0, import_index_e3bd9a9f.d)(destination.description)}</p>` : ``}`;
  })}
			<hr class="${"line-break svelte-a7n1a"}">
			<div class="${"facts-container svelte-a7n1a"}"><div class="${"distance-container"}"><p class="${"uppercase ff-sans-cond text-light subheading-2 svelte-a7n1a"}">Avg. Distance</p>
					${(0, import_index_e3bd9a9f.e)(destinations, (destination) => {
    return `${currentDestination === destination.name ? `<p class="${"uppercase distance subheading-1 svelte-a7n1a"}">${(0, import_index_e3bd9a9f.d)(destination.distance)}</p>` : ``}`;
  })}</div>
				<div class="${"time-container"}"><p class="${"uppercase ff-sans-cond text-light subheading-2 svelte-a7n1a"}">Est. Travel Time</p>
					${(0, import_index_e3bd9a9f.e)(destinations, (destination) => {
    return `${currentDestination === destination.name ? `<p class="${"uppercase subheading-1"}">${(0, import_index_e3bd9a9f.d)(destination.travel)}</p>` : ``}`;
  })}</div></div></div></div>
</div>`;
});
