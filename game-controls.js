var cards = [];
var shows_cards = 0;

function main(i) {

    if (shows_cards !== 1) {
        shows_cards ++;
        showCards(i);
    } else {
        if (shows_cards == 2) {
            alert('Error')
        } else {
            shows_cards ++;
            showCards(i)
            hiddenCards(i);
        };
    };

    if (shows_cards == 0) {
        shows_cards ++;
        showCards(i);
    }
};

function showCards(i) {
    cards.push(i);
    document.querySelector(`.showID${i}`).classList.remove("hidden-card");
};

function hiddenCards(i) {
    shows_cards = 2;
    setTimeout(() => {
        cards.forEach(element => {
            document.querySelector(`.showID${element}`).classList.add("hidden-card");
        });
        shows_cards = 0;
    }, 1000);
};