function hasTargetSum(array, target) {
  // Write your algorithm here
    const seen = new Set();
    for (let num of array) {
      const complement = target - num;
      if (seen.has(complement)) {
        return true; 
      }
      seen.add(num);
    }
    return false;
}

/* 
  Write the Big O time complexity of your function here
  -the big O time complexity of the function is O(n)
*/

/* 
  Add your pseudocode here
  -initialize an empty set to store numbers already seen
  -iterate through each number in the array
  -get the complement y subtracting the number from the target
  -if the complement exists in our set it will return true 
*/

/*
  -we first initialize an empty set to take note of the numbers we will have iterated through
  -we then go though each number in the array, subtracting it from the target
  -we then check if the result of the subtraction is in our set
  -if it is it return true otherwise it retuens false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
