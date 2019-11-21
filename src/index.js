/**
 * Student Name
 * @type {string}
 */
const studentName = 'John Doc'
/**
 * Grades array
 * @type {Array<number>}
 */
const grades = [98, 97, 96]

/**
 * Todo object
 * the | character means it will be an or
 * @type {{id: number|string, text: string}}
 */
const todo = {
    id: '1',
    text: 'Hello'
};

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
    return `$${amount + tax * amount}`;
  };

  //the following will define a type
  /**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
    id: 1,
    name: 'John Doe',
    age: 20,
    isActive: true
  };