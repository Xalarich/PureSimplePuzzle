document.addEventListener("DOMContentLoaded", () =>{
const cardArray = [
    {
        name:"fries",
        img:"Images/fries.jpeg",
    },
    {
        name:"axe",
        img:"Images/axe.jpg",
    },
    {
        name:"1h-sword",
        img:"Images/1h-sword.jpg",
    },
    {
        name:"dagger",
        img:"Images/dagger.jpg",
    },
    {
        name:"hammer",
        img:"Images/hammer.jpg",
    },
    {
        name:"legendary",
        img:"Images/legendary.png",
    },
    {
        name:"random",
        img:"images/random.jpg",
    },
    {
        name:"Scythe",
        img:"images/Scythe.png",
    },
    {
        name:"sulfaras",
        img:"Images/sulfaras.jpg",
    },
    {
        name:"sword,jpeg",
        img:"Images/sword.jpeg",
    },
    {
        name:"fries",
        img:"Images/fries.jpeg",
    },
    {
        name:"sulfaras",
        img:"Images/sulfaras.jpg",
    },
    {
        name:"axe",
        img:"Images/axe.jpg",
    },
    {
        name:"1h-sword",
        img:"Images/1h-sword.jpg",
    },
    {
        name:"dagger",
        img:"Images/dagger.jpg",
    },
    {
        name:"hammer",
        img:"Images/hammer.jpg",
    },
    {
        name:"legendary",
        img:"Images/legendary.png",
    },
    {
        name:"random",
        img:"images/random.jpg",
    },
    {
        name:"Scythe",
        img:"images/Scythe.png",
    },
    {
        name:"sword,jpeg",
        img:"Images/sword.jpeg",
    }
]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result")
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.style.height = "100px";
        card.style.width = "100px";
        card.setAttribute("src", "Images/blue.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        grid.appendChild(card)
    }
};
    function flipCard(){
        let cardId = this.getAttribute("data-id")
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute("src", cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    };
    function checkForMatch (){
        const cards = document.querySelectorAll("img") 
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]
     
        if (optionOneId == optionTwoId){
            alert("you have clicked the same image")
            cards[optionOneId].setAttribute("src", "Images/blue.png")
            cards[optionTwoId].setAttribute("src", "Images/blue.png")
        } else if (cardsChosen[0] === cardsChosen[1]){
            alert("you have found a match")
            cards[optionOneId].setAttribute("src", "Images/white.png")
            cards[optionTwoId].setAttribute("src", "Images/white.png")
            cards[optionOneId].removeEventListener("click", flipCard)
            cards[optionTwoId].removeEventListener("click", flipCard)
            cardsWon.push(cardsChosen)        
        } else {
            cards[optionOneId].setAttribute("src", "Images/blue.png")
            cards[optionTwoId].setAttribute("src", "Images/blue.png")
        }
        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2){
            result.textContent = "congratulations, champion"
        }
    }



    createBoard()


})