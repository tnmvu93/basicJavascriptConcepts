'use strict';
/**
 * Prototype
 * Based on: http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/
 */

/*--------- Two interrelated concept with prototype in JS -----------*/
/**
 * Prototype property (empty by default)
 * - Not enumerable
 * - Is used  primarily for inheritance
 * - Add method/properties on a function's prototype property -> available to instances of that function
 */
(function (){
    console.log('------Prototype property------');
    function PrintStuff(myName) {
        this.name = myName;
    }
    PrintStuff.prototype.print = function() {
        console.log(this.name);
    }
    var newObj = new PrintStuff('Vu');
    newObj.print();
    console.log('------------------------------');
})();

/**
 * Prototype attribute
 * - prototype attribute points to the parent object
 */
(function() {
    console.log('------Prototype attribute------');
    function parent() {};
    var child = new parent();
    console.log(child.constructor);
    console.log('------------------------------');
})();

/*------------ Why is Prototype important and When is it used? ----------*/
/**
 * Prototype property: Prototype-based Inheritance
 */
(function(){
    console.log('-------Prototype-based Inheritance-------');
    function Plant() {
        this.country = "Vietnam";
        this.isOrganic = true;
    }
    Plant.prototype.showNameAndColor = function() {
        console.log("I am a " + this.name + " and my color is " + this.color);
    }
    Plant.prototype.amIOrganic = function() {
        if (this.isOrganic) {
            console.log("I am organic, Baby!");
        } else {
            console.log("Nope, I am not organic!");
        }
    }

    function Fruit(fruitName, fruitColor) {
        this.name = fruitName;
        this.color = fruitColor;
    }
    Fruit.prototype = new Plant();
    var aBanana = new Fruit("Banana", "Yellow");
    console.log(aBanana.name);
    aBanana.showNameAndColor();
    console.log('-----------------------------------------');
})();

/**
 * Prototype Attribute: Accessing Properties on Objects
 * - Property chain: Search property from directly object's prototype to Object's prototype
 * - Return "undefined" when cannot found that property at Object's prototype.
 */
(function() {
    console.log('-------Prototype chain-------');
    function funcA() {
        this.propA = "propA";
    }
    funcA.prototype.propA2 = "propA2";
    var funcB = new funcA();
    funcB.propA = "propB";
    console.log(funcB.propA);
    console.log(funcB.propA2);
    console.log('-----------------------------');
})();




