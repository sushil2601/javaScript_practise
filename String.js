//(Q1) let string = "Sabyasachi, Techno Exponent Techno I Sabyasachi";

// o/p
// Sabyasachi - 2
// Techno - 2
// Exponent -1
// I - 1

// let string = "Sabyasachi, Techno Exponent Techno I Sabyasachi";

// let words = string.replace(/,/g, '').split(' ');  

// console.log(words)

// ///,/ → This matches a comma character.

// ///g → This is the global flag, meaning match all commas, not just the first one.

// //'' → This is the replacement string (an empty string), so matched commas are removed

// let wordCount = {};

// words.forEach(word => {
//   if (wordCount[word]) {
//     wordCount[word]++; 
//   } else {
//     wordCount[word] = 1; 
//   }
// });

// for (let word in wordCount) {
//   console.log(`${word} - ${wordCount[word]}`);
// }

// for(let [word,count] of Object.entries(wordCount)){
//         console.log(`${word}-${count}`)
//     }

// Q 2) find out the mising numbers

// ex:- arr = [1,3,5,9,11] , o/p :- 7

// const arr = [1,3,5,7,9,13]

// function missingNumber(arr){

//   // console.log(arr)

//   let sum1 = arr.reduce((acc,currentValue)=>{
//     acc = acc+currentValue;
//     return acc;
//   })

//   console.log(sum1)

//   let minNum = Math.min(...arr);
//   let maxNum = Math.max(...arr);

//   // console.log(minNum)
//   // console.log(maxNum)

//   let sum2 = 0;

//   for (let i = minNum; i <= maxNum; i++) {

//     if(i%2 != 0){
//       sum2 = sum2 + i
//     }

// }

// console.log(sum2)

// let missNumber = sum2-sum1;

// console.log('Missing number is :-',missNumber)



//   return missingNumber;
// }

// let num = missingNumber(arr)

// Q3) nth largest number :- [1,2,3,4,5,6,7,9]

// const number = [1,2,3,4,5,6,7,8,9]

// function findNthLargest(arr,n){

//   if(n>arr.length) return null;

//     const sortedArr = [...arr].sort((a,b)=>b-a)

//     return sortedArr[n-1];
// }

// let nthLargest = findNthLargest(number,1)
// console.log(nthLargest);

// Q4) Remove duplicates , Ex:- [1,2,3,5,4,3,2,1] , o/p:-[1,2,3,4,5]

// let arr = [1,2,3,5,4,3,2,1];
// let String = ['a','b','c','a','d','b','a']

// function removeDuplicate(arr){

//   const duplicate = [...new Set(arr)]
//   return duplicate;
// }

// const num = removeDuplicate(String);
// console.log(num);

// function removeDuplicates(arr){

//   let uniqueElement = [];

//   for(let i = 0;i<arr.length;i++){
//     if(uniqueElement.indexOf(arr[i])===-1){
//       uniqueElement.push(arr[i])
//     }
//   }

//   return uniqueElement;
// }

// console.log(removeDuplicates(arr))


// Q4) const str = 'a_b__c_d , o/p :- a1b23c4d

// function fillNumber(str){

//   let result = '';
//   let counter = 1

//   for(let char of str){
    
//     if(char === '_'){
//       result = result + counter++
//     }
//     else{
//       result = result + char
//     }
//   }

//   return result;
// }
// const str = 'a_b__c_d';

// const filledStr = fillNumber(str);
// console.log(filledStr)

// Q5) const a1 = 'abcde', const b1 = '123456' o/p :- 'a1b2c3d4e56'


    // const a1 = 'abcde'
    // const b1 = '123456'

    // let maxLength = Math.max(a1.length,b1.length);
    // let result = '';

    // for(let i=0;i<maxLength;i++){
    //   if(i<a1.length){
    //       result = result + a1[i];
    //   }
    //   if(i<b1.length){
    //     result = result + b1[i]
    //   }
    // }

    // console.log(result)

// Q6) const a1 = 'abcdef' , const b1 = '123456789' , o/p = a1b23c456d789

    // const a1 = 'abcd';
    // const b1 = '123456789';
    // let result = '';
    // let index = 0;

    // for(let i=0;i<a1.length;i++){
    //   result = result + a1[i];

    //   for(let j=0;j<=i;j++){
    //     if(index<b1.length)
    //     result = result + b1[index] //result = result + b1[j] o/p :- a1b12c123d1234
    //     index++
    //   }
    // }

    // console.log(result)

