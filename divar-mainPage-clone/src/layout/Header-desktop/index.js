"use strict";

import navbar from "../../components/Navbar";
import elementGenerator from "../../library/ElementGernerator";
import button from "../../components/Button";

function headerDesktop() {
  return elementGenerator({
    element: "header",
    className: "w-full fixed bg-white z-10 border-b xs:hidden xl:block",
    child: navbar({
      child: [
        elementGenerator({
          element: "div",
          className: "flex items-center gap-4",
          child: [
            elementGenerator({
              element: "a",
              child: elementGenerator({
                element: "img",
                src: "./src/assets/images/divar-svg-logo.svg",
                style: "width: 48px; height: 48px",
                className: "bg-transparent border-none",
              }),
              className: "bg-transparent border-none",
            }),
            elementGenerator({
              element: "div",
              child: "|",
              className: "font-thin",
            }),
            button({
              child: [
                elementGenerator({
                  element: "ion-icon",
                  name: "location-outline",
                }),
                elementGenerator({ element: "span", child: "قم" }),
              ],
              className:
                " flex items-center gap-1 hover:bg-slate-200 hover:rounded px-3 py-2",
            }),
            elementGenerator({
              element: "div",
              child: [
                elementGenerator({
                  element: "div",
                  child: [
                    button({ child: "دسته‌ها" }),
                    elementGenerator({
                      element: "ion-icon",
                      name: "chevron-down-outline",
                    }),
                  ],
                  className:
                    "flex gap-2 items-center hover:bg-slate-200 hover:rounded px-3 py-2",
                }),
                elementGenerator({
                  element: "div",
                  child: elementGenerator({
                    element: "div",
                    child: [
                      elementGenerator({
                        element: "ion-icon",
                        name: "search-outline",
                        className: "text-gray-400",
                      }),
                      elementGenerator({
                        element: "input",
                        placeholder: "جستجو در همه آگهی‌ها",
                        className: "bg-transparent placeholder:text-zinc-400 py-2 pl-16 grow w-80",
                      }),
                    ],
                    className: "flex items-center text-sm text-gray-100 gap-3",
                  }),
                  className: "bg-zinc-100 px-3 rounded grow",
                }),
                elementGenerator({ element: "div" }),
              ],
              className: "flex items-center gap-3",
            }),
          ],
        }),
        elementGenerator({
          element: "div",
          className: "flex items-center gap-1 ml-2",
          child: [
            button({
              className:
                "flex gap-3 items-center hover:bg-slate-200 hover:rounded px-3 py-2",
              child: [
                elementGenerator({
                  element: "ion-icon",
                  name: "person-outline",
                }),
                elementGenerator({ element: "div", child: "دیوار من" }),
              ],
            }),
            button({
              className:
                "flex gap-3 items-center hover:bg-slate-200 hover:rounded px-3 py-2",
              child: [
                elementGenerator({
                  element: "ion-icon",
                  name: "chatbubble-outline",
                }),
                elementGenerator({ element: "div", child: "چت" }),
              ],
            }),
            button({
              className:
                "flex gap-3 items-center hover:bg-slate-200 hover:rounded px-3 py-2",
              child: "پشتیبانی",
            }),
            button({
              className:
                "flex gap-3 items-center text-white bg-red-800 hover:bg-red-700 rounded px-4 py-2",
              child: "ثبت آگهی",
            }),
          ],
        }),
      ],
      className:
        "flex items-center justify-between text-sm text-gray-500 py-2 pr-6 pl-3",
    }),
  });
}

export default headerDesktop;
