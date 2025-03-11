// criando a classe aluno
class Aluno { //modelo para criar alunos/pessoas
    constructor(nome, idade) {
        // o construtor é um método tradicional para criar propriedades
        this.nome = nome; // significam "este objeto"
        this.idade = idade;
    }
    estudar = () => console.log (`${this.nome} está estudando.`)
    anos = () => console.log (`A ${this.nome} tem ${this.idade} anos. `)
    feliz = () => console.log (`A ${this.nome} tem ${this.idade} anos e está feliz.`)
}

//podemos criar vários alunos sem repetir o código

const lais = new Aluno("lais" , 17)
const Zani = new Aluno("Zani" , 17)
const dani = new Aluno("dani" , 16)


console.log(lais.nome.idade)
lais.estudar();
Zani.anos();
dani.feliz();