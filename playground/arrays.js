const nums = [10, 20, 30];

// tamanho
console.log(nums.length);

// acessar posição
console.log(nums[0]);

// último elemento
console.log(nums[nums.length - 1]);

// adicionar no final
nums.push(40);

// remover do final
nums.pop();

// adicionar no início
nums.unshift(5);

// remover do início
nums.shift();

// verificar valor
console.log(nums.includes(20));

// encontrar índice
console.log(nums.indexOf(20));

// copiar parte do array
console.log(nums.slice(0, 2));

// ordenar números
nums.sort((a, b) => a - b);

// percorrer por índice
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

// percorrer diretamente pelos valores
for (const num of nums) {
    console.log(num);
}