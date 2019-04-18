/**
 * Useful links:
 * - Array methods documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Iteration_methods
 *
 */

/**
 * @difficulty easy, ~2 minutes
 *
 * Write a function that accepts
 * - an array of strings or numbers
 * - and a `thingToFind` which is either a string or number
 * The function looks through the array and returns true if the thing is inside the array. The function returns false if the thing isn't found.
 *
 * HINTS:
 * - use the arrays `.includes` method
 * - pass the `thingToFind` into the `.includes` method
 * - return the result
 *
 * @param {array of elements} array containing strings and numbers
 * @param {string or number} thingToFind
 * @returns {boolean} true if the array contains the thing to find, false otherwise
 */
function arrayIncludes2(array, thingToFind) {

}

/**
 * @difficulty easy, ~2 minutes
 *
 * Write a function that returns a subset of an array, starting at the beginning.
 * The function accepts two arguments:
 * - the array
 * - and the number of items to select from the beginning of the array.
 *
 * HINTS:
 * - Use the array `.slice` method starting at `0` and counting up to `howManyItems`.
 * - Return the result.
 *
 * @param {array} array of items
 * @param {number} howManyItems to return at the start of the array
 * @returns {array} containing the `howManyItems` of items at the start of the array.
 */
function head(array, howManyItems) {

}

/**
 * @difficulty easy, ~3 minutes
 *
 * Write a function that accepts an input array and squares each number in the array, returning the result.
 *
 * HINT:
 * - Use the array's `.map` method
 * - Within the mapping function, return the square of each number
 * - Use the exponent operator with 2 to calculate the square, `** 2`
 * - Return the result of mapping
 *
 * @param {array} array of numbers
 * @returns {array} where each number is the square of the original array.
 */
function squareItems(array) {

}

/**
 * @difficulty easy, ~3 minutes
 *
 * Write a function that checks if an array contains any odd numbers, return true if it does.
 *
 * HINTS:
 * - use the array's `.some` method
 * - within the some's argument (the function)
 * - return if any items when modulo of 2 equals 1.
 * - return the result of the some method.
 *
 * @param {array} array of numbers
 * @returns {boolean} true if the array contains any odd numbers
 */
function arrayContainsOddNumbers(array) {

}

/**
 * @difficulty easy, ~3 minutes
 *
 * Write a function that removes all of the "falsey" values from a given array.
 *
 * HINTS:
 * - use the array's `.filter` method
 * - check if each item in the array passes an if. For example, `if (item)`
 * - filter for only items that pass the condition, thus removing falsey items
 * - return the result of the array filter
 *
 * @param {array} array of mixed values: numbers, strings, booleans, null, undefined, objects, arrays, etc...
 * @returns {array} where all the falsey values have been removed
 */
function compact(array) {

}

/**
 * @difficulty easy, ~3 minutes
 *
 * Write a function that returns a subset of an array, removing a specified number of items from the start of the array.
 * The function accepts two arguments:
 * - the array
 * - and the number of items to remove (drop) from the beginning of the array.
 *
 * HINTS:
 * - Use the array `.slice` method starting at `number of items to drop` and counting up to the length of the array.
 * - Return the result.
 *
 * @param {array} array of items
 * @param {number} numberOfItemsToDrop, number of items to remove from the start of the array
 * @returns {array} where the first `numberOfItemsToDrop` have been removed
 */
function drop(array, numberOfItemsToDrop) {

}

/**
 * @difficulty easy, ~2 minutes
 *
 * Write a function that searches through an array of numbers and returns the first event number.
 *
 * HINTS:
 * - use the array `.find` method
 * - check each item that the modulo of 2 equals 0, `x % 2 === 0`
 * - return the result of the find
 *
 * @param {array} array of numbers
 * @returns {number} first even number that was found withing the array
 */
function findFirstEvenNumber(array) {

}

/**
 * @difficulty easy, ~2 minutes
 *
 * Wrire a function that accepts an array and a number. The return should be an array containing the X items at the end of the array.
 *
 * HINT:
 * -
 *
 * @param {array} array array of items
 * @param {number} howManyItems number of items to select at the end of the array
 * @returns {array} subset of the original array selecting items at the end
 */
