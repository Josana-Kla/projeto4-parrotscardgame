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

  randomCards.push(`${card}`,`${card}`);

}

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

let click = []; 

function flipCardImage(element) {
  let cardClicked = document.querySelector(".selectAndRotation");

  if(cardClicked !== null) {
    cardClicked.classList.remove("selectAndRotation");
  }

  element.classList.add("selectAndRotation");
  click += element;
  removeFrontImage(element);
}

function removeFrontImage(element) {
  /* let card = document.querySelector("img"); */
  let cardFrontImageSelected = element.querySelector(".front-image");
  let cardBackImageSelected = element.querySelector(".hidden");

  if(cardFrontImageSelected !== null) {
    /* card.classList.remove("hidden"); */
    cardFrontImageSelected.classList.remove("hidden");
    cardBackImageSelected.classList.add("hidden");
  }

  /* card.classList.add("hidden"); */
  cardBackImageSelected.classList.remove("hidden");
  cardFrontImageSelected.classList.add("hidden");
 /*  showHiddenImage(element, "back-image"); */

}

/* function sameCards() {

  if(click.length == 2) {
    let card1 = click[0];
    card1.classList.add("selectAndRotation")
    let card2 = click[1];
  
    if(card1 === card2) {
      console.log("são iguais")
    } else {
      console.log("não são iguais")
    }
  } 
} */


/* function showHiddenImage(elementTwo, newImage) {
  let cardTwo = elementTwo.children[1];
  let cardBackImageSelected = document.querySelector(`.${newImage}.hidden`);
  
  if(cardBackImageSelected) {
    cardBackImageSelected.classList.add("hidden");
  }
  
  cardTwo.classList.remove("hidden");
} */



/* let arrayEven = [];

function keepCardsEven() {
  let cardSelected = document.querySelector(".selectAndRotation");

  if(cardSelected.classList.contains("selectAndRotation")) {
    arrayEven.push(cardSelected)
  }

} */



/* 
keepCardsEven()
console.log(arrayEven) */
