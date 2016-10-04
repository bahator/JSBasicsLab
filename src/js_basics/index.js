
function isString(str){
    return typeof str === 'string' || str instanceof String
}

export const isNumberEven = (i) => {
  // i will be an integer.
  // Return true if it's even, and false if it isn't.
    return i % 2==0;

};

export const getFileExtension = (str) => {
  // str will be a string, but it may not have a file extension.
  // Return the file extension (with no period) if it has one, otherwise
    return str.lastIndexOf('.')!= -1 ? str.substr(str.lastIndexOf('.')+1): false;

};

// arr will be an array.
// Return the longest string in the array
export const longestString = (arr) => arr.sort((a,b) => ((isString(b) ? b.length : -1) - (isString(a) ? a.length : -1)))[0]

export const reverseString = (str) => {
  // str will be an string
  // Return a new string who's characters are in the opposite order to str's.
   return str.split('').reverse().join('');
};

export const isPalindrome = (str) => {
  // str will be an string
  // Return true if it is a palindrome and false otherwise.
  // It should be case insensitive and not consider space or punctuation.
    return str.toLowerCase().replace(" .,/#!$%^&*;:{}=-_`~()]","")==reverseString(str.toLowerCase().replace(" .,/#!$%^&*;:{}=-_`~()]",""));
};

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.

    if(typeof arr ==="number") return arr;
    else if(arr instanceof Array) return nestedSum(arr[0])+(arr.length >1 ? nestedSum(arr.slice(1, arr.length)) : 0);
    return 0;
};