function tail(array, howManyItems) {

}

/**
 * @difficulty easy, ~3 minutes
 *
 * Write a function that returns the index number of an value within an array. The function accepts 2 arguments: the array and the value.
 *
 * HINTS:
 * - Use the array `.findIndex` method
 * - within the findIndex, check each item against the `itemToFind`
 * - return the result of the findIndex method
 *
 * @param {array} array of strings or numbers
 * @param {string or number} valueToFind within the
 * @returns {number} the index number of the location of the valueToFind OR `-1` if the value isn't found.
 */
function findMatchingIndex2(array, itemToFind) {

}

/**
 * @difficulty easy, ~3 minutes
 *
 * Write a function that accepts an input array and multiplies each number in the array by the multiplier, returning the result.
 *
 * HINT:
 * - Use the array's `.map` method
 * - Within the mapping function, return the multiple of each item
 * - Use the multiply operator and the `multiplier`
 * - Return the result of mapping
 *
 * @param {array} array of numbers
 * @param {number} multiplier to multiply each item in the array by
 * @returns {array} where each number is the multiplier multiplied by the item of the original array
 */
function multiplyItemsBy(array, multiplier) {

}

/**
 * @difficulty easy, ~4 minutes
 *
 * Write a function which takes an array of strings. The function will sort the strings by order of length. For example a string of length 1, `'a'`, would be at the beginning and of length 4, `'aaaa'` would come after.
 *
 * HINTS:
 * - use the array `.sort` method
 * - for each iteration of the sort, compare the two items
 * - minus the length of one item by the length of the other item and return the result.
 * - return the result of sorting the array.
 *
 * @param {array} array of strings
 * @returns {array} original array where strings are organised from shortest length to longest
 */
function sortWordsByLength(array) {

}

/**
 * @difficulty easy, ~2 minutes
 *
 * Write a function that checks to see if every item in an array matches a given value. If all items match, return true, otherwise return false.
 *
 * HINTS:
 * - Use the array `.every` method
 * - Check each item in the array against the `thingToMatch`
 * - return the result
 *
 * @param {array} array of strings or numbers
 * @param {string or number} thingToMatch at each position in the array
 * @returns {boolean} true if all of the items in the array are the same as the `thingToMatch`, false otherwise.
 */
function all2(array, thingToMatch) {

}

/**
 * @difficulty easy, ~2 minutes
 *
 * Wrire a function that removes all occurances of a given value from an array.
 *
 * HINTS:
 * - Use the array `.filter` method
 * - Keep items in the array that aren't the same as the `itemToOmit`
 * - Return the result.
 *
 * @param {array} array of strings and/or numbers
 * @param {string or number} itemToOmit, value to remove all occurances of from the original array
 * @returns {array} where all occurances of the `itemToOmit` have been removed.
 */
function omit(array, itemToOmit) {

}

/**
 * @difficulty easy, ~3 minute
 *
 * Write a function that accepts an array of strings, wraps each string inside a `<div></div>` string and returns the sum of all div strings.
 *
 * The function accepts an array of strings:
 *
 * ```js
 * [ 'one', 'two', 'foo', 'Hello, world!' ]
 * ```
 *
 * The above input should return the following:
 *
 * ```js
 * '<div>one</div><div>two</div><div>foo</div><div>Hello, world!</div>'
 * ```
 *
 * HINT:
 * - use the array `.map` method
 * - inside the map, return each item wrapped in divs, you can use a template string here.
 * - save the result of the map into a variable
 * - return the `.join` of the result of mapping
 *
 * @param {array of strings} arr array containing strings to put in divs
 * @returns {string} items wrapped in divs
 */
function getStringOfDivs2(array) {

}

/**
 * @difficulty easy, ~1 minute
 *
 * Write a function that adds up the numbers within an array.
 *
 * The function accepts an array of numbers. For example,
 * `[1, 2, 4, 6, 10, 1, 1, 123]`
 *
 * HINT:
 * - store the total in a variable starting at 0
 * - use the array's `.forEach` method to iterate through the items in the array
 * - within the loop, add each item to the total
 * - return the total after the loop
 *
 * @param {array of numbers} arr array containing items to sum
 * @returns {number} total of items in array
 */
