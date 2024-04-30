function Produto(nome) {
  this.nome = nome
}

const p1 = new Produto('caneta')
const p2 = new Produto('caderno')

console.log(p1.nome, p2.nome)
console.log(typeof Produto)
console.log(typeof p2)
