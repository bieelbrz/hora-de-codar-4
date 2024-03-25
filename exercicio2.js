
// 2. Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. 

// Verifique se o planeta que o usuário informou está na array e informe ao usuário.

var planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];

var planetaUsuario = prompt("Digite o nome de um planeta:");

if (planetas.includes(planetaUsuario)) {
    alert("O planeta " + planetaUsuario + " está na lista!");
} else {
    alert("O planeta " + planetaUsuario + " não está na lista.");
}