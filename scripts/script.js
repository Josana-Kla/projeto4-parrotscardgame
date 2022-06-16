let numberOfCards = prompt("Com quantas cartas você quer jogar?");
let numberOfCardsChosen = []; 

let card = `
  <ul>
    <div class="each-card">
      <img src="./assets/front.png"/>
    </div>
  </ul>
`;

function askForNumberOfCards() {

  for(let i = 1; i <= numberOfCards; i++) {
    if(numberOfCards >= 4 && numberOfCards <= 14) {
      if(numberOfCards % 2 === 0) {
        document.querySelector(".cards").innerHTML += card;
        numberOfCards-1;
      }
    }
  }
}

askForCards()
