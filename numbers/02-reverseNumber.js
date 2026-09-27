// 02. Inverter Número
// Inverta os dígitos de um número inteiro positivo.
// Não use string.
// Ex: 1234 -> 4321 | 1200 -> 21

function reverseNumber(n) {
    let rev = 0;

    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n = Math.trunc(n / 10);
    }

    return rev;
}

console.log(reverseNumber(2350));