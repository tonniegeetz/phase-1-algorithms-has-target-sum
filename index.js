function hasTargetSum(array, target) {
  // Write your algorithm here
  //look thru each item in the array
  for (let i = 0; i < array.length; i++) {
    //look thru the rest of the pile 
    for (let j = i + 1; j < array.length; j++) {
      //check if i + j = target
      if (array[i] + array[j] === target) {
        return true
      }
    }
  }
  return false

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
   //access one element of the array, store it in a variable
  //access the second element of the array, store it in a variable
  //add the two then compare it with the target solution
*/

/*
  Add written explanation of your solution here
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
