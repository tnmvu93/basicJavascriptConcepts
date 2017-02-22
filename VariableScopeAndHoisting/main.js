'use strict';
/**
 * JavaScript Variable Scope and Hoisting Explained
 * Based on: http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/
 */

/**
 * Variable scope
 * - The context in which the variable exist.
 * - Scope specifies where can access a variable and whether you have access to the variable in that context
 * - Local scope/global scope
 */
/**
 * Local scope
 * - Function-level scope
 * - Variable are declared inside a function is local variable and are only accessible within that function
 * or by functions inside that function.
 */
(function(){
    console.log('-----------Local scope-----------');
    var name = "global";
    function showName() {
        var name = "local";
        console.log(name);
    }
    showName();
})();

//If don't declare local variable with "var" keyword -> gloabl variable
//Local variable have priority over gloabl variable in function

/**
 * Gloabl variable
 * - All variables declared outside function
 * - Global context or scope is the window (entire HTML document)
 */
console.log('-------Gloabl variable-----------')
var highValue = 200;
var constantValue = 2;
var myObj = {
    highValue: 20,
    constantValue: 5,
    calculateIt: function() {
        setTimeout(function() {
            // The "this" object in the setTimeout function used the global highValue and constantVal variables,
            // because the reference to "this" in the setTimeout function refers to the global window object, 
            // not to the myObj object as we might expect.​
            console.log(this.constantValue * this.highValue);
        }, 2000);
    }
}
myObj.calculateIt();

/**
 * Variable hoisting
 * All variable DECLARATION are hoisted to the top of the function or global context
 * not for variable initialization or assigment
 */
(function() {
    console.log("-------------Variable hoisting------------")
    console.log("Firstname: " + name);
    var name = "Vu";
    console.log("Lastname: " + name);
})();

// Function declaration overrides variable declaration when hoisted
(function(){
    console.log("--Function declaration overrides variable declaration when hoisted--");
    var myName;
    function myName() {
        console.log('Vu');
    }
    console.log(typeof myName);
})();
(function(){
    console.log("--Variable declaration overrides function declaration when hoisted--");
    var myName = 'Vu';
    function myName() {
        console.log('Vu');
    }
    console.log(typeof myName);
})();