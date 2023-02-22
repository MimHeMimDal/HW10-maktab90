"use strict";

import elementGenerator from "../../library/ElementGernerator";

function middleText() {
  return elementGenerator({
    element: "div",
    className: "text-start text-xs text-gray-500 xl:text-end",
    child: "دیوار قم،انواع آگهی‌ها و خدمات در قم",
  });
}

export default middleText;
