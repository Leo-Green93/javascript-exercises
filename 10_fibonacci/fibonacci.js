const fibonacci = function(count) {
    if(count < 0) {return "OOPS"};
    if(count === 0) {return 0};

    let fibOne = 1;
    let fibTwo = 0;

    for(let i = 2; i <= count; i++) {
        let fibCurrent = fibOne + fibTwo;
        fibTwo = fibOne;
        fibOne = fibCurrent;
    } return fibOne

};

// Do not edit below this line
module.exports = fibonacci;
