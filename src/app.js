import "bootstrap";
import "./style.css";

document.getElementById('carta').addEventListener('onload',carta)

function carta(){
  
  let simbolo1 = Math.floor[Math.random() * 6 ] + 1
  let numeros = Math.floor[Math.random() * 6 ] + 1
  let simbolo2 = Math.floor[Math.random() * 6 ] + 1

  document.getElementById('simbolo1').innerText = simbolo1
  document.getElementById('numeros').innerHTML = numeros
  document.getElementById('simbolo2').innerText = simbolo2
}

