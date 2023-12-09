const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 't'];
const suits = ['clubs', 'spades', 'diamonds', 'hearts'];

const cards = [];

for (const value of values) {
    for (const suit of suits) {
        cards.push(createCard(value, suit));
    }
}

function createCard(value, suit) {
    const isPictureCard = ['jack', 'queen', 'king', 't'].includes(value);
    const cardValue = isPictureCard ? getPictureCardValue(value) : value;
    const cardInfo = `<div class="card__info">${cardValue}<img src="images/${suit}.svg" alt="${suit}"></div>`;

    if (isPictureCard) {
        const centerImg = isPictureCard && value.toLowerCase() !== 't' ? value.toLowerCase() : suit;
        return `<div class="card card--person">${cardInfo}<img class="person" src="images/${centerImg}.svg" alt="${centerImg}.svg">${cardInfo}</div>`;
    } else {
        return `<div class="card">${cardInfo}${cardInfo}</div>`;
    }
}

function getPictureCardValue(value) {
    return value === 'jack' ? 'J'
        : value === 'queen' ? 'Q'
            : value === 'king' ? 'K'
                : 'A';
}

document.write(`<div class="wrapper">${cards.join('')}</div>`);
