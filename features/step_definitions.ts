import { After, Before, Given, When, Then } from "cucumber";
import { ActionWords } from 'actionwords';

Before(async () => {
});

After(async () => {
});


When(/^I start the coffee machine using language "(.*)"$/, async (lang) => {
    ActionWords.iStartTheCoffeeMachineUsingLanguageLang(lang);
});

When(/^I shutdown the coffee machine$/, async () => {
    ActionWords.iShutdownTheCoffeeMachine();
});

Then(/^message "(.*)" should be displayed$/, async (message) => {
    ActionWords.messageMessageShouldBeDisplayed(message);
});


Then(/^coffee should not be served$/, async () => {
    ActionWords.coffeeShouldNotBeServed();
});

When(/^I take a coffee$/, async () => {
    ActionWords.iTakeACoffee();
});

When(/^I empty the coffee grounds$/, async () => {
    ActionWords.iEmptyTheCoffeeGrounds();
});

When(/^I fill the beans tank$/, async () => {
    ActionWords.iFillTheBeansTank();
});


When(/^I take "(.*)" coffees$/, async (coffee_number) => {
    ActionWords.iTakeCoffeeNumberCoffees(coffee_number);
});

Given(/^the coffee machine is started$/, async () => {
    ActionWords.theCoffeeMachineIsStarted();
});

Given(/^I handle everything except the water tank$/, async () => {
    ActionWords.iHandleEverythingExceptTheWaterTank();
});

Given(/^I handle water tank$/, async () => {
    ActionWords.iHandleWaterTank();
});

Given(/^I handle beans$/, async () => {
    ActionWords.iHandleBeans();
});

Given(/^I handle coffee grounds$/, async () => {
    ActionWords.iHandleCoffeeGrounds();
});

Given(/^I handle everything except the beans$/, async () => {
    ActionWords.iHandleEverythingExceptTheBeans();
});

Given(/^I handle everything except the grounds$/, async () => {
    ActionWords.iHandleEverythingExceptTheGrounds();
});

Then(/^displayed message is:$/, async (__free_text) => {
    ActionWords.displayedMessageIs(__free_text);
});

When(/^I switch to settings mode$/, async () => {
    ActionWords.iSwitchToSettingsMode();
});

Then(/^settings should be:$/, async (__datatable) => {
    ActionWords.settingsShouldBe(__datatable);
});
