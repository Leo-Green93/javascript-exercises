const removeFromArray = function(array, ...args) {
    let newArray = [];
    array.forEach(items => {
        if (!args.includes(items)) {
            newArray.push(items)
        }
    });
    return newArray
    
};


// Do not edit below this line

module.exports = removeFromArray;
