
const cards = document.querySelectorAll('.memory-card');

const chosenCards =[]


function flipCard(event) {

  console.log(event.target);

  if (event.target.className === "back-face"){

      const frontSide = event.target.parentElement.querySelector(".front-face")
      event.target.style.display = "none";
 frontSide.style.display = "inline"
chosenCards.push(frontSide)
console.log(chosenCards);

  }
  }



cards.forEach(card => card.addEventListener('click', (event)=> flipCard(event)));

//function checkForMatch() 
