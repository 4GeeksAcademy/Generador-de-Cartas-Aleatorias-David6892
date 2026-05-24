import "bootstrap";
import "./style.css";

window.onload = function () {
  carta();
};

const simbolos = ["♦", "♥", "♠", "♣"]
const numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J",]

function carta(){
  
  let simbolo = simbolos[Math.floor(Math.random() * simbolos.length)];
  let numero = numeros[Math.floor(Math.random() * numeros.length)];

  const simbolo1 = document.getElementById('simbolo1');
  const valores = document.getElementById('numeros');
  const simbolo2 = document.getElementById('simbolo2');

  simbolo1.innerText = simbolo;
  valores.innerText = numero;
  simbolo2.innerText = simbolo;

  
  let colorSimbolo = Math.random() < 0.5 ? "red" : "black";
  let colorNumero = Math.random() < 0.5 ? "red" : "black";

  simbolo1.style.color = colorSimbolo;
  simbolo2.style.color = colorSimbolo;
  valores.style.color = colorNumero;
}

