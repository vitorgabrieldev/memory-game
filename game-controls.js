const showCard = (i) => {
    showCard ++;
    cards.push(i);
    let card = document.querySelector(`.showID${i}`);

    if(showCard == 2) {
        disableCards();
    }; 
};

const disableCards = () => {
    cards.forEach(element => {
        
    });
};

let cards = [];
let shows_cards = 0;