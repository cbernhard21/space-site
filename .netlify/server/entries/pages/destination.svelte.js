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
  code: "#destination.svelte-128hkkf{background-image:url('/assets/destination/background-destination-mobile.jpg');background-repeat:no-repeat;background-size:cover;height:100vh}@media screen and (min-width: 767px){#destination.svelte-128hkkf{background-image:url('/assets/destination/background-destination-tablet.jpg')}}@media screen and (min-width: 1250px){#destination.svelte-128hkkf{background-image:url('/assets/destination/background-destination-desktop.jpg')}}.content-container.svelte-128hkkf{padding-top:10rem;display:grid;grid-template-rows:repeat(2, max-content);height:100%}h1.svelte-128hkkf{letter-spacing:2.7px}",
  map: null
};
let currentDestination = "Moon";
const Destination = (0, import_index_e3bd9a9f.c)(($$result, $$props, $$bindings, slots) => {
  console.log(destinations);
  $$result.css.add(css);
  return `<div id="${"destination"}" class="${"svelte-128hkkf"}"><div class="${"content-container svelte-128hkkf"}"><div class="${"heading"}"><h1 class="${"fs-300 ff-sans-cond text-center svelte-128hkkf"}"><span class="${"text-dark-grey"}">01</span> Pick Your Destination</h1>
			${(0, import_index_e3bd9a9f.e)(destinations, (destination) => {
    return `${currentDestination === destination.name ? `<img${(0, import_index_e3bd9a9f.b)("src", destination.images.png, 0)}${(0, import_index_e3bd9a9f.b)("alt", destination.name, 0)}>` : ``}`;
  })}</div>
		<div class="${"content"}"><nav aria-label="${"secondary"}">${(0, import_index_e3bd9a9f.e)(destinations, (destination) => {
    return `<p>${(0, import_index_e3bd9a9f.d)(destination.name)}</p>`;
  })}</nav></div></div>
</div>`;
});
