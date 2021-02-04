function factorial(n) {
    if (n > 1 && n < 100) {
        return n * factorial(n-1);
    }
    return 1;
}
console.log("factorial(5) =", factorial(5));