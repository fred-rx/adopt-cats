const animalsToAdopt = [
    {
        name: "Lucky",
        picture: "https://placekitten.com/200/287"
    },
    {
        name: "Symba",
        picture: "https://placekitten.com/200/139"
    },
    {
        name: "Léo",
        picture: "https://placekitten.com/200/90"
    },
    {
        name: "Milo",
        picture: "https://placekitten.com/200/194"
    },
    {
        name: "Charly",
        picture: "https://placekitten.com/200/179"
    }
];

const cards = document.querySelector('.cards')
animalsToAdopt.forEach(animal => {
    const {name, picture} = animal
    cards.appendChild(createCard(name, picture))
})

function createCard(title, imageUrl) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.appendChild(createCardHeader(imageUrl))
    card.appendChild(createCardBody(title))
    return card
}

function createCardHeader(imageUrl) {

    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card-header')

    const cardImg = document.createElement('div')
    cardImg.classList.add('card-img')
    cardImg.style.background = `url(${imageUrl})`
    cardHeader.appendChild(cardImg)

    return cardHeader

}

function createCardBody(title) {

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const cardTitle = document.createElement('h2')
    cardTitle.classList.add('card-title')
    cardTitle.innerHTML = `${title}`
    cardBody.appendChild(cardTitle)

    const cardButton = document.createElement('button')
    cardButton.classList.add('card-button')
    cardButton.textContent = 'Adopt Now'
    cardBody.appendChild(cardButton)

    return cardBody

}