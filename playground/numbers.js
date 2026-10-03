// ========================================
// NÚMEROS - JAVASCRIPT / LEETCODE
// ========================================

const number = 12345;

// Parte inteira
console.log(Math.trunc(70.89 / 10)); // 7

// Arredondar para baixo
console.log(Math.floor(7.89)); // 7

// Arredondar para cima
console.log(Math.ceil(7.12)); // 8

// Arredondar normalmente
console.log(Math.round(7.5)); // 8


// ========================================
// ÚLTIMO DÍGITO
// ========================================

const lastDigit = number % 10;

console.log(lastDigit);
// 5


// ========================================
// REMOVER O ÚLTIMO DÍGITO
// ========================================

const withoutLastDigit = Math.trunc(number / 10);

console.log(withoutLastDigit);
// 1234


// ========================================
// PEGAR DÍGITOS UM POR UM
// ========================================

let n = 12345;

while (n > 0) {
    const digit = n % 10;

    console.log(digit);

    n = Math.trunc(n / 10);
}

// saída:
// 5
// 4
// 3
// 2
// 1


// ========================================
// QUANTIDADE DE DÍGITOS
// ========================================

const digits = Math.floor(Math.log10(number)) + 1;

console.log(digits);
// 5


// ========================================
// POTÊNCIA
// ========================================

console.log(2 ** 3); // 8

console.log(Math.pow(2, 3)); // 8


// ========================================
// MÓDULO / RESTO
// ========================================

console.log(10 % 3); // 1

// muito utilizado para verificar paridade

console.log(10 % 2 === 0); // true
console.log(7 % 2 === 0);  // false