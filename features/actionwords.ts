import { assert } from "chai";
import { CoffeeMachine } from "../src/coffee_machine";

export class ActionWords {
    sut: CoffeeMachine;
    handleBeans: boolean;
    handleGrounds: boolean;
    handleWater: boolean;

    public constructor() {
        this.sut = new CoffeeMachine();
        this.handleBeans = false;
        this.handleGrounds = false;
        this.handleWater = false;
    }

    iStartTheCoffeeMachineUsingLanguageLang(lang = "en") {
        this.sut.start(lang);
    }

    iShutdownTheCoffeeMachine() {
        this.sut.stop();
    }

    messageMessageShouldBeDisplayed(message = "") {
        assert.equal(this.sut.getMessage(), message);
    }

    coffeeShouldBeServed() {
        assert.equal(this.sut.coffeeServed, true);
    }

    coffeeShouldNotBeServed() {
        assert.equal(this.sut.coffeeServed, false);
    }

    iTakeACoffee() {
        this.sut.takeCoffee();

        if (this.handleWater) {
            this.iFillTheWaterTank();
        }

        if (this.handleBeans) {
            this.iFillTheBeansTank();
        }

        if (this.handleGrounds) {
            this.iEmptyTheCoffeeGrounds();
        }
    }

    iEmptyTheCoffeeGrounds() {
        this.sut.emptyGrounds();
    }

    iFillTheBeansTank() {
        this.sut.fillBeans();
    }

    iFillTheWaterTank() {
        this.sut.fillTank();
    }

    iTakeCoffeeNumberCoffees(coffee_number = 10) {
        while ((coffee_number > 0)) {
            this.iTakeACoffee();
            coffee_number = coffee_number - 1;
        }
    }

    theCoffeeMachineIsStarted() {
        this.iStartTheCoffeeMachineUsingLanguageLang("en");
    }

    iHandleEverythingExceptTheWaterTank() {
        this.iHandleCoffeeGrounds();
        this.iHandleBeans();
    }

    iHandleWaterTank() {
        this.handleWater = true;
    }

    iHandleBeans() {
        this.handleBeans = true;
    }

    iHandleCoffeeGrounds() {
        this.handleGrounds = true;
    }

    iHandleEverythingExceptTheBeans() {
        this.iHandleWaterTank();
        this.iHandleCoffeeGrounds();
    }

    iHandleEverythingExceptTheGrounds() {
        this.iHandleWaterTank();
        this.iHandleBeans();
    }

    displayedMessageIs(__free_text = "") {
        this.messageMessageShouldBeDisplayed(__free_text);
    }

    iSwitchToSettingsMode() {
        this.sut.showSettings();
    }

    settingsShouldBe(__datatable = "||") {
        assert.equal(__datatable, "coucou");
    }
}
