let numberOfCards = prompt("Com quantas cartas você quer jogar? (Escolha de 4 a 14 cartas)");
let numberOfCardsChosen = []; 

while(numberOfCards >= 4 && numberOfCards <= 14) {
  if(numberOfCards % 2 === 0) {
    alert(numberOfCards);
  }
}

document.querySelector(".cards").innerHTML = `
  <ul>
    <div class="each-card">
      <img src="./assets/front.png"/>
    </div>
  </ul>
`;