// 9. Quantidade de Divisores
// Retorne quantos divisores positivos o número possui.
// Ex: 12 -> 6
// Divisores: 1, 2, 3, 4, 6, 12

function countDivisors(n) {
    let divisorCount = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisorCount++;
        }
    }

    return divisorCount;
}

console.log(countDivisors(12));