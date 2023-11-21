function getRandomIntArray(n, min, max) {
    const y = [];
    for (var i=0; i<n;i++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        y[i] = Math.floor(Math.random() * (max - min) + min);
    }
    return y;
}

function solve(param) {
    var ans = 0;
    for (var i=0; i<3;i++) {
        ans += (param[4-i] * (param[1] ** (i+1) - param[0] ** (i+1)) / (i+1))
    }
    return ans
}