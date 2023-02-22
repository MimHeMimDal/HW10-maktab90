"use strict";

import navbar from "../../components/Navbar";
import elementGenerator from "../../library/ElementGernerator";
import button from "../../components/Button";


function navbarBot() {
  return navbar({
    className: "flex justify-between text-zinc-500 text-sm fixed bottom-0 w-full h-16 bg-white px-10 py-1 border-t xl:hidden",
    child: [
      button({
        className: "flex items-center flex-col md:flex-row gap-1",
        child: [
            elementGenerator({ element: "div", child: elementGenerator({element: "img", src: "../src/assets/images/divar-svg-logo.svg"}) }),
          elementGenerator({ element: "div",className: "text-red-800", child: "آگهی‌ها" }),
        ],
      }),
      button({
        className: "flex items-center flex-col md:flex-row gap-1",
        child: [
          elementGenerator({ element: "ion-icon", name: "list-outline", className: "text-2xl" }),
          elementGenerator({ element: "div", child: "دسته‌ها" }),
        ],
      }),
      button({
        className: "flex items-center flex-col md:flex-row gap-1",
        child: [
          elementGenerator({ element: "ion-icon", name: "add-circle", className: "text-2xl" }),
          elementGenerator({ element: "div", child: "ثبت آگهی" }),
        ],
      }), button({
        className: "flex items-center flex-col md:flex-row gap-1",
        child: [
          elementGenerator({ element: "ion-icon", name: "chatbubble", className: "text-2xl" }),
          elementGenerator({ element: "div", child: "چت" }),
        ],
      }), button({
        className: "flex items-center flex-col md:flex-row gap-1",
        child: [
          elementGenerator({ element: "ion-icon", name: "person", className: "text-2xl" }),
          elementGenerator({ element: "div", child: "دیوار من" }),
        ],
      }),
    ],
  });
}

export default navbarBot;
