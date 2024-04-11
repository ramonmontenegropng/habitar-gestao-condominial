let apList = [];
class Apartamento {
    constructor(idCondominio, nomeCondominio, numeroApartamento, nomeInquilino) {
        this._idCondominio = idCondominio;
        this._nomeCondominio = nomeCondominio;
        this._numeroApartamento = numeroApartamento;
        this._nomeInquilino = nomeInquilino;
    }
    get idCondominio() {
        return this.idCondominio;
    }
    set idCondominio(value) {
        this._idCondominio = value;
    }

    get nomeCondominio() {
        return this.nomeCondominio;
    }
    set nomeCondominio(value) {
        this._nomeCondominio = value;
    }

    get numeroApartamento() {
        return this.numeroApartamento;
    }
    set numeroApartamento(value) {
        this._numeroApartamento = value;
    }

    get nomeInquilino() {
        return this.nomeInquilino;
    }
    set nomeInquilino(value) {
        this._nomeInquilino = value;
    }
}

function cadastrarApartamento() {
    let novoId = apList.length + 1;
    let nomeCondominio = document.querySelector("#nome_condominio").value;
    let numeroApartamento = document.querySelector("#numero_apartamento").value;
    let nomeInquilino = document.querySelector("#nome_inquilino").value;
    let novoAp = new Apartamento(novoId, nomeCondominio, numeroApartamento, nomeInquilino);
    apList.push(novoAp);
}

function listarApartamentos() {
    const container = document.getElementById("apartamentos-container");
    if (container) {
        container.remove();
    }


    if (apList.length === 0) {
        let p = document.createElement("p");
        let text = document.createTextNode("\nNenhum apartamento cadastrado");
        p.appendChild(text);
        p.id = "apartamentos-container";
        document.body.appendChild(p)
        

    } else {
        let lista = document.createElement("ul");
        lista.id = "apartamentos-container";
        for (let i = 0; i < apList.length; i++) {
            let item = document.createElement("li");
            let texto = document.createTextNode(`ID (${apList[i]._idCondominio}) - Nome: ${apList[i]._nomeCondominio} - Número do Ap: ${apList[i]._numeroApartamento} - Inquilino: ${apList[i]._nomeInquilino}`);
            item.appendChild(texto);
            lista.appendChild(item);
        }
        document.body.appendChild(lista)
    }
}
