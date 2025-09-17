// Question 18: Check if a Number is a Palindrome

let words = ["apple", "banana", "apple", "orange", "banana"];

let frequency = words.reduce((acc,word) => {
    acc[word] = (acc[word] || 0) +1 
    return acc;
},{})

console.log(frequency)




// Question 16: Reverse each word in a sentence

// let str = "Hello World"
// let words = str.split(" ")
// let result = [];

// for(let i=0; i<words.length; i++){
//     let rev_words = ""
//     for(let j=words[i].length-1; j>=0; j--){
//         rev_words+=words[i][j]
//     }
//     result.push(rev_words)
// }

// console.log(result.join(" "))

// Question 15: Find the Intersection of Two Arrays

// arr1 = [1, 2, 3, 4, 5];
// arr2 = [3, 4, 5, 6, 7];

// let intersection =  arr1.filter(num => arr2.includes(num))

// console.log(intersection);

// Question 14: Find the First Non-Repeating Character in a String (Hash Map Use)

// let str = "swiss"
// let charCount = {};

// for(let char of str){
//     charCount[char] = (charCount[char] || 0) + 1 
// }

// let result = null
// for(let char of str){
//     if(charCount[char] === 1){
//         result = char
//         break
//     }
// }

// if (result) {
//     console.log("First non-repeating character is:", result);
// } else {
//     console.log("No unique character found");
// }

// Question 13: Find the Missing Number in an Array

// arr = [1, 2, 4, 5, 6];

// n=arr.length+1

// actual_sum = 0;
// expected_sum = (n*(n+1))/2

// for(let i=0; i< arr.length; i++){
//     actual_sum+=arr[i]
// }

// let missingNumber = expected_sum - actual_sum;

// console.log(missingNumber)


// Question 12: Remove duplicates from an array

// arr = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArr = [...new Set(arr)];

// console.log(uniqueArr)

// Question 7: Find the Factorial of a Number

// let n = 6;
// let fact = 1;

// while(n>1){
//     fact*=n
//     n--
// }

// console.log(fact)


// Question 5: Find the second largest number in an array

// arr = [10, 4, 99, 23, 56]

// let largest = -Infinity
// let sec_largest = -Infinity

// for (let i = 1; i < arr.length; i++){
//     if(arr[i]> largest){
//         sec_largest = largest
//         largest = arr[i]
//     }
//     else if(arr[i]>sec_largest && arr[i]!=largest){
//         sec_largest=arr[i]
//     }
// }

// console.log(sec_largest)

// Question 4: Find the Largest Number in an Array

// arr = [10, 4, 99, 23, 56]

// let largest = arr[0]

// for (let i = 1; i < arr.length; i++){
//     if(arr[i]> largest){
//         largest=arr[0]
//     }
// }

// console.log(largest)


// Question 3: Count the Number of Vowels in a String

// str = "Hello World";
// vowels_count = 0;
// let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
// str=str.toLowerCase()

// for(let char of str){
//     if(vowels.has(char)) vowels_count++
// }

// console.log(vowels_count)



// Question 2: Check if a String is a Palindrome

// let str = "";
// let isPalindrome = true;

// for(let i=0; i<str.length/2; i++){
//     if(str[i] != str[str.length-1-i]){
//         isPalindrome = false
//         break
//     }
// }

// console.log(isPalindrome ? "Palindrome" : "Not a Palindrome")