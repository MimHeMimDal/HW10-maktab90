"use strict";

import elementGenerator from "../../library/ElementGernerator";
import cardsGroup from "../Card-group";
import middleText from "../MiddleText";
import navbarTop from "../Nav-top";

function main() {
  return elementGenerator({
    element: "div",
    className: "flex flex-col gap-3",
    child: [
      navbarTop(),
      elementGenerator({
        element: "div",
        className: "flex flex-col gap-5 p-4 pt-36 xl:mr-72 xl:pt-28",
        child: [middleText(), cardsGroup()],
      }),
    ],
  });
}

export default main;