// Q7) reverse the string

// let string = 'sushil kr suman';

// function reversedString(str){

//   let reversed = ''
//   for(let i=str.length-1;i>=0;i--){
//     reversed = reversed+str[i]
//   }
//   return reversed;
// }

// console.log(reversedString(string))

// function reversedString(str){

//   return str.split("").reverse().join(""); 

//Step 1: str.split("")
//This converts the string into an array of characters.

//"hello" → ["h", "e", "l", "l", "o"]

// Step 3: .join("")
// This joins the array back into a single string without any separator.

// ["o", "l", "l", "e", "h"] → "olleh"


// }

// console.log(reversedString(string))

//Q8) find the longest word in the sentence

// let String = 'I love coding in JavaScript'

// function findLongestWord(str){

//   let words = str.split(" ")
//   console.log(words)

//   let longestWord = '';

//   for(let word of words){
//     if(word.length>longestWord.length){
//       longestWord = word
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord(String))

// Q 8) Palindrome or not , Palindrome :- if we reverse the word , the word will be same

// let String = 'racecar'

// function isPalindrome(str){

//   const reversedStr = str.split('').reverse().join('');

//   return str === reversedStr
// }

// console.log(isPalindrome(String))

// Q 9) Anagrams :- is a word formed by rearranging the letters of another word

// let Str1 = 'listen';
// let Str2 = 'silent';

// function areAnagrams(str1,str2){

//   let sortedStr1 = str1.split('').sort().join('');
//   let sortedStr2 = str2.split('').sort().join('');

//   return sortedStr1 === sortedStr2;
// }

// console.log(areAnagrams(Str1,Str2))

// Q10) nos. of vowel in string

// const str = 'Hello World'

// function countVowels(Str){

//   let vowels = ['a','e','i','o','u'];
//   let count = 0;

//   for(let char of str.toLowerCase()){
//     if(vowels.includes(char)){
//       count++
//     }
//   }
//   return count
// }

// console.log(countVowels(str))

//Q11) find the largest number in array

// let arr = [1,2,3,4,5,6,7,8,90]

// function findLargestNumber(arr){

//   let largest = arr[0];

//   for(let i=1;i<arr.length;i++){
//     if(arr[i]>largest){
//       largest = arr[i]
//     }
//   }

//   return largest
// }

// console.log(findLargestNumber(arr))

//Q12) find the prime number :- a number which divisible by 1 and itself.

// function isPrime(number){

//   for(let i=2;i<=number/2;i++){
//     if(number%i === 0){
//       return false
//     }
//   }
//   return true
// }

// console.log(isPrime(2))

//Q13) remove the white spaces

// function removeWhiteSpace(str){

//   const result = str.replace(/\s/g,'');
//   return result;
// }

// console.log(removeWhiteSpace('Interview  Happy'));

// Q. 

// const arr = [0,2,1,3,10,6,4,10,8,9,7,14,11]

// console.log(arr)

// const newArr = arr.filter((item)=> item % 2 !==0).map((item)=>item*2).sort((a,b)=>b-a);

// console.log(newArr);

//The .sort() method by default sorts elements as strings, which can lead to incorrect results for numbers
//To correctly sort numbers numerically, we provide a compare function

//The compare function takes two arguments: a and b.

/*If the result is negative (a - b < 0), then a comes before b.

If the result is zero (a - b === 0), then the order stays the same.

If the result is positive (a - b > 0), then b comes before a.*/

// Q. To count the occurence of letter

// function countLetters(str){

//     let count ={};

//     str.toLowerCase().split('').forEach((char)=>{
//         if(char >='a' && char <='z'){
//             count[char] = (count[char] || 0) +1
//         }
//     })

//     return count
// }

// console.log(countLetters("Hello World"));

