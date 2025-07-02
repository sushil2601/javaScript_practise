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







