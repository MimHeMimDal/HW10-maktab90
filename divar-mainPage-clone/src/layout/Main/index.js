"use strict";

import elementGenerator from "../../library/ElementGernerator";
import cardsGroup from "../Card-group";
import middleText from "../MiddleText";
import navbarTop from "../Header/Nav-top";

function main() {
  return elementGenerator({
    element: "div",
    className: "flex flex-col gap-3",
    child: [
      elementGenerator({ element: "div", child: [middleText(), cardsGroup()] }),
      navbarTop(),
    ],
  });
}

export default main;
