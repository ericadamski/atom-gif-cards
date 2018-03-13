"use babel";

import AtomGifCardsView from "./atom-gif-cards-view";
import { CompositeDisposable } from "atom";

export default {
  atomGifCardsView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atomGifCardsView = new AtomGifCardsView(state.atomGifCardsViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atomGifCardsView.getElement(),
      visible: false
    });

    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(
      atom.commands.add("atom-workspace", {
        "atom-gif-cards:toggle": () => this.toggle()
      })
    );
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atomGifCardsView.destroy();
  },

  serialize() {
    return {
      atomGifCardsViewState: this.atomGifCardsView.serialize()
    };
  },

  toggle() {
    console.log("AtomGifCards was toggled!");
    return this.modalPanel.isVisible()
      ? this.modalPanel.hide()
      : this.modalPanel.show();
  }
};
