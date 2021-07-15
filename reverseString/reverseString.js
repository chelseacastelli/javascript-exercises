const reverseString = function(str) {
    let tempStr = str.split('').reverse();
    return tempStr.join('');
};

module.exports = reverseString;
