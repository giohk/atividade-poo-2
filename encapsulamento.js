class Aluno{
    #nota
    constructor(nome, idade, nota) {
        //O constructor é um método tradicional
        this.nome = nome;
        this.idade = idade;
        this.#nota = nota;
    }
    estudar = () => console.log(`${this.nome} tem ${this.idade} e tirou ${this.#nota} na prova de HTML.`);
    verNota = () => this.#nota
}
const gih = new Aluno("giovanna" , "17 anos" , "75 pontos")

console.log(gih.nome);
console.log(gih.verNota())
gih.estudar();