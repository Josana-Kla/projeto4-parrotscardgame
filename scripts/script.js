let numberOfCards = prompt("Com quantas cartas você quer jogar?");
let numberOfCardsChosen = []; 

let card = `
  <div class="each-card" onclick="showCardImage(this)">
    <img src="./assets/front.png"/>
  </div>
`;

function askForNumberOfCards() {

  for(let i = 1; i <= numberOfCards; i++) {
    if(numberOfCards >= 4 && numberOfCards <= 14 && numberOfCards % 2 === 0) {
      document.querySelector(".cards").innerHTML += card;
      numberOfCards-1;
    } /* else {
      numberOfCards = prompt("Escolha um número PAR entre 4 e 14");
      document.querySelector(".cards").innerHTML += card;
      numberOfCards+1;
    } */
  }
}

askForNumberOfCards()

function showCardImage(element) {
  let cardClicked = document.querySelector(".selectAndRotation");

  if(cardClicked !== null) {
    cardClicked.classList.remove("selectAndRotation");
  }

  element.classList.add("selectAndRotation");
}

showCardImage()
