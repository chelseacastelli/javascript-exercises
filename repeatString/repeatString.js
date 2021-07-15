const repeatString = function(str, num) {
    if (num < 0) { return 'ERROR'; }
    else if (num === 0) { return ''; }
    else if (num === 1) { return str; }
    else { return str + repeatString(str, num-1); }
};

module.exports = repeatString;
