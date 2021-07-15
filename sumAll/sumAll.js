const sumAll = function(start, end) {
    if ((start < 0 || end < 0) || (typeof(start) !== "number" || typeof(end) !== "number")) { return 'ERROR'; }
    if (start === end) { return 0; }

    let range = [start,end].sort();
    let sum = 0;

    for (let i = range[0]; i <= range[1]; i++) {
        sum += i;
    }

    return sum;
};

module.exports = sumAll;
