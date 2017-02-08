// From: http://javascriptissexy.com/javascript-objects-in-detail/
// JS has 5 simple data types: Number, String, Boolean, Undefined, Null (immutable)
// JS has one complex data type: Object (mutable)
/* Object is an unordered list of items (property, function) */
'use strict';

(function() {
    /* Property name can be a number */
    console.log('Property name can be a number');
    var ageGroup = {
        6: "baby",
        16: "teenager",
    }
    console.log(ageGroup['6']);

    /* Reference data type, Primitive data type */
    console.log('Reference data type, Primitive data type');
    var pPerson = "Vu";
    var pAnotherPerson = pPerson;
    pPerson = "Vu 2"
    console.log('pPerson: ' + pPerson + '; pAnotherPerson: ' + pAnotherPerson);
    var rPerson = { name: "Vu" };
    var rAnotherPerson = rPerson;
    rPerson.name = "Vu 2";
    console.log('rPerson: ' + rPerson.name + '; rAnotherPerson: ' + rAnotherPerson.name);

    /* Object data properties have attributes */
    /** Each data property has not only the name-value pair, also 3 attributes (=true by default)
     * Configurable Attribute: Specifies whether the property can be deleted or changed
     * Enumerable: Specifies whether the property can be returned in a for/in loop
     * Writable: Specifies whether the property can be changed with an assignment operator: =, +=, --, ++
     */
    console.log('Object data properties have attributes');
    var obj = {};
    Object.defineProperty(obj, 'key', {
        value: "Hello",
        enumerable: false,
        writable: false,
        configurable: false
    });
    //obj.key = "Hello 2"; -> throw error
    console.log('obj.key: ' + obj.key);
})();

(function(){
    /** Creating object
     * Object literals
     * Object constructor: use the new keyword to call the constructor */

    /** Practical patterns for creating object
     * Constructor pattern
     * Prototype pattern
     */
    console.log("Practical patterns for creating object");
    console.log("Constructor pattern");
    var FruitConstructorPattern = function (color, sweetness, name) {
        this.color = color;
        this.sweetness = sweetness;
        this.name = name;
        this.showName = function() {
            console.log("This is a " + this.name);
        }
    }
    var mango = new FruitConstructorPattern('yellow', 1, "mango");
    mango.showName();

    console.log("Constructor pattern");
    var FruitPrototypePattern = function(){}    ;
    FruitPrototypePattern.prototype.color = "Green";
    FruitPrototypePattern.prototype.sweetness = 10;
    FruitPrototypePattern.prototype.name = "Kiwi"
    FruitPrototypePattern.prototype.showName = function() {
        console.log("This is a " + this.name);
    }
    var kiwi = new FruitPrototypePattern();
    kiwi.showName();
})();

(function() {
    // Own property: defined on the object
    // Inherited property: inherited from the object's prototype object
    console.log('Find out property is in object');
    var obj = { name: "object" };
    console.log("name in obj: " + ('name' in obj));
    console.log("age in obj: " + ('age' in obj));
    console.log("toString in obj: " + ('toString' in obj)); // From Object

    console.log('Find out own property belongs object');
    console.log('obj.hasOwnProperty(name): ' + (obj.hasOwnProperty('name')));
    console.log('obj.hasOwnProperty(toString): ' + (obj.hasOwnProperty('toString')));
})();

(function() {
    console.log('Accessing and Enumerating properties on object');
    var school = {
        schoolName:"MIT", 
        schoolAccredited: true, 
        schoolLocation:"Massachusetts"
    };
    for(var item in school) {
        console.log(item); //Object.prototype are not enumerable -> loop cannot show them
    }
     
    console.log('Accessing Inherited Properties');
    var parents = function() { this.name = "parent" };
    var child = new parents();
    child.new = "new";
    for(var item in child) {
        console.log(item); //properties from parent can be access in loop
    }
})();

(function() {
    console.log('Serialize and Deserialize object');
    console.log("Serialize: JSON.stringify");
    console.log("Deserialize: JSON.parse");
})();

