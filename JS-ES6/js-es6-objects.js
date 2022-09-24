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
