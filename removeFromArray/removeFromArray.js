
const removeFromArray = function(arr, ...args) {
    let filteredArr = arr.filter((num) => !args.includes(num));
    return filteredArr;
}

module.exports = removeFromArray;
