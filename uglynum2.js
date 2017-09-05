function nthUglyNumber(num) {
    if (num === 1) {
        return 1;
    }
    let d2 = 0;
    let d3 = 0;
    let d5 = 0;
    let arr = [1];
    for (var i = 1; i <= num; i++) {
        arr[i] = Math.min(2 * arr[d2], 3 * arr[d3], 5 * arr[d5]);
        if (arr[i] === 2 * arr[d2]) {
            d2++;
        }
        if (arr[i] === 3 * arr[d3]) {
            d3++;
        }
        if (arr[i] === 5 * arr[d5]) {
            d5++;
        }
    }
    return arr[num - 1];
}
console.log(nthUglyNumber(10));
