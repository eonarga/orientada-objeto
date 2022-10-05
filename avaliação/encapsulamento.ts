export class Cliente {

    private _saldo: number

    constructor() {
        this._saldo = 0
    }

    consultarSaldo(): number {
        return this._saldo
    }

    pagar (valor:number): boolean {
        if (valor >= 0) {
            this._saldo += valor
            return true
        }

        return false
    }
};

export class Funcionario {

    private _salario: number

    constructor() {
        this._salario = 0
    }

    consultarSalario(): number {
        return this._salario
    }
};

