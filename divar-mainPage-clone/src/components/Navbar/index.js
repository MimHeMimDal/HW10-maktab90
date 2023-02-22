"use strict";
import elementGenerator from "../../library/ElementGernerator";
import button from "../Button";

function navbar({ child, ...rest }) {
  const nav = document.createElement("nav");
  for (const key in rest) {
    nav[key] = rest[key];
  }

  Array.isArray(child) ? nav.append(...child) : child && nav.append(child);
  return nav;
}

export default navbar;

// child: [
//   elementGenerator({
//     element: "a",
//     child: elementGenerator({
//       element: "img",
//       src: "./src/assests/images/divar-svg-logo.svg",
//       style: "width: 48px; height: 48px",
//       className: "bg-transparent border-none",
//     }),
//     className: "bg-transparent border-none",
//   }),
//   elementGenerator({ element: "div", child: "|", className: "font-thin" }),
//   button({
//     child: [
//       elementGenerator({ element: "ion-icon", name: "location-outline" }),
//       elementGenerator({ element: "span", child: "قم" }),
//     ],
//     className: "font-bold gap-2",
//   }),
//   elementGenerator({
//     element: "div",
//     child: [
//       elementGenerator({
//         element: "div",
//         child: [
//           button({ child: "دسته‌ها" }),
//           elementGenerator({
//             element: "ion-icon",
//             name: "chevron-down-outline",
//           }),
//         ],
//         className: "flex gap-2 items-center",
//       }),
//       elementGenerator({
//         element: "div",
//         child: elementGenerator({
//           element: "div",
//           child: [
//             elementGenerator({
//               element: "ion-icon",
//               name: "search-outline",
//               className: "text-gray-400"
//             }),
//             elementGenerator({
//               element: "input",
//               placeholder: "جستجو در همه آگهی‌ها",
//               className: "bg-transparent pl-16"
//             }),
//           ],
//           className: "flex items-center text-sm text-gray-100 gap-3",
//         }), className: "bg-zinc-100 p-2"
//       }),
//       elementGenerator({ element: "div" }),
//     ],
//     className: "flex items-center",
//   }),
// ],
// className: "flex items-center text-gray-500",
