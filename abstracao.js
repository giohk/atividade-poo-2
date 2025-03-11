class Pessoa {
    constructor(nome){
        if (this.constructor === Pessoa ){
            throw new error ("Não pode criar")
        }

        this.nome = nome;
    };
}