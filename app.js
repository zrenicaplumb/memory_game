document.addEventListener("DOMContentLoaded", () => {
     const cardArray = [
          {
               name: "blank",
               img: "img/blank.png",
          },
          {
               name: "cheeseburger",
               img: "img/cheeseburger.png",
          },
          {
               name: "fries",
               img: "img/fries.png",
          },
          {
               name: "hotdog",
               img: "img/hotdog.png",
          },
          {
               name: "ice-cream",
               img: "img/ice-cream.png",
          },
          {
               name: "milkshake",
               img: "img/milkshake.png",
          },
          {
               name: "pizza",
               img: "img/pizza.png",
          },
          {
               name: "white",
               img: "img/white.png",
          },
     ];

     cardsChosen = [];
     cardsChosenId = [];

     function createBoard() {
          const grid = document.querySelector(".grid");
          for (i = 0; i < cardArray.length; i++) {
               let card = document.createElement("img");
               card.setAttribute("src", "img/blank.png");
               card.setAttribute("data-id", i);
               card.addEventListener("click", flipCard);
               grid.appendChild(card);
          }
     }

     //flip the card
     function flipCard() {
          debugger;
          let cardId = this.getAttribute("data-id");
          cardsChosen.push(cardArray[cardId].name);
          cardsChosen.push(cardId);
          this.setAttribute("src");
     }

     // check for match

     createBoard();
     console.log(cardArray);
});
