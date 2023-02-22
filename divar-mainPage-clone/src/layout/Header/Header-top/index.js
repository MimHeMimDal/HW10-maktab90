"use strict";

import elementGenerator from "../../../library/ElementGernerator";
import navbar from "../../../components/Navbar";
import button from "../../../components/Button";

function header() {
  return elementGenerator({
    element: "header",
    child: navbar({
      child: elementGenerator({
        element: "form",
        child: [
          elementGenerator({
            element: "div",
            child: [
              elementGenerator({
                element: "div",
                child: elementGenerator({
                  element: "ion-icon",
                  name: "search-outline",
                  className: "text-gray-500",
                }),
                className: "flex items-center",
              }),
              elementGenerator({
                element: "input",
                placeholder: "جستجو در همه آگهی‌ها",
                className: "bg-transparent pr-2",
              }),
            ],
            className: "flex w-3/4 items-center",
          }),
          elementGenerator({
            element: "div",
            child: [
              elementGenerator({
                element: "div",
                className: "w-4 border-r justify-self-start",
              }),
              button({
                child: [
                  "قم",
                  elementGenerator({
                    element: "ion-icon",
                    name: "location-outline",
                  }),
                ],
                className: "flex items-center text-gray-400 ",
              }),
            ],
            className: "flex",
          }),
        ],
        className: "flex items-center justify-between",
      }),
      className: "bg-zinc-100 p-2 text-gray-300",
    }),
    className: "px-6 py-4 fixed top-0 bg-white w-full border-b lg:hidden",
  });
}

export default header;
