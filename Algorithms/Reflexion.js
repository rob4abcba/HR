function doAsyncTask(input) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(input);
      }, 500);
    });
  }
  
  let inputs = [1,2,3,4];
  
  doAsyncTask(inputs[0]).then(inputs[1], console.log("no more elements"));
  
  // call with first element
  // wait for first call to resolve
  // call with second element
  // wait
  // etc.
  
  
  
  // // Define a class Reverse which has a static method str. str should take a string input and return a string reversed: str('asd') => 'dsa'
  // // extend default 
  // class Reverse {
  //   static str(string) {
  //     // let res = "";
  //     // length = string.length
  //     // for(let i = string.length-1; i >= 0; i--) { 
  //     //   res += string[i];
  //     //   console.log("test", i);
  //     // }
  //     // return res;
  //     return string.split('').reverse().join('')
  //   }
  // }
  
  // console.log(Reverse.str('reflexion'));