const numArray = [
  1, 2, 6, 6, 2, 3, 4, 5, 6, 1, 1, 1, 1, 2, 2, 9, 8, 7, 4, 5, 7, 8, 9, 4, 2, 3,
  5, 6, 7, 8, 6,
];

const normalArray = [
  1, 3, 4, 6, 2, 7, 6, 9, 5, 11, 12, 15, 13, 17, 16, 19, 21, 23, 25, 27, 29, 31,
  32, 37,
];

const missingNumberArray = [1, 4, 3, 5, 6, 2, 7, 12, 14, 17, 21, 19, 20];

const chars = [
  "a",
  "b",
  "c",
  "f",
  "i",
  "j",
  "k",
  "l",
  "m",
  "o",
  "r",
  "s",
  "t",
  "w",
  "x",
  "y",
  "z",
];

const nameArray = [
  "Harsh",
  "Yash",
  "Vinit",
  "Mihir",
  "Omkar",
  "Om",
  "Ishan",
  "Robert",
  "utsav",
  "Alice",
  "Ethan",
  "Isabel",
  "Oscar",
  "Uma",
  "Amit",
  "Anjali",
  "Elena",
  "om",
  "Ivan",
  "Umar",
  "Oliver",
  "Abby",
  "Elliot",
  "yash",
  "Ian",
  "Aarav",
  "arjun",
  "Emili",
  "robert",
];

//#region 0 / 31 solved

/**
 * Sort given array into ascending order
 * @param {number[]} array
 * @returns {number[]} Ascending sorted array
 */
function sortIntoAscending(array = normalArray) {}

/**
 * Sort given array into descending order
 * @param {number[]} array
 * @returns {number[]} Descending sorted array
 */
function sortIntoDescending(array = normalArray) {}

/**
 * Sort given array into with only even numbers
 * @param {number[]} array
 * @returns Ascending sorted even array
 */
function sortIntoEvenNumbers(array = normalArray) {}

/**
 * Sort given array into with only odd numbers
 * @param {number[]} array
 * @returns Ascending sorted odd array
 */
function sortIntoOddNumbers(array = normalArray) {}

/**
 * Sort given array into ascending order with only even numbers
 * @param {number[]} array
 * @returns Ascending sorted even array
 */
function sortIntoAscendingEven(array = missingNumberArray) {}

/**
 * Sorts the given numbers array according to the most frequently occurring values.
 * @param {number[]} array - The array of numbers to sort.
 * @returns {number[]} Sorted array based on frequency (most frequent first).
 */
function sortArrayIntoMostRecurredNumbers(array = nameArray) {}

/**
 * Sorts the given numbers array according to the least frequently occurring values.
 * @param {number[]} array - The array of numbers to sort.
 * @returns {number[]} Sorted array based on frequency (least frequent first).
 */
function sorArraytIntoLeastNumbers(array = numArray) {}

/**
 * Finds missing numbers from given array
 * @param {number[]} array - The array to find missing numbers
 * @returns {number[]} Array containing missing numbers
 */
function findMissingNumbers(array = missingNumberArray) {}

/**
 * Find most time recurred number from given array
 * @param {number[]} array - Number array
 * @returns {number} Most recurred number
 */
function findMostReccurredNumber(array = numArray) {}

/**
 * Find least time recurred number from given array
 * @param {number[]} array - Number array
 * @returns {number} Least recurred number
 */
function findLeastReccurredNumber(array = numArray) {}

/**
 * Find all vowels from given array
 * @param {string[]} array
 * @returns Missing vowels
 */
function findAllVowels(array = nameArray) {}

/**
 * Find all missing vowels from given array
 * @param {string[]} array
 * @returns Missing vowels
 */
function findMissingVowels(array = nameArray) {}

/**
 * Give sum of all numbers
 * @param {number[]} array
 * @returns {number} Sum of all numbers
 */
function sumOfAllNumbers(array = normalArray) {}

/**
 * Give sum of all odd numbers
 * @param {number[]} array
 * @returns {number} Sum off all odd numbers
 */
function sumOffAllOddNumbers(array = normalArray) {}

/**
 * Give sum the amount of time of most recurred number
 * @description if 6 is most recurred number then give sum of 6 the amount of time it recurred then
 * 6 + 6 + 6 + 6 + 6 = 30
 * @param {number[]} array
 * @returns {number}
 */
function sumOffMostReccuredNumber(array = numArray) {}

