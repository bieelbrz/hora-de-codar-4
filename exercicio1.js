//1. Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles. 

var estudantes = [];

function cadastrarEstudante() {
    var nome = prompt("Digite o nome do estudante (ou 'PARE' para encerrar):");
    if (nome.toUpperCase() === "PARE") {
        return false;
    }

    estudantes.push(nome);
    return true;
}
while (cadastrarEstudante()) {}

alert ("Quantidade de estudantes cadastrados: " + estudantes.length);

var listaEstudantes = "Lista de estudantes:\n";
for (var i = 0; i < estudantes.lenght; i++) {
    listaEstudantes += estudantes[i] + "\n";
}

alert(listaEstudantes);