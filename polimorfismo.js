class Pessoa {
    constructor(nome){
        this.nome = nome;
    };

    apresentar = () => console.log (`Olá o meu nome é ${this.nome}.`);
}

class Aluno extends Pessoa{
    apresentar = () => console.log(`Olá meu nome é ${this.nome}`);
   }
   
class Professor extends Pessoa {
// a class aluno vai pegar de pessoa
        apresentar = () => console.log(`Olá, sou o seu Professor meu nome é ${this.nome} e estou ensinando`);
    }

const raul = new Professor("Raul")

const lais = new Aluno("Lais")

giovanna.apresentar();
raul.apresentar();
