function sum(a, b) {
    return a + b;
}
// boolean
var isPending = true;
// number
var age = 56;
// string
var username = 'Bob';
// arrays
var names = ['Bob', 'Sue'];
var names2 = ['Bob', 'Sue'];
// objects
var person = { username: 'Bob' };
// null, undefined
var meh = null;
var blah = undefined;
// Tuples
var basket;
basket = ['ball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var size = Size[2];
// Void
var sing = function () {
    console.log('lala');
};
// cf
var tune = function () {
    return 'lala';
};
// Never - for functions that don't return or have endpoints
var error = function () {
    throw Error('oops');
};
var libraryPurchase = function (books) {
    console.log('purchasing all');
};
// Type assertion
var personalCollection = {};
personalCollection.count; // no error
// Function
var libraryPurchase2 = function (books) {
    console.log('purchasing all');
};
var libraryPurchase3 = function (books) {
    return 100;
};
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('Roarrr');
// private means lion.sing not accessible
lion.greet();
// Union
var confused = 5;
confused = 'hello';
// Any (not advisable :))
var whatever = 'Blaah';
whatever = 5;
whatever = ['blob'];
