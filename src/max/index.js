/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  let foo = arr;
  //console.log(foo)
  var max;
  for(let i=0; i<foo.length; i++){
    if(isFinite(foo[i])){
      //console.log(foo[i])
      if(max == undefined)
        max=foo[i]
      if(foo[i] > max) 
        max = foo[i];
    }
  }
  //console.log("result:"+max)
  return max
};

export default max;
