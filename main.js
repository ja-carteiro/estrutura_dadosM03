// Passo 1: Cria a lista com 5 números
let lista = [1, 2, 3, 4, 5];
console.log("Lista inicial:", lista);

// Passo 2: Remove da lista e insere em uma pilha
let pilha = [];
while (lista.length > 0) {
    pilha.push(lista.shift()); // Remove da célula inicial da lista e adiciona à pilha
}
console.log("Pilha após remover da lista:", pilha);

// Passo 3: Remove da pilha e insere na fila
let fila = [];
while (pilha.length > 0) {
    fila.push(pilha.pop()); // Remove do topo da pilha e adiciona na fila
}
console.log("Fila após remover da pilha:", fila);

// Passo 4: Insere os números [6, 7, 8, 9, 10] na lista
lista = [6, 7, 8, 9, 10];
console.log("Nova lista:", lista);

// Passo 5: Repete os passos 2 e 3
while (lista.length > 0) {
    pilha.push(lista.shift()); // Remove da lista e insere na pilha
}
console.log("Pilha com novos números:", pilha);

while (pilha.length > 0) {
    fila.push(pilha.pop()); // Remove da pilha e insere na fila
}
console.log("Fila após adicionar novos números:", fila);

// Passo 6: Exibe todos os números que foram inseridos na fila
console.log("Números finais na fila:", fila);