/**
 * Filter first vowel character names
 * @param {string[]} array
 * @returns {string[]}
 */
function filterVowelNames(array = nameArray) {}

/**
 * Filter names that are repeated
 * @param {string[]} array
 * @returns {string[]}
 */
function filterRepeadedNames(array = nameArray) {}

/**
 * Filter names longer than a given length
 * @param {string[]} array
 * @param {number} length
 */
function filterNamesLongerThan(array = nameArray, length) {}

/**
 * Filter names that contain a specific letter
 * @param {string[]} array
 * @param {string[]} letter
 */
function filterNamesContainingLetter(array = nameArray, letter) {}

/**
 * Find the longest name(s)
 * @param {string[]} array
 */
function findLongestNames(array = nameArray) {}

/**
 * Find the shortest name(s)
 * @param {string[]} array
 */
function findShortestNames(array = nameArray) {}

/**
 * Count how many times each name appears
 * @returns {{[name: string]: number}}
 */
function countNameFrequencies(array = nameArray) {}

/**
 * Group names by their starting letter
 * @returns {{[key: string]: string[]}} An object with letters as keys
 */
function groupNamesByFirstLetter(array = nameArray) {}

/**
 * Group numbers into even and odd
 * @param {number[]} array
 * @returns {{ even: number[], odd: number[] }}
 */
function groupEvenOdd(array = numArray) {}

/**
 * Return an object with numbers as keys and how many times they occur as values
 * Example: {1: 5, 2: 4, 6: 3, ...}
 */
function mapNumberOccurrences(array = numArray) {}

/**
 * Find all pairs of numbers that sum up to a given target
 * @param {number[]} array
 * @param {number} target
 * @returns {[number, number][]}
 */
function findPairsWithSum(array = normalArray, target) {}

const users = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    gender: "F",
    city: "New York",
    isActive: true,
  },
  { id: 2, name: "Bob", age: 30, gender: "M", city: "London", isActive: false },
  {
    id: 3,
    name: "Charlie",
    age: 35,
    gender: "M",
    city: "New York",
    isActive: true,
  },
  {
    id: 4,
    name: "Diana",
    age: 22,
    gender: "F",
    city: "Berlin",
    isActive: true,
  },
  { id: 5, name: "Eva", age: 30, gender: "F", city: "London", isActive: false },
  {
    id: 6,
    name: "Frank",
    age: 40,
    gender: "M",
    city: "Berlin",
    isActive: true,
  },
  {
    id: 7,
    name: "George",
    age: 28,
    gender: "M",
    city: "Paris",
    isActive: false,
  },
  {
    id: 8,
    name: "Hannah",
    age: 31,
    gender: "F",
    city: "Tokyo",
    isActive: true,
  },
  { id: 9, name: "Ian", age: 19, gender: "M", city: "Sydney", isActive: true },
  {
    id: 10,
    name: "Jasmine",
    age: 45,
    gender: "F",
    city: "New York",
    isActive: false,
  },
  {
    id: 11,
    name: "Karl",
    age: 33,
    gender: "M",
    city: "London",
    isActive: true,
  },
  {
    id: 12,
    name: "Laura",
    age: 27,
    gender: "F",
    city: "Berlin",
    isActive: true,
  },
  { id: 13, name: "Mike", age: 29, gender: "M", city: "Paris", isActive: true },
  {
    id: 14,
    name: "Nina",
    age: 24,
    gender: "F",
    city: "Tokyo",
    isActive: false,
  },
  {
    id: 15,
    name: "Oscar",
    age: 36,
    gender: "M",
    city: "Sydney",
    isActive: true,
  },
];

/**
 * Get all inactive users
 * @param {Object[]} users
 * @returns {Object[]}
 */
function getInactiveUsers(array = users) {}

/**
 * Get all users whose name starts with a vowel
 * @param {Object[]} users
 * @returns {Object[]}
 */
function getUsersWithVowelNames(array = users) {}

/**
 * Get users aged between 25 and 35 who live in London
 * @param {Object[]} users
 * @returns {Object[]}
 */
function getUsersByAgeAndCity(array = users) {}

/**
 * Return array of user names
 * @param {Object[]} users
 * @returns {string[]}
 */
function getUserNames(array = users) {}

/**
 * Add 'isAdult' property based on age ≥ 18
 * @param {Object[]} users
 * @returns {Object[]} Modified user objects
 */
function addIsAdultProperty(array = users) {}
