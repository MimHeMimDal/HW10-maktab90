"use strict";

function elementGenerator({ element, child, ...rest }) {
  const elem = document.createElement(element);
  for (const key in rest) {
    elem[key] = rest[key];
  }
  child && element.append(...child);
  return elem;
}

export default elementGenerator;
