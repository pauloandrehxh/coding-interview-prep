// 05. Maior Dígito
// Retorne o maior dígito existente no número.
// Ex: 5832 -> 8

function largestDigit(n) {
    n = Math.abs(n);
    let max = 0;
    while (n > 0) {
        const digit = n % 10;

        if (digit === 9) {
            return 9;
        }

        if (digit > max) {
            max = digit;
        }

        n = Math.trunc(n / 10);
    }

    return max;
}

console.log(largestDigit(5832));
console.log(largestDigit(-5293432));