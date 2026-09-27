// 04. Quantidade de Dígitos
// Retorne quantos dígitos o número possui.
// Ex: 12345 -> 5 | 7 -> 1

function countDigits(n) {
    if (n === 0) {
        return 1;
    }

    n = Math.abs(n);

    let qtd = 0;

    while (n > 0) {
        qtd++;
        n = Math.trunc(n / 10);
    }

    return qtd;
}

console.log(countDigits(-1237));