// 7. Produto dos Dígitos
// Multiplique todos os dígitos do número.
// Ex: 234 -> 24

function multiplyDigits(n) {
    let product = 1;

    while (n > 0) {
        const digit = n % 10;

        if (digit === 0) {
            return 0;
        }

        product *= digit;

        n = Math.trunc(n / 10);
    }

    return product;
}

console.log(multiplyDigits(234));
console.log(multiplyDigits(204));
console.log(multiplyDigits(2184));
