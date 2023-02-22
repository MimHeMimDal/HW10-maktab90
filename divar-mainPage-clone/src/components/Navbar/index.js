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


