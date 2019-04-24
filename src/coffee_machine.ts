export class CoffeeMachine {
  started: boolean;
  coffeeServed: boolean;
  message: String;
  lang: String;

  tank: number;
  beans: number;
  grounds: number;
  countdownToDescale: number;

  public constructor() {
    this.started = false;
    this.coffeeServed =  false;
    this.message = "";
    this.lang = "en";

    this.tank = 60;
    this.beans = 40;
    this.grounds = 0;
    this.countdownToDescale = 500;
  }

  start(lang: String) {
    this.started = true;
    this.lang = lang || "en";
  }

  stop() {
    this.started = false;
  }

  getMessage() {
    return this.message;
  }

  takeCoffee() {
  }

  emptyGrounds() {
  }

  fillBeans() {
  }

  fillTank() {
  }

  showSettings() {
  }

  getSettings() {
  }
}
