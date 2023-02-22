"use strict";

import card from "../../components/Card";
import elementGenerator from "../../library/ElementGernerator";
import Data from "../../assets/Data";

function cardsGroup() {
  let cardGroup = elementGenerator({
    element: "div",
    className: "grid gap-4 grid-cols-1 md:grid-cols-2",
  });
  Data.forEach((userData) =>
    cardGroup.append(
      card({
        id: userData.id,
        tiltle: userData.tiltle,
        status: userData.status,
        price: userData.price,
        time: userData.time,
        location: userData.location,
        src: userData.src
      })
    )
  );
  return cardGroup;
}

export default cardsGroup;
