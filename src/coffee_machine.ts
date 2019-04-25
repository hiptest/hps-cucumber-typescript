import { Lang, en, fr } from "./languages";

export class CoffeeMachine {
  started: boolean;
  coffeeServed: boolean;
  settingsDisplayed: boolean;
  message: String;
  lang: Lang;

  water: number;
  beans: number;
  grounds: number;
  countdownToDescale: number;

  waterHardness: number;
  grinder: String;

  public constructor() {
    this.started = false;
    this.coffeeServed =  false;

    this.message = "";
    this.lang = en;

    this.settingsDisplayed = false;

    this.grounds = 0;
    this.beans = 40;
    this.water = 60;
    this.countdownToDescale = 500;

    this.waterHardness = 2;
    this.grinder = "medium";
  }

  start(lang: String) {
    this.started = true;
    this.lang = this.getLang(lang);
  }

  getLang(lang: String) {
    if (lang == "fr") {
      return fr;
    }

    return en;
  }

  stop() {
    this.started = false;
  }

  getMessage() {
    if (! this.started ) {
      return '';
    }

    if (this.settingsDisplayed) {
      return this.lang.settings;
    }

    if (this.water <= 10) {
      return this.lang.tank;
    }

    if (this.beans < 3) {
      return this.lang.beans;
    }

    if (this.grounds >= 30) {
      return this.lang.grounds;
    }

    if (this.isDescalingNeeded()) {
      return this.lang.descale;
    }

    return this.lang.ready;
  }

  takeCoffee() {
    if (this.water == 0 || this.beans == 0) {
      this.coffeeServed = false;
    } else {
      this.coffeeServed = true;
      this.water -= 1;
      this.beans -= 1;
      this.grounds += 1;
      this.countdownToDescale -= 1;
    }
  }

  emptyGrounds() {
    this.grounds = 0;
  }

  fillBeans() {
    this.beans = 40;
  }

  fillTank() {
    this.water = 60;
  }

  showSettings() {
    this.settingsDisplayed = true;
  }

  getSettings() {
    let settings = new Map();

    settings.set('waterHardness', this.waterHardness);
    settings.set('grinder', this.grinder);

    return settings;
  }

  isDescalingNeeded() {
    return this.countdownToDescale <= 0
  }
}
