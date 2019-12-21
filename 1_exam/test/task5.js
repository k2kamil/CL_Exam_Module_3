"use strict";

const TestClass = require("../../../../.tests/TestClass");
let tests = new TestClass();
let app;
let sassFile;

let filePath = 'lab.egzamin/scss/partials/_zadanie05.scss';

if (tests.debug)
    sassFile = tests.path.join(__dirname, '../../.solutions/', filePath);
else
    sassFile = tests.path.join(__dirname, '../../../', filePath);

tests.sassTrue.runSass({file: sassFile}, describe, it);

/**
 * TESTS
 */

tests.addTest(
    "Oznaczono jako ukończone" ,
    "" ,
    (e) => {
        
});


tests.runTests();
