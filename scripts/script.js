let numberOfCards = prompt("Com quantas cartas você quer jogar?");
let parrotNames =["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];
let randomCards = []; 

let card = "";
for(let i=0; i < (numberOfCards/2); i++) {
  parrotNames.sort(shuffle);
  card += `
    <div class="each-card" onclick="flipCardImage(this)">
      <img class="front-image img"  src="./assets/front.png"/>
      <img class="back-image img hidden" src="./assets/${parrotNames[i]}parrot.gif"/>
    </div>
  `;
  randomCards.push(`${card}`,`${card}`)

}
console.log(card)

function shuffle() { 
	return Math.random() - 0.5; 
}

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
  let putCard = document.querySelector(".cards");
  for(let i = 0; i < numberOfCards; i++) {
    putCard.innerHTML = randomCards[i] + randomCards[i];
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


function showHiddenImage(elementTwo, newImage) {
  let cardTwo = elementTwo.children[1];
  let cardBackImageSelected = document.querySelector(`.${newImage}.hidden`);
  
  if(cardBackImageSelected) {
    cardBackImageSelected.classList.add("hidden");
  }
  
  cardTwo.classList.remove("hidden");
}

/* function showHiddenImage(element, frontImage, backImage) {
  let cardBackImageSelected = element.querySelector(`.${backImage}.hidden`);
  let cardFrontImageSelected = document.querySelector(`.${frontImage}`);

  if(cardBackImageSelected !== null) {
    cardBackImageSelected.classList.remove("hidden");
    cardFrontImageSelected.classList.add("hidden");
  }
  element.classList.remove("hidden");
} */

/*function removeFrontImage(element, currentImage) {
  let card = element.children[0];
  let cardFrontImageSelected = document.querySelector(`.${currentImage}.hidden`);

  if(cardFrontImageSelected !== null) {
    cardFrontImageSelected.classList.remove("hidden");
  }

  card.classList.add("hidden"); */
 /*  showHiddenImage(element, "back-image"); */


/* 
function removeFrontImage(element, image) {
  let cardFrontImageSelected = element.querySelector(`.${image}.hidden`);

  if(cardBackImageSelected.classList.contains("hidden")) {
    cardBackImageSelected.classList.remove("hidden"); 
    cardFrontImageSelected.classList.add("hidden");
  }

} */


/* function showHiddenImage(element, newImage) {
  let cardTwo = element.children[1];
  let cardBackImageSelected = document.querySelector(`.${newImage}.hidden`);
  
  if(cardBackImageSelected) {
    cardBackImageSelected.classList.add("hidden");
  }
  
  cardTwo.classList.remove("hidden");
} */
/*
let arrayEven = [];
function keepEven() {
  if(arrayEven.length == 2) {
    let card1 = arrayEven[0];
    let card2 = arrayEven[1];

    if(card1 == card2) {

    }
  }
} */
