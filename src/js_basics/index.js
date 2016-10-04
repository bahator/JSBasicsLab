
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

export const longestString = (arr) => {
  // arr will be an array.
  // Return the longest string in the array
  return arr.sort(function(a,b){
      if (a instanceof String)
          if(b instanceof String)
                return a-b;
          else return 1;
      else
         if(b instanceof String)
             return -1
      return 0;});
};

export const reverseString = (str) => {
  // str will be an string
  // Return a new string who's characters are in the opposite order to str's.
   return str.split('').reverse().join('');
};

export const isPalindrome = (str) => {
  // str will be an string
  // Return true if it is a palindrome and false otherwise.
  // It should be case insensitive and not consider space or punctuation.
    return str.toLowerCase()==reverseString(str.toLowerCase());
};

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.
};
