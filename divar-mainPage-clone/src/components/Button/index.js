"use strict";
import elementGenerator from "../../library/ElementGernerator";

function button({ child, ...rest }) {
  const btn = document.createElement("button");
  for (const key in rest) {
    btn[key] = rest[key];
  }

  Array.isArray(child) ? btn.append(...child) : child && btn.append(child);
  return btn;
}

export default button;
