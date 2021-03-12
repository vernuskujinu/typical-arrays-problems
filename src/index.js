exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let inf = Infinity;
    array.forEach(item => {
        if (item < inf) {
            inf = item;
        }
    });
    return inf;
};
exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let inf = -Infinity;
    array.forEach(item => {
        if (item > inf) {
            inf = item;
        }
    });
    return inf;
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let abc = 0;
    array.forEach(item => {
        abc = abc + item;
    });
    return abc / array.length;
};
