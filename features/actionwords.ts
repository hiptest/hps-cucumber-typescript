export class ActionWords {
    iStartTheCoffeeMachineUsingLanguageLang(lang = "en") {
        // TODO: Implement action: "Start the coffee machine using language " + String(lang)
        throw 'Not implemented';
    }
    iShutdownTheCoffeeMachine() {
        // TODO: Implement action: "Shutdown coffee machine"
        throw 'Not implemented';
    }
    messageMessageShouldBeDisplayed(message = "") {
        // TODO: Implement result: "Displayed message is \"" + String(message) + "\""
        throw 'Not implemented';
    }
    coffeeShouldBeServed() {
        // TODO: Implement result: "Coffee is served :)"
        throw 'Not implemented';
    }
    coffeeShouldNotBeServed() {
        // TODO: Implement result: "No coffee is served :("
        throw 'Not implemented';
    }
    iTakeACoffee() {
        // TODO: Implement action: "Take a coffee"
        throw 'Not implemented';
    }
    iEmptyTheCoffeeGrounds() {
        // TODO: Implement action: "Empty coffee grounds"
        throw 'Not implemented';
    }
    iFillTheBeansTank() {
        // TODO: Implement action: "Fill beans"
        throw 'Not implemented';
    }
    iFillTheWaterTank() {
        // TODO: Implement action: "Fill water tank"
        throw 'Not implemented';
    }
    iTakeCoffeeNumberCoffees(coffee_number = 10) {

    }
    theCoffeeMachineIsStarted() {
        this.iStartTheCoffeeMachineUsingLanguageLang("en");
    }
    iHandleEverythingExceptTheWaterTank() {
        this.iHandleCoffeeGrounds();
        this.iHandleBeans();
    }
    iHandleWaterTank() {

    }
    iHandleBeans() {

    }
    iHandleCoffeeGrounds() {

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

    }
    settingsShouldBe(__datatable = "||") {

    }
}
