function sumOdd(n) {
    if (n <= 0) return 0;
    if (n % 2 == 0) {
        return 0 + sumOdd(n - 1);
    } else {
        return n + sumOdd(n - 1);
    }
}

console.log(sumOdd(10)); // 25
