/**
 * Function in charge of calculating the largest absolute difference between all the possible ways of dividing the input Array in two parts.
 * The map() function is used to traverse the input Array and return a new Array with the maximum differences found.
 * The slice() function is used to make a copy of a part of the input Array without modifying it.
 * The Math.abs() function is used to calculate the absolute value.
 * The Math.max() function is used to calculate the maximum value of an Array.
 * @param {Array} A 
 * @returns Integer
 */
function calculateMaximumAbsoluteDifference(A) {
  let firstPart = [], secondPart = [], diff = 0; // Definition of variables.
  // The array A is traversed with the MAP function to return a new array with the differences of the maximum values of each part of the array.
  let response = A.map(function (currentValue, index) {
    // The slice function is used to create new arrays from array A.
    firstPart = A.slice(0, index + 1);
    secondPart = A.slice(index + 1);
    // The difference of the maximum value found between the two arrays (firstPart, secondPart) is calculated.
    return (secondPart.length > 0) ? Math.abs(Math.max(...firstPart) - Math.max(...secondPart)) : diff;
  });
  return Math.max(...response); // The maximum value of the array returned from the MAP function is returned.
}