# hps-cucumber-javascript
[![Build Status](https://travis-ci.org/hiptest/hps-cucumber-typescript.svg?branch=master)](https://travis-ci.org/hiptest/hps-cucumber-typescript)

Hiptest publisher samples with Cucumber/Typescript

In this repository you'll find tests generated in Cucumber/TypeScript format from [Hiptest](https://hiptest.net), using [Hiptest publisher](https://github.com/hiptest/hiptest-publisher).

The goals are:

 * to show how tests are exported in Cucumber/TypeScript.
 * to check exports work out of the box (well, with implemented actionwords)

System under test
------------------

The SUT is a (not that much) simple coffee machine. You start it, you ask for a coffee and you get it, sometimes. But most of times you have to add water or beans, empty the grounds. You have an automatic expresso machine at work or at home? So you know how it goes :-)

Prerequesites
-------------

* [Node.js](https://nodejs.org/en/) or [io.js](https://iojs.org/en/)
* [NPM](https://www.npmjs.com/)
* [Hiptest publisher](https://github.com/hiptest/hiptest-publisher)

Update tests
-------------

To update the tests:

    hiptest-publisher -c cucumber-typescript.conf --only=features,step_definitions

The tests are generated in the [``features``](https://github.com/hiptest/hps-cucumber-typescript/tree/master/features) directory.


Run tests
---------

To build the project and run the tests, use the following command:

    npm install
    npm run test

The SUT implementation can be seen in [``src/coffee_machine.js!``](https://github.com/hiptest/hps-cucumber-typescript/blob/master/src/coffee_machine.js)
