let numberOfCards = prompt("Com quantas cartas você quer jogar?");
let parrotNames = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];
/* 
function createCard() {}
for(let i = 0; i < parrotNames; i++) {

} */

let card = `
  <div class="each-card" onclick="flipCardImage(this)">
    <img class="front-image"  src="./assets/front.png"/>
    <img class="back-image hidden" src="./assets/${parrotNames[3]}parrot.gif"/>
  </div>
`;


function isValidAndIsEven(numberOfCards) {
  if(Number(numberOfCards) >= 4 && Number(numberOfCards) <= 14 && Number(numberOfCards) % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
isValidAndIsEven(numberOfCards);


function correctNumberOfCards() {
  while(numberOfCards === null || !isValidAndIsEven(numberOfCards)) {
    numberOfCards = prompt(("Com quantas cartas você quer jogar? - Escolha um número PAR entre 4 e 14"));
  }

  putNumberOfCard();
}       
correctNumberOfCards()


function putNumberOfCard(numberOfCards) {
  for(let i = 0; i < numberOfCards; i++) {
    document.querySelector(".cards").innerHTML += card;
  }
}
putNumberOfCard(numberOfCards)


function flipCardImage(element) {
  let cardClicked = document.querySelector(".selectAndRotation");

  if(cardClicked !== null) {
    cardClicked.classList.remove("selectAndRotation");
  }

  element.classList.add("selectAndRotation");
  
  removeFrontImage(element, "front-image");
}


function removeFrontImage(element, currentImage) {
  let card = element.children[0];
  let cardFrontImageSelected = document.querySelector(`.${currentImage}.hidden`);

  if(cardFrontImageSelected !== null) {
    cardFrontImageSelected.classList.remove("hidden");
  }

  card.classList.add("hidden");
  showHiddenImage(element, "back-image");

}

function showHiddenImage(element, newImage) {
  let cardTwo = element.children[1];
  let cardBackImageSelected = document.querySelector(`.${newImage}.hidden`);

  if(cardBackImageSelected) {
    cardBackImageSelected.classList.add("hidden");
  }

  cardTwo.classList.remove("hidden");
}


