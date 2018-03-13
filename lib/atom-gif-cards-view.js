"use babel";

import React from "react";
import { render } from "react-dom";

import Main from "./components/main";

export default class AtomGifCardsView {
  constructor(serializedState) {
    this.element = document.createElement("div");
    this.element.classList.add("atom-gif-cards");

    render(<Main />, this.element);
  }

  serialize() {}

  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }
}
