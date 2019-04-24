import { After, Before, Given, When, Then } from "cucumber";
import { ActionWords } from './actionwords';

let actionWords : ActionWords;
Before(async () => {
    actionWords = new ActionWords();
});

After(async () => {
});


When(/^I start the coffee machine using language "(.*)"$/, async (lang) => {
    actionWords.iStartTheCoffeeMachineUsingLanguageLang(lang);
});

When(/^I shutdown the coffee machine$/, async () => {
    actionWords.iShutdownTheCoffeeMachine();
});

Then(/^message "(.*)" should be displayed$/, async (message) => {
    actionWords.messageMessageShouldBeDisplayed(message);
});


Then(/^coffee should not be served$/, async () => {
    actionWords.coffeeShouldNotBeServed();
});

When(/^I take a coffee$/, async () => {
    actionWords.iTakeACoffee();
});

When(/^I empty the coffee grounds$/, async () => {
    actionWords.iEmptyTheCoffeeGrounds();
});

When(/^I fill the beans tank$/, async () => {
    actionWords.iFillTheBeansTank();
});


When(/^I take "(.*)" coffees$/, async (coffee_number) => {
    actionWords.iTakeCoffeeNumberCoffees(coffee_number);
});

Given(/^the coffee machine is started$/, async () => {
    actionWords.theCoffeeMachineIsStarted();
});

Given(/^I handle everything except the water tank$/, async () => {
    actionWords.iHandleEverythingExceptTheWaterTank();
});

Given(/^I handle water tank$/, async () => {
    actionWords.iHandleWaterTank();
});

Given(/^I handle beans$/, async () => {
    actionWords.iHandleBeans();
});

Given(/^I handle coffee grounds$/, async () => {
    actionWords.iHandleCoffeeGrounds();
});

Given(/^I handle everything except the beans$/, async () => {
    actionWords.iHandleEverythingExceptTheBeans();
});

Given(/^I handle everything except the grounds$/, async () => {
    actionWords.iHandleEverythingExceptTheGrounds();
});

Then(/^displayed message is:$/, async (__free_text) => {
    actionWords.displayedMessageIs(__free_text);
});

When(/^I switch to settings mode$/, async () => {
    actionWords.iSwitchToSettingsMode();
});

Then(/^settings should be:$/, async (__datatable) => {
    actionWords.settingsShouldBe(__datatable);
});
