const repeatString = function(string, num) {
let newString = ""
if (num > 0) {
for (let i = num; i > 0; i--) {
    newString += string
    num-= 1;
    
} return newString;
} else if (num < 0) {
    newString = "ERROR"
    return newString;
} else {
    return ""
}
}


/* while (num > 0) {
    newString += string;
    num -= 1;   
} 
return newString; */


// Do not edit below this line
module.exports = repeatString;
