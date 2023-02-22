"use strict";

import elementGenerator from "../../library/ElementGernerator";

function card({ id, tiltle, src, price, status, time, location }) {
  return elementGenerator({
    element: "div",
    className: "flex border border-gray-200 p-4 rounded",
    id: id,
    child: [
      elementGenerator({
        element: "div",
        className: "w-full flex flex-col justify-between",
        child: [
          elementGenerator({
            element: "h2",
            className: "font-bold text-gray-700",
            child: tiltle,
          }),
          elementGenerator({
            element: "div",
            className: "flex flex-col gap-1",
            child: [
              elementGenerator({
                element: "div",
                className: "text-gray-400 text-sm",
                child: status,
              }),
              elementGenerator({
                element: "div",
                className: "text-gray-400 text-sm",
                child: price.toLocaleString(),
              }),
              elementGenerator({
                element: "div",
                className: "text-gray-400 text-sm",
                child: `${time} در ${location}`,
              }),
            ],
          }),
        ],
      }),
      elementGenerator({
        element: "div",
        className: "flex items-end justify-center ml-1",
        child: elementGenerator({
          element: "ion-icon",
          className: "text-gray-500",
          name: "chatbubble-outline",
        }),
      }),

      elementGenerator({
        element: "div",
        child: elementGenerator({
          element: "img",
          className: "rounded",
          src: src,
        }),
      }),
    ],
  });
}

export default card;
