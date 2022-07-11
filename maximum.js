function calculateMaximumAbsoluteDifference(A) {
  let firstPart = []; // Array of the first part
  let secondPart = []; // Array of the second part
  let V = 0; // Final result
  let diff = 0; // Variable to store difference
  for (let iter = 0; iter < A.length; iter++) { // Each position of the array A received as a parameter is traversed.
    // To split the array A in 2, the slice method is used, in order to split into the previously defined arrays according to the index that is being iterated at the moment.
    firstPart = A.slice(0, iter + 1)
    secondPart = A.slice(iter + 1)
    if (secondPart.length > 0) { // Validates that the secondPart array has data
      diff = Math.abs(Math.max(...firstPart) - Math.max(...secondPart)); // The difference of the maximum value found between the two arrays (firstPart, secondPart) is calculated.
      // It is validated that the absolute difference is greater than the value of V to reset the value of V
      if (diff > V) {
        V = diff;
      }
    }
  }
  return V; // Return the valu of V
}