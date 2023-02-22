"use strict";
import elementGenerator from "../../library/ElementGernerator";
import navbar from "../../components/Navbar";
import button from "../../components/Button";
function navbarTop() {
  return elementGenerator({
    element: "div",
    className: "w-full px-4 border-b z-10 top-16 bg-white fixed lg:hidden",
    child: navbar({
      child: elementGenerator({
        element: "div",
        className: "overflow-scroll",
        child: elementGenerator({
          element: "div",
          className: "flex gap-2",
          child: [
            button({
              child: [
                elementGenerator({ element: "ion-icon", name: "options" }),
                elementGenerator({ element: "div", child: "فیلترها" }),
              ],
              className:
                "inline-flex border rounded-3xl border-gray-300 items-center gap-1  px-3 h-8",
            }),
            button({
              child: [
                elementGenerator({ element: "ion-icon", name: "list-outline" }),
                elementGenerator({ element: "div", child: "دسته‌ها" }),
              ],
              className:
                "inline-flex border rounded-3xl border-gray-300 items-center gap-1 px-3 h-8",
            }),
            button({
              child: elementGenerator({
                element: "div",
                className: "w-20",
                child: "خودرو سواری",
              }),
              className:
                "inline-flex items-center border rounded-3xl border-gray-300 px-3 h-8",
            }),
            button({
              child: elementGenerator({
                element: "div",
                className: "w-20",
                child: "فروش آپارتمان",
              }),
              className:
                "inline-flex items-center border rounded-3xl border-gray-300 px-3 h-8",
            }),
            button({
              child: elementGenerator({
                element: "div",
                className: "w-20",
                child: "اجاره آپارتمان",
              }),
              className:
                "inline-flex items-center border rounded-3xl border-gray-300 px-3 h-8",
            }),
            button({
              child: elementGenerator({
                element: "div",
                className: "w-28",
                child: "صندلی و نیمکت",
              }),
              className:
                "inline-flex items-center border rounded-3xl border-gray-300 px-3 h-8",
            }),
            button({
              child: elementGenerator({
                element: "div",
                className: "w-20",
                child: "وسایل شخصی",
              }),
              className:
                "inline-flex items-center border rounded-3xl border-gray-300 px-3 h-8",
            }),
            button({
              child: "خدمات",
              className: " border rounded-3xl border-gray-300 px-3 h-8",
            }),
            button({
              child: "استخدام",
              className: "border rounded-3xl border-gray-300 px-3 h-8",
            }),
            button({
              child: "تلوزیون",
              className: "border rounded-3xl border-gray-300 px-3 h-8",
            }),
          ],
        }),
      }),
      className: "py-2 text-gray-400 text-sm",
    }),
  });
}

export default navbarTop;
