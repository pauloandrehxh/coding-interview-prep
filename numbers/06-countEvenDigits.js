// 6. Quantidade de Dígitos Pares
// Conte quantos dígitos do número são pares.
// Ex: 123456 -> 3

function countEvenDigits(n) {
    if (n === 0) {
        return 1;
    }

    n = Math.abs(n);
    let count = 0;

    while (n > 0) {
        const digit = n % 10;

        if (digit % 2 === 0) {
            count++;
        }

        n = Math.trunc(n / 10);
    }

    return count;
}

console.log(countEvenDigits(123456));
console.log(countEvenDigits(-12039));
console.log(countEvenDigits(0));
