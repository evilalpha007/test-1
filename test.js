//  const sumofTwo = (a,b)=>{
//     let add = 0;
//     add =  a+b;
//     return add
//  }

//   const sum  = sumofTwo(2,3);

//   console.log(sum)

// const calculateAreaOfRec = (a,b) => {
// return a*b;
// }

// const area   = calculateAreaOfRec(5,6)

// console.log(area)

//  const reverserdStr = (str) => {
// return str.split('').reverse().join('');
//  }

//   const ans = reverserdStr("hello world")
//   console.log(ans)

// const checkEveOdd = (num)=>{
// if(num % 2 === 0){
//     return console.log("even")
//  } else {
//     return console.log("odd")
//  }
// }

// checkEveOdd(4)

// const findLeapYear = (year) => {
//   if (year % 4 === 0 && year % 100 !== 0) {
//   } else {
//     return "leap year"
//     return "no leap  year"
//   }
// };
//  const ans = findLeapYear(2001);

//  const arr = [1,2,3,4,5,6];
// let sum = 0;
//   const ans_arr = arr.map((ele)=>{
//  return sum+=ele
//   })

//   console.log(sum)

// console.log(ans)


//  for(var i=0; i<3; i++){
//     (function(i){

//         setTimeout(()=>{
//             console.log(i)
//         },1000)
//     })(i)
//  }

// async function foo(){
//     return "hello world"
// }

// async function bar(){
//     const result =  await foo()
//     console.log(result)
// console.log("first")
// console.log("first2")

//  }

// bar()


 let fs  = require("fs");

  const data  = fs.readFileSync("a.text"  , "utf-8")
  console.log(data)