// Q. Closure

    //1.
    // function xyz(){
    //     let count = 0;
    //     return function abc(){
    //         count++;
    //         console.log(count);
    //     }
    // }

    // const counter1 = xyz();
    // counter1();
    // counter1();
    // counter1();

    //2.
    // function abc(){
    //     let count = 0;

    //     return{
    //         increment : function(){
    //             count++;
    //         },
    //         decrement : function(){
    //             count--;
    //         },
    //         log : function(){
    //             console.log(count);
    //         }
    //     }
    // }

    // const counter = abc();
    // counter.increment();
    // counter.increment();
    // counter.decrement()
    // counter.log();

    //Q. arr = [10,20,35,20,22,20,35,27,20] , output : [10,20,35] 

    // const arr = [10,20,35,20,22,20,35,27,10];

    // function uniqueCount(arr){

    //     const count = {};
    //     const output = [];

    //     arr.forEach((item)=>{
    //         return count[item] = (count[item] || 0) +1
    //     })

    //     console.log(count)

    //     for(let item in count){
    //         if(count[item]>1){
    //             output.push(Number(item))
    //         }
    //     }

    //     console.log(output)
    // }

    // uniqueCount(arr)

    // let string = "Sabyasachi, Techno Exponent Techno I Sabyasachi";

    // function uniqueString(arr){

    //     const words = arr.replace(/,/g, '').split(' ')
    //     console.log(words)

    //     const results = {};

    //     words.forEach((item)=>{
    //         results[item] = (results[item] || 0) + 1
    //     })

    //     console.log(results)

    // }

    // const arr = [10,20,35,20,22,20,35,27,10];

    // const output = [...new Set(arr.filter(num => arr.indexOf(num) !== arr.lastIndexOf(num)))];

    // console.log(output)

    // uniqueString(string)

    //Q. flatten aaray : [1,2,[3,4,[5,6,7]]] , output : [1,2,3,4,5,6,7]

    // const flatArr = [1,2,[3,4,[5,6,7]]]

    // function flatten(flatArr) {
    //     const out = [];
    //     (function rec(x) {
    //         for (const v of x) Array.isArray(v) ? rec(v) : out.push(v);
    //     })(flatArr);
    //     // return out;
    //     console.log(out)
    // }

    // flatten(flatArr)

    // function flatten(flatArr){

    //     let result = [];

    //     function rec(x){
    //         for(let item of x){
    //             if(Array.isArray(item)){
    //                 rec(item)
    //             }else{
    //                 result.push(item)
    //             }
    //         }
    //     }

    //     rec(flatArr)

    //     console.log(result)
    // }

    // flatten(flatArr)

    // Q. input = [1,2,3,4,5,6,7,8]

        //input : [3,7]
        //output : [1,2,4,5,6,7,3,8]

        //input : [7,3]
        //output : [1,2,7,3,4,5,6,8]

        //rank 

    
    //3. IIFE -> immediate invoked function expression
        //self invoked function --> one time create hoga aur one time hi run hoga.
    // (function abc(a){
    //     return (function xyz(b){
    //         console.log(a)
    //     })(1)
    // })(0)


// Q. Promises

//1.produce and consume promises

    // const promise1 = new Promise((resolve,reject)=>{
    //     // resolve('promise is resolved')
    //     resolve({
    //         name : 'sushil',
    //         city : 'Noida'
    //     })
    //     reject('Promise is rejected')
    // })

    // promise1.then((data)=>{
    //     console.log(data)
    // })
    // .catch((err)=>{
    //     console.log(err)
    // })

//2. returnig some value    --> interview qns

    // const hello = function(obj){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve(obj)
    //         },5000)
    //     })
    // }

    // hello('Hello').then((val)=>console.log(val)).catch((err)=>console.log(err))


//     const promise = function(args){
//         return new Promise((resolve,reject)=>{
//             resolve(args)
//         })
//     }

//     promise('hello').then((data)=>console.log(data))

// //3. promise.all()

// const promise1 = new Promise((resolve,reject)=>{
//     // resolve('Promise1 resolved')
//     reject('promise1 rejected')
// })

// const promise2 = new Promise((resolve,reject)=>{
//     // resolve('Promise2 resolved')
//     reject('Promise2 is rejected')
// })

// const promise3 = new Promise((resolve,reject)=>{
//     // resolve('Promise3 resolved')
//     reject('Promise3 rejected')
// })

// // Promise.all([promise1,promise2,promise3]).then((val)=>console.log(val)).catch((err)=>console.log(err))
// // Promise.allSettled([promise1,promise2,promise3]).then((val)=>console.log(val)).catch((err)=>console.log(err))
// Promise.race([promise1,promise2,promise3]).then((val)=>console.log(val)).catch((err)=>console.log(err))
// Promise.any([promise1,promise2,promise3]).then((val)=>console.log(val)).catch((err)=>console.log(err))

//use of await with promise

    // const sayHello = function(){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('Say hello after 3 second')
    //         },3000)
    //     })
    // }

    // async function Greet(){
    //     console.log('Inside Greet function')
    //     const value = await sayHello();
    //     console.log(value)
    // }

    // Greet();

//sleep function
    // const Sleep = function(ms){
    //     return new Promise((resolve,reject)=>{
    //         console.log('Print after 3 sec')
    //         setTimeout(()=>{
    //             resolve('Hello, how are you')
    //         },ms)
    //     })
    // }

    // async function Greet(){
    //     console.log('Print the hello after 5 sec')
    //     const message = await Sleep(5000)
    //     console.log(message)
    // }

    // Greet();

    // Sleep(3000).then((val)=>console.log(val)).catch((err)=>console.log(err))

// Q. chain multiple synchronous operaration.

// function step1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(10)
//         },500)
//     })
// }

// function step2(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(value*2)
//         },500)
//     })
// }

// function step3(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(value + 5)
//         },500)
//     })
// }

// step1().then(step2).then(step3).then((finalResult)=>{
//     console.log('Final resilt :',finalResult)
// })

// function step1WithError(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(10)
//         },500)
//     })
// }

// function step2WithError(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(value>15){
//                 reject(new Error('value is too large'))
//             }else{
//                 resolve(value*2)
//             }
//         },500)
//     })
// }

// function step3WithError(value){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(value +5)
//         },500)
//     })
// }

// step1WithError()
// .then(step2WithError)
// .then(step3WithError)
// .then((finalResult)=>{
//     console.log('Final Result : ',finalResult)
// })
// .catch((err)=>{
//     console.log(err.message)
// })

// Q. Promise API

// const promiseA = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve('A')
//         reject('A')
//     },2000)
// })

// const promiseB = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('B')
//     },500)
// })

// const promiseC = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // resolve('C')
//         reject('C')
//     },1000)
// })

// Promise.all([promiseA,promiseB,promiseC])
// .then((results)=>{
//     console.log('All promise resolved',results)
// })
// .catch((err)=>{
//     console.log('One of the promises rejected',err)
// })

// Promise.allSettled([promiseA,promiseB,promiseC])
// .then((results)=>{
//     console.log('All promise resolved',results)
// })
// .catch((err)=>{
//     console.log('One of the promise rejected',err)
// })

/*  output :- 
    All promise resolved [
  { status: 'fulfilled', value: 'A' },
  { status: 'rejected', reason: 'B' },
  { status: 'fulfilled', value: 'C' }
]

*/

// Promise.race([promiseA,promiseB,promiseC])
// .then((results)=>{
//     console.log('All promise resolved',results)
// })
// .catch((err)=>{
//     console.log('One of the promise rejected',err)
// })

// Promise.any([promiseA,promiseB,promiseC])
// .then((results)=>{
//     console.log('Promise resolved',results)
// })
// .catch((err)=>{
//     console.log('Promise rejected',err)
// })

// Q. 

// console.log(Math.random())

// const randomPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const shouldResolve = Math.random() > 0.5;

//         if(shouldResolve){
//             resolve('Hello world')
//         }else{
//             reject('Error occured')
//         }
//     },2000)
// })

// randomPromise
// .then((val)=>{
//     console.log(val)
// })
// .catch((err)=>{
//     console.log(err)
// })

// Q. Fetch data in parallel in promises

// const delay = [800,1200,1000];

// const fetchSimulator = (url,delay) =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`data from ${url}`)
//         },delay)
//     })
// }

// const data1 = fetchSimulator('https://crocoder.dev/data1',delay[0])
// const data2 = fetchSimulator('https://crocoder.dev/data2',delay[1])
// const data3 = fetchSimulator('https://crocoder.dev/data3',delay[2])

// const delay = [800,1200,1000]

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('https://crocoder.dev/data1')
//     },delay[0])
// })

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('https://crocoder.dev/data2')
//     },delay[1])
// })

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('https://crocoder.dev/data3')
//     },delay[2])
// })

// Promise.all([promise1,promise2,promise3])
// .then((results)=>{
//     console.log('All data fetched:',results)
// })
// .catch((err)=>{
//     console.log('Something is wrong',err.message)
// })

//fibonaci with memoization
//     function fib(n){

//         if(n===0){
//             return 0
//         }
//         else if(n===1){
//             return 1
//         }
//         else return fib(n-1) + fib(n-2)
    
// }

// const result = fib(8);
// console.log(result)














