export class Pessoa {
	nome: string;
	dataNascimento: string;
	cpf: number;
	
	constructor(nome: string, dataNascimento: string, cpf: number){
		this.nome = nome;
		this.dataNascimento = dataNascimento;
		this.cpf = cpf;
	}
}

class Produto {
    codigoBarras: number;
    preço: string;
    descrição: string;
    unidadeMedida: string;

    constructor(codigoBarras: number, preço: string, descrição: string, unidadeMedida: string){
        this.codigoBarras = codigoBarras;
        this.preço = preço;
        this.descrição = descrição;
        this.unidadeMedida = unidadeMedida;
        }
}

class Hortifruti extends Produto {


    constructor(codigoBarras: number, preço: string, descrição: string, unidadeMedida: string){
        super(codigoBarras, preço, descrição, unidadeMedida);
    }

}

class Açougue extends Produto {

    corte: string;

    constructor(codigoBarras: number, corte: string, preço: string, descrição: string, unidadeMedida: string){
        super(codigoBarras, preço, descrição, unidadeMedida)
        this.corte = corte;
}
}

class Funcionario extends Pessoa {

    salario: number;

    constructor(nome: string, salario: number, dataNascimento: string, cpf: number){

        super(nome,dataNascimento, cpf);
        this.salario = salario;
    }
}

class Cliente extends Pessoa {

    saldo: number;

    constructor(nome: string, saldo: number, dataNascimento: string, cpf: number ){
        super(nome,dataNascimento, cpf);
        this.saldo = saldo;
    }
}


