// 03. Soma dos Dígitos
// Some todos os dígitos de um número.
// Ex: 1234 -> 10

function sumDigits(n) {
    let sum = 0;

    while (n > 0) {
        sum += n % 10;
        n = Math.trunc(n / 10);
    }

    return d;
}

console.log(sumDigits(1234));