function getArrayTotal2(array) {

}

/**
 * @difficulty easy, ~4 minutes
 *
 * Write a function that accepts an array of objects and a string.
 * Go through each object in the array and select the property matching the supplied string.
 * If any object doesn't have a key matching the property string, return null
 * Return the result array that should match the length of the original array.
 *
 * HINTS:
 * - use the array `.map` method
 * - in each iteration of the map, you can select the property from the object in the array.
 * - You can use square bracket property access. E.g. `object[property]`
 * - If the object doesn't contain the property as a key, return `null` for that iteration
 * - return the result of the map
 *
 * @param {array} arrayOfObjects, each object contains any properties
 * @param {string} property, to select in each object
 * @returns {array} of values picked out of each object
 */
function pick(arrayOfObjects, property) {

}

/**
 * @difficulty easy, ~4 minutes
 *
 * Write a function that calculates the total of a shopping list
 *
 * The function accepts an array of objects, each object will have a property `price`. For example:
 *
 * ```js
 * [
 *  { price: 123 },
 *  { price: 321 },
 *  { price: 1.50 },
 *  { price: 99.99 },
 * ]
 * ```
 *
 * HINT:
 * - store the total in a variable starting at 0
 * - use the array `.forEach` method to iterate through the items in the array
 * - within the method, add each item's price to the total
 * - use dot property access to select the price for each item. For example: `item.price`
 * - return the total after the loop
 *
 * @param {array of numbers} arr array containing items to sum
 * @returns {number} total of items in array
 */
function getShoppingListTotalPrice2(shoppingListArray) {

}

/**
 * @difficulty easy, ~5 minute
 *
 * Write a function that accepts an array of strings, wraps each string inside an `<element></element>` string and returns the sum of all element strings.
 *
 * The function accepts an array of strings:
 *
 * ```js
 * [ 'one', 'two', 'foo', 'Hello, world!' ]
 * ```
 *
 * And an element string to wrap inside. For example, `'li'`.
 *
 * The above inputs should return the following:
 *
 * ```js
 * '<li>one</li><li>two</li><li>foo</li><li>Hello, world!</li>'
 * ```
 *
 * HINT:
 * - Very similar to wrapping in divs, now the element is dynamic.
 * - use the array `.map` method
 * - inside the map, return each item wrapped in elements, you can use a template string here.
 * - save the result of the map into a variable
 * - return the `.join` of the result of mapping
 *
 * @param {array of strings} array, containing strings to put in divs
 * @param {string} element to wrap each item inside
 * @returns {string} items wrapped in divs
 */
function getStringOfElements(array, element) {

}

/**
 * @difficulty easy, ~4 minutes
 *
 * Write a function that calculates the mean of the numbers in an array. The mean is the sum of all of the numbers divided by the number of numbers (array.length).
 *
 * HINTS:
 * - initialise a variable to store the total sum of all of the array items
 * - use a `.forEach` loop
 * - add each item to the total
 * - return the total divided by the size of the array
 * - if the array has no size, return 0
 *
 * @param {array} array of numbers
 * @returns {number} the mean average of array numbers or `0`
 */
function getMeanAverage2(array) {

}

/**
 * @difficulty intermediate, ~5 minute
 *
 * Write a function that counts the occurances of a given value in an array.
 *
 * HINTS:
 * - Use the filter method to filter out occurances of the thingsToCountBy in the array
 * - Return the length of the new array
 *
 * @param {array} array of strings, numbers, booleans or nulls
 * @param {any} thingToCountBy: value to count occurances of
 * @returns {number} number of occurances of the `thingToCountBy` in the array.
 */
function countItemsMatching(array, thingToCountBy) {

}

/**
 * @difficulty hard, ~7 minute
 *
 * Write a function that returns true if all of the items in the array are unique.
 *
 * HINTS:
 * - You can use the `.every` method to check every item in the array
 * - Within the every method, you can filter based on items that are the same as the current value
 * - You can compare the length of the filtered array to see if an item is unique or not
 * - Return the result of the `.every`
 *
 * @param {array} array of any type
 * @returns {boolean} true if all of the items are unique in the array, false otherwise.
 */
function areAllItemsUnique(array) {

}
