/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const calculate = (a, b) => {
  if (a === b) {
    //return a * a * b;
    console.log(a * a * b);
  } else {
    console.log(a * b);
    //return a * b;
  }
};
//calculate(4, 5);

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const checkNumber = (a, b) => {
  if ((a === 50) | (b === 50) | (a + b === 50)) {
    console.log(true);
  } else {
    console.log(false);
  }
};
//checkNumber(150, 150);

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeChar = (string, index) => {
  part1 = string.substring(0, index);
  part2 = string.substring(index + 1, string.length);
  //return (part1 + part2);
  console.log(part1 + part2);
  //return str[index];
};
//removeChar("hello", 0);

/*

4.  Create a function to find the largest of three given integers.
    */

const largestNum = (a, b, c) => {
  if ((a > b) & (a > c)) {
    console.log(a);
  } else if ((b > a) & (b > c)) {
    console.log(b);
  } else {
    console.log(c);
  }
};
//largestNum(80, 55, 65);

//5) Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

const betweenRange = (a, b) => {
  if (
    (a >= 40 && a <= 60 && b >= 40 && b >= 60) ||
    (a >= 70 && a <= 100 && b >= 70 && b <= 100)
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
};
//betweenRange(70, 100);

//6) Create a function to create a new string of specified copies (positive number) of a given string.

const stringCopies = (string) => {
  let positive = parseInt(string);
  let copies = [];
  if (positive > 0) {
    for (let i = 0; i < parseInt(string); i++) {
      copies.push(string);
    }
    console.log(copies);
  } else {
    console.log("value is not a positive number");
  }
};
//stringCopies("1");

//7.  Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.

const displayCityName = (string) => {
  if (string.startsWith("Los") || string.startsWith("New")) {
    console.log(string);
  } else {
    console.log("");
  }
};
//displayCityName("Ne York");
//8)Create a function to calculate the sum of three elements of a given array of integers of length 3.
const sumofElements = (array) => {
  let sum = array.reduce(function (a, b) {
    return a + b;
  });
  console.log(sum);
};
list = [4, 5, 6];
//sumofElements(list);

//9)  Create a function to test whether an array of integers of length 2 contains 1 or a 3.

const arrayOfIntigers = (arr) => {
  if (arr.length == 2) {
    if (arr.indexOf(1) !== -1 || arr.indexOf(3) !== -1) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
};
//arrayOfIntigers([4, 3]);
//10) Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

const arrDoesNotContains = (arr) => {
  if (arr.indexOf(1) == -1 || arr.indexOf(3) == -1) {
    console.log(true);
  } else {
    console.log(false);
  }
};
//arrDoesNotContains([1, 5]);
//11) Create a function to find the longest string from a given array of strings.
const longestString = (arr) => {
  let max = arr[0].length;
  arr.map((v) => (max = Math.max(max, v.length)));
  result = arr.filter((v) => v.length == max);
  return result;
};

console.log(longestString(["kollu", "26", "vinay"]));
