// 8. Número Armstrong
// Para números de 3 dígitos, verifique se a soma
// do cubo dos dígitos é igual ao próprio número.
// Ex: 153 -> true
// 1³ + 5³ + 3³ = 153

function isArmstrong(n) {
    let sum_cube = 0;
    const origin_value = n;

    while (n > 0) {
        const digit = n % 10;

        sum_cube += Math.pow(digit, 3);
        console.log(digit);
        n = Math.trunc(n / 10);
    }

    return sum_cube === origin_value;
}


console.log(isArmstrong(153));