// 01. Número Palíndromo
// Dado um inteiro x, retorne true se ele for palíndromo.
// Não converta o número para string.
// Ex: 121 -> true | 123 -> false

function isPalindrome(x) {
    if (x < 0 || (x != 0 && x % 10 == 0)) {
        return false;
    }

    let half = 0;

    while (x > half) {
        half = (half * 10) + (x % 10);
        x = Math.trunc(x / 10);
    }

    return x == half || x == Math.trunc(half / 10);
}