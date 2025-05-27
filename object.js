//#region 0 / 13 solved

const fruitBasket = {
  a: "apple",
  b: "banana",
  c: "apple",
  d: "orange",
  e: "banana",
};
/**
 * Count how many times each value appears in the object
 * @param {{ [key: string]: string }} obj
 * @returns {{ [value: string]: number }}
 */
// Output: { apple: 2, banana: 2, orange: 1 }
function countValueOccurrences(obj) {}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 20, d: 4 };
/**
 * Merge two objects. If keys conflict, use value from second object.
 * @param {Object} o1
 * @param {Object} o2
 * @returns {Object}
 */
// Output: { a: 1, b: 20, c: 3, d: 4 }
function mergeObjects(o1, o2) {}

const countryCodes = {
  US: "United States",
  IN: "India",
  UK: "United Kingdom",
  AU: "Australia",
};
/**
 * Invert the keys and values of an object
 * @param {{ [key: string]: string }} obj
 * @returns {{ [value: string]: string }}
 */
// Output: { 'United States': 'US', 'India': 'IN', ... }
function invertObject(obj) {}

const students = {
  S1: "Passed",
  S2: "Failed",
  S3: "Passed",
  S4: "Failed",
};
/**
 * Get all keys that have a specific value
 * @param {{ [key: string]: string }} obj
 * @param {string} value
 * @returns {string[]} List of keys
 */
// OutPut: getKeysByValue(students, 'Passed') → ['S1', 'S3']
function getKeysByValue(obj, value) {}

const userInfo = {
  name: "Alice",
  email: "",
  phone: null,
  age: 25,
  isAdmin: false,
  country: "USA",
};
/**
 * Remove all keys that have falsy values
 * @param {Object} obj
 * @returns {Object} New object without falsy values
 */
// Output: { name: 'Alice', age: 25 }
function removeFalsyValues(obj) {}

const user = {
  name: "John",
  details: {
    email: null,
    phone: "12345",
    address: {
      street: "",
      city: "LA",
    },
  },
};
/**
 * Remove all keys with falsy values deeply (null, "", undefined, 0, false)
 * @param {Object} obj
 * @returns {Object}
 */
// Output: { name: "John", details: { phone: "12345", address: { city: "LA" } } }
function removeFalsyDeep(obj) {}

const complexObj = {
  user: {
    id: 1,
    profile: {
      name: "Alice",
      location: {
        city: "New York",
        pin: 10001,
      },
    },
  },
};
/**
 * Search for a specific key in a nested object and return its value
 * @param {Object} obj
 * @param {string} key
 * @returns {any} value or undefined
 */
// OutPut: findValueByKey(complexObj, 'city') → "New York"
function findValueByKey(obj, key) {}

const flatObj = {
  "a.b.c": 1,
  "a.d": 2,
  e: 3,
};
/**
 * Convert a flat object with dot notation keys into a nested object
 * @param {Object} obj
 * @returns {Object}
 */
// Output: { a: { b: { c: 1 }, d: 2 }, e: 3 }
function unflattenObject(obj) {}

const nestedObj = {
  a: {
    b: {
      c: 1,
    },
    d: 2,
  },
  e: 3,
};
/**
 * Convert a nested object to a flat one using dot notation
 * @param {Object} obj
 * @param {string} parentKey
 * @param {Object} result
 * @returns {Object}
 */
// Output: { 'a.b.c': 1, 'a.d': 2, 'e': 3 }
function flattenObject(obj) {}

const tree = {
  a: {
    b: {
      c: 1,
    },
  },
  d: {
    e: 2,
  },
};
/**
 * Return an array of all paths in dot notation from root to leaf
 * @param {Object} obj
 * @param {string} prefix
 * @returns {string[]}
 */
// Output: ["a.b.c", "d.e"]
function getAllPaths(obj) {}

const userData = {
  fname: "kutte",
  lname: "kamine",
  age: 22,
  phone: 9993457837,
  email: "hihi@gmail.com",
  country: "uganda",
};
/**
 * Convert all string values in the object to uppercase
 * @param {object} obj
 * @returns {object}
 */
function uppercaseStrings(obj) {}

/**
 * Return only the keys from the object that have string values
 * @param {object} obj
 * @returns {string[]}
 */
function getStringKeys(obj) {}

/**
 * Count how many top-level keys are in the object
 * @param {object} obj
 * @returns {number}
 */
function countTopLevelKeys(obj) {}
