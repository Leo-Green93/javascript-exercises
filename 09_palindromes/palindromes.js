const palindromes = function (str) {
        str = str.toLowerCase()
       .replace(/[^a-z0-9]/gi, '')
       .split("")
     
     let newArray = [];
     
     for (let i = str.length - 1; i >= 0; i--) {
      newArray.push(str[i])
     
     }
     //console.log(str, newArray)
     
     for (let i = 0; i <= str.length - 1; i++) {
         if (str[i] !== newArray[i]) {
           return false
         }
       }
       return true
};

// Do not edit below this line
module.exports = palindromes;
