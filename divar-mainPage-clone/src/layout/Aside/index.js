"use strict";

import elementGenerator from "../../library/ElementGernerator";

function aside() {
  return elementGenerator({
    element: "aside",
    className:
      "fixed top-28 text-zinc-600 text-sm right-0 pr-10 w-64 hidden xl:block",
    child: [
      elementGenerator({
        element: "div",
        className: "flex flex-col gap-5 pb-5 border-b",
        child: [
          elementGenerator({ element: "h2", child: "دسته‌ها" }),
          elementGenerator({
            element: "ul",
            className: "flex flex-col gap-4",
            child: [
              elementGenerator({
                element: "li",
                className: "flex gap-2 items-center hover:text-slate-900",
                child: [
                  elementGenerator({
                    element: "ion-icon",
                    name: "business-outline",
                    className: "text-xl",
                  }),
                  elementGenerator({ element: "div", child: "املاک" }),
                ],
              }),
              elementGenerator({
                element: "li",
                className: "flex gap-2 items-center hover:text-slate-900",
                child: [
                  elementGenerator({
                    element: "ion-icon",
                    name: "car-sport-outline",
                    className: "text-xl",
                  }),
                  elementGenerator({ element: "div", child: "وسایل نقلیه" }),
                ],
              }),
              elementGenerator({
                element: "li",
                className: "flex gap-2 items-center hover:text-slate-900",
                child: [
                  elementGenerator({
                    element: "ion-icon",
                    name: "phone-portrait-outline",
                    className: "text-xl",
                  }),
                  elementGenerator({ element: "div", child: "کالای دیجیتال" }),
                ],
              }),
              elementGenerator({
                element: "li",
                className: "flex gap-2 items-center hover:text-slate-900",
                child: [
                  elementGenerator({
                    element: "ion-icon",
                    name: "bulb-outline",
                    className: "text-xl",
                  }),
                  elementGenerator({
                    element: "div",
                    child: "خانه و آشپزخانه",
                  }),
                ],
              }),
              elementGenerator({
                element: "li",
                className: "flex gap-2 items-center hover:text-slate-900",
                child: [
                  elementGenerator({
                    element: "ion-icon",
                    name: "color-palette-outline",
                    className: "text-xl",
                  }),
                  elementGenerator({ element: "div", child: "خدمات" }),
                ],
              }),
              elementGenerator({
                element: "li",
                className: "flex gap-2 items-center hover:text-slate-900",
                child: [
                  elementGenerator({
                    element: "ion-icon",
                    name: "watch-outline",
                    className: "text-xl",
                  }),
                  elementGenerator({ element: "div", child: "وسایل شخصی" }),
                ],
              }),
              elementGenerator({
                element: "li",
                className: "flex gap-2 items-center hover:text-slate-900",
                child: [
                  elementGenerator({
                    element: "ion-icon",
                    name: "dice-outline",
                    className: "text-xl",
                  }),
                  elementGenerator({ element: "div", child: "سرگرمی و فراغت" }),
                ],
              }),
              elementGenerator({
                element: "li",
                className: "flex gap-2 items-center hover:text-slate-900",
                child: [
                  elementGenerator({
                    element: "ion-icon",
                    name: "people-circle-outline",
                    className: "text-xl",
                  }),
                  elementGenerator({ element: "div", child: "اجتماعی" }),
                ],
              }),
              elementGenerator({
                element: "li",
                className: "flex gap-2 items-center hover:text-slate-900",
                child: [
                  elementGenerator({
                    element: "ion-icon",
                    name: "walk-outline",
                    className: "text-xl",
                  }),
                  elementGenerator({
                    element: "div",
                    child: "تجهیزات و صنعتی",
                  }),
                ],
              }),
              elementGenerator({
                element: "li",
                className: "flex gap-2 items-center hover:text-slate-900",
                child: [
                  elementGenerator({
                    element: "ion-icon",
                    name: "bag-handle-outline",
                    className: "text-xl",
                  }),
                  elementGenerator({
                    element: "div",
                    child: "استخدام و کاریابی",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      elementGenerator({
        element: "div",
        className: "border-b flex gap-1 items-center py-4",
        child: [
          elementGenerator({
            element: "ion-icon",
            name: "chevron-down-outline",
          }),
          elementGenerator({ element: "div", child: "محل" }),
        ],
      }),
      elementGenerator({
        element: "div",
        className: "border-b flex gap-1 items-center py-4",
        child: [
          elementGenerator({
            element: "ion-icon",
            name: "chevron-down-outline",
          }),
          elementGenerator({ element: "div", child: "قیمت" }),
        ],
      }),
      elementGenerator({
        element: "div",
        className: "border-b flex gap-1 items-center py-4",
        child: [
          elementGenerator({
            element: "ion-icon",
            name: "chevron-down-outline",
          }),
          elementGenerator({ element: "div", child: "وضعیت آگهی" }),
        ],
      }),
      elementGenerator({
        element: "div",
        className: "px-3 py-4 text-xs",
        child: elementGenerator({
          element: "div",
          className: "flex gap-4 flex-wrap",
          child: [
            elementGenerator({
              element: "span",
              className: "",
              child: "درباره دیوار",
            }),
            elementGenerator({
              element: "span",
              className: "",
              child: "دریافت برنامه",
            }),
            elementGenerator({
              element: "span",
              className: "",
              child: "بلاگ دیوار",
            }),
            elementGenerator({
              element: "span",
              className: "",
              child: "کسب و کارها",
            }),
            elementGenerator({
              element: "span",
              className: "",
              child: "پشتیبانی و قوانین",
            }),
          ],
        }),
      }),
      elementGenerator({
        element: "div",
        className: "flex justify-evenly px-3 py-2 text-xl",
        child: [
          elementGenerator({ element: "ion-icon", name: "logo-twitch" }),
          elementGenerator({ element: "ion-icon", name: "logo-twitter" }),
          elementGenerator({ element: "ion-icon", name: "logo-instagram" }),
          elementGenerator({ element: "ion-icon", name: "logo-linkedin" }),
        ],
      }),
      elementGenerator({
        element: "div",
        className: "flex",
        child: [
          elementGenerator({
            element: "div",
            child: elementGenerator({ element: "img", src: "" }),
          }),
          elementGenerator({
            element: "div",
            child: elementGenerator({ element: "img", src: "" }),
          }),
          elementGenerator({
            element: "div",
            child: elementGenerator({ element: "img", src: "" }),
          }),
        ],
      }),
    ],
  });
}

export default aside;
