/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  let length = arr.length;
  var result=[]
  for(let i = 0; i < length; i++){
    let foo = arr[i];
    let foo2 = foo["flags"];
    for(let j = 0; j < 3; j++){
      result.push(foo2[j])
    }
  }
  //console.log(result)
  return result
};

export default getFlags;
