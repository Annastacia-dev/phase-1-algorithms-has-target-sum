function hasTargetSum(array, target) {
  // Write your algorithm here

  let map = new Map();
  for (let i=0; i<array.length; i++){
    let num1 = array[i]
    let num2 = target - num1;
    if(map.has(num2)){
      return true;
    }

    map.set(num1, i)
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n)- Linear time complexity - the algorithm loops through each number
*/

/* 
  Add your pseudocode here

  //Given an array [3, 6, 9, 11, 4] and target = 14
  // Find two numbers in the array that add up to 14
  // 3 located at index 0 and 11 at index 3 add up to 14
  // 14-3 = 11
  // Loop through the array to look for 11

*/

/*
  Add written explanation of your solution here
  // Use a hashmap to store the array as values in an object to be compared to later
  // Loop through the array to check if the complement which is target - array[i] is in the map
  // Return true if it is, if not add the number to the object
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
