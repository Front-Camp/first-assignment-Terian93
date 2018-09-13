/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  let foo = arr;
  var result = [];
  for(let i = 0; i<foo.length; i++){
    for(let j = 1; j<foo.length; j++){
      let check = foo[i] + foo[j]
      if(check === base)
      {
        result.push(foo[i])
        result.push(foo[j])
        //console.log(result)
        //console.log(base)
        return result;
      }
        
    }
  }
};

export default twoSums;
