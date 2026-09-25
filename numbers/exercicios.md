## Questão 1 — Número Palíndromo

Dado um número inteiro `x`, determine se ele é um palíndromo.

Um número é considerado palíndromo quando possui a mesma sequência de dígitos quando lido da esquerda para a direita e da direita para a esquerda.

Você **não pode converter o número para string**.

### Exemplos

```text
Entrada: 121
Saída: true
```

```text
Entrada: 123
Saída: false
```

```text
Entrada: -121
Saída: false
```

### Assinatura

```javascript
function isPalindrome(x) {

}
```

### O que você pode precisar

```javascript
%
Math.trunc()
/
*
```

## Questão 2 — Inverter um Número

Dado um número inteiro positivo `n`, retorne o número formado pelos seus dígitos na ordem inversa.

Não converta o número para string.

### Exemplos

```text
Entrada: 1234
Saída: 4321
```

```text
Entrada: 507
Saída: 705
```

```text
Entrada: 1200
Saída: 21
```

### Assinatura

```javascript
function reverseNumber(n) {

}
```

### Dica conceitual

Pense em como:

```javascript
n % 10
```

e

```javascript
Math.trunc(n / 10)
```

podem ajudar.

## Questão 3 — Soma dos Dígitos

Dado um número inteiro positivo `n`, calcule a soma de todos os seus dígitos.

Não converta o número para string.

### Exemplos

```text
Entrada: 1234
Saída: 10
```

Porque:

```text
1 + 2 + 3 + 4 = 10
```

Outro:

```text
Entrada: 507
Saída: 12
```

Porque:

```text
5 + 0 + 7 = 12
```

### Assinatura

```javascript
function sumDigits(n) {

}
```

## Questão 4 — Quantidade de Dígitos

Dado um inteiro não negativo `n`, determine quantos dígitos ele possui.

Não utilize conversão para string.

### Exemplos

```text
Entrada: 7
Saída: 1
```

```text
Entrada: 42
Saída: 2
```

```text
Entrada: 12345
Saída: 5
```

```text
Entrada: 0
Saída: 1
```

### Assinatura

```javascript
function countDigits(n) {

}
```

Tome cuidado especialmente com:

```text
0
```

## Questão 5 — Maior Dígito

Dado um número inteiro positivo `n`, encontre o maior dígito existente no número.

Não converta para string.

### Exemplos

```text
Entrada: 5832
Saída: 8
```

```text
Entrada: 1119
Saída: 9
```

```text
Entrada: 402
Saída: 4
```

### Assinatura

```javascript
function largestDigit(n) {

}
```

## Questão 6 — Contar Dígitos Pares

Dado um número inteiro positivo `n`, determine quantos dos seus dígitos são pares.

### Exemplos

```text
Entrada: 123456
Saída: 3
```

Os dígitos pares são:

```text
2
4
6
```

Outro:

```text
Entrada: 13579
Saída: 0
```

### Assinatura

```javascript
function countEvenDigits(n) {

}
```

Aqui você vai combinar duas ideias:

```text
extrair um dígito
+
descobrir se ele é par
```

## Questão 7 — Produto dos Dígitos

Dado um número inteiro positivo `n`, calcule o produto de todos os seus dígitos.

### Exemplos

```text
Entrada: 234
Saída: 24
```

Porque:

```text
2 × 3 × 4 = 24
```

Outro:

```text
Entrada: 105
Saída: 0
```

### Assinatura

```javascript
function multiplyDigits(n) {

}
```

Aqui existe uma pequena pegadinha na inicialização da variável que guarda o resultado.

## Questão 8 — Número Armstrong de 3 Dígitos

Um número de três dígitos é chamado de número de Armstrong quando a soma do cubo de cada um de seus dígitos é igual ao próprio número.

Por exemplo:

```text
153
```

porque:

```text
1³ + 5³ + 3³
=
1 + 125 + 27
=
153
```

Dado um número inteiro de três dígitos, determine se ele é um número de Armstrong.

### Exemplos

```text
Entrada: 153
Saída: true
```

```text
Entrada: 370
Saída: true
```

```text
Entrada: 123
Saída: false
```

### Assinatura

```javascript
function isArmstrong(n) {

}
```

## Questão 9 — Divisores de um Número

Dado um número inteiro positivo `n`, retorne quantos divisores positivos ele possui.

### Exemplo

```text
Entrada: 12
Saída: 6
```

Porque os divisores são:

```text
1
2
3
4
6
12
```

Outro:

```text
Entrada: 7
Saída: 2
```

Porque:

```text
1
7
```

### Assinatura

```javascript
function countDivisors(n) {

}
```

Aqui você começa a sair de manipulação de dígitos e entrar em **divisibilidade**.

## Questão 10 — Número Primo

Dado um inteiro `n`, determine se ele é primo.

Um número primo é um número maior que `1` que possui exatamente dois divisores:

```text
1
ele mesmo
```

### Exemplos

```text
Entrada: 7
Saída: true
```

```text
Entrada: 12
Saída: false
```

```text
Entrada: 1
Saída: false
```

### Assinatura

```javascript
function isPrime(n) {

}
```

Comece com uma solução simples. **Não se preocupe ainda em encontrar a forma mais otimizada possível.**
