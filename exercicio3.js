// Vamos criar uma lista de compras. 

// Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.

// Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". 

// Peça novamente para o usuário digitar o nome de uma fruta para ser removida. 

// Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". 

// Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".

var listaDeFrutas = ["manga", "banana", "laranja", "melancia", "maçã", "limão", "mamão", "pera"];

alert("Lista de frutas disponíveis: " + listaDeFrutas.join(", "));

function removerFruta() {
    var frutaRemover = prompt("Digite o nome de uma fruta para ser removida:");

    var indice = listaDeFrutas.indexOf(frutaRemover);
    if (indice !== -1) {
        listaDeFrutas.splice(indice, 1);
        alert("Fruta foi retirada da lista.");
    } else {
        alert("Fruta indisponível no nosso mercado.");
    }

    if (listaDeFrutas.length === 0) {
        alert("Lista de compras finalizada.");
    } else {
        removerFruta();
    }
}

removerFruta();
