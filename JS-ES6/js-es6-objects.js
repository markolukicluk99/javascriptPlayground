/**
 * Overview of ES6 objects
 */

/**
 * Important points:
 * Keys
 * Key pair values
 * Iterating through objects
 * Foreach loops
 */

// source: Javatpoint
/**
 * Adding values to a new object with Object.assign function
 */
 var objectPotato = {0: 'Potato1', 1: 'Potato2'};
 var objectBanana = {0: 'Banana1', 1: 'Banana2'};
 
 var final = Object.assign(objectPotato, objectBanana);

/**
 * Cloning an old object, and forming a new one with Object.assign function
 */
var obj1 = {0: 123, 1: 345, 2: 678};
// Make a new object with the same values of the previous one
var cloneObj1 = Object.assign({}, obj1);
// which alows us to update values inside the cloned object
cloneObj1[0] = 567;

/**
 * Spread operator ...
 */
var spread1 = {0: 1, 1: 2, 3: 3};
var spread2 = {4: 'Spread0', 5: 'Spread1', 6: 'Spread2'};

var finalSpread = {...spread1, ...spread2};

/**
 * Deleting properties from an object
 */

var propsObj = new Object();
propsObj.a = 100;
propsObj.b = 200;
propsObj.c = 300;

// delete + key that you want to delete

delete propsObj.c;

/** 
 * Object destructuring (Simple)
 */
 const potatoes = {x: 100, y: 200, z: 300};

 const {x, y, z} = potatoes;
// Another way of assigning new key names
const num = {x: 100, y: 200};
const {x: new1, y: new2} = num; 

// source: Javatpoint

