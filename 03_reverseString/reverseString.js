const reverseString = function(string) {
    let newString = ""
    string.split('');
    for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i]
    } return newString 
}

// Do not edit below this line
module.exports = reverseString;