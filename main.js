function createGame(playerA, playerB, hour) {    
    return `
        <li>
            <img src="./assets/icon=${playerA.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(" ").join("-")}.svg" alt="Logo ${playerA}" title="${playerA}">
            <strong>${hour}</strong>
            <img src="./assets/icon=${playerB.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").split(" ").join("-")}.svg" alt="Logo ${playerB}" title="${playerB}">
        </li>
    `
}

let delay = -0.3;
function createCard(date, day, games) {
    delay = delay + 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2 title="${date}">${date} <span title="${day}">${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

const header = document.querySelector('header')
const body = document.querySelector('body')
header.addEventListener('click', changeColorClass)

function changeColorClass() {
    let bodyClass = body.getAttribute('class')
    if (bodyClass == null) {
        body.setAttribute('class', 'blue')
    }else if (bodyClass == 'blue') {
        body.removeAttribute('class')
        body.setAttribute('class', 'green')
    }else if (bodyClass == 'green') {
        body.removeAttribute('class')
    }
}

document.querySelector('#group-stage').innerHTML = 
        createCard(
            '20/11', 'domingo', 
            createGame('Catar', 'Equador', '13:00')
        ) +
        createCard(
            '21/11', 'segunda-feira', 
            createGame('Inglaterra', 'Irã', '10:00') + 
            createGame('Senegal', 'Holanda', '13:00') + 
            createGame('Estados Unidos', 'País de Gales', '16:00')
        ) +
        createCard(
            '22/11', 'terça-feira', 
            createGame('Argentina', 'Arábia Saudita', '07:00') + 
            createGame('Dinamarca', 'Tunísia', '10:00') + 
            createGame('México', 'Polônia', '13:00') + 
            createGame('França', 'Austrália', '16:00')
        ) +
        createCard(
            '23/11', 'quarta-feira', 
            createGame('Marrocos','Croácia', '07:00') + 
            createGame('Alemanha', 'Japão', '10:00') + 
            createGame('Espanha', 'Costa Rica', '13:00') + 
            createGame('Bélgica', 'Canadá', '16:00')
        ) +
        createCard(
            '24/11', 'quinta-feira', 
            createGame('Suíça', 'Camarões', '07:00') +
            createGame('Uruguai', 'Coreia do Sul', '10:00') +
            createGame('Portugal', 'Gana', '13:00') +
            createGame('Brasil', 'Sérvia', '16:00')
        ) +
        createCard(
            '25/11', 'sexta-feira',
            createGame('País de Gales', 'Irã', '07:00') +
            createGame('Catar', 'Senegal', '10:00') +
            createGame('Holanda', 'Equador', '13:00') +
            createGame('Inglaterra', 'Estados Unidos', '16:00')
        ) +
        createCard(
            '26/11', 'sábado',
            createGame('Tunísia', 'Austrália', '07:00') +
            createGame('Polônia', 'Arábia Saudita', '10:00') +
            createGame('França', 'Dinamarca', '13:00') +
            createGame('Argentina', 'México', '16:00')
        ) +
        createCard(
            '27/11', 'domingo',
            createGame('Japão', 'Costa Rica', '07:00') +
            createGame('Bélgica', 'Marrocos', '10:00') +
            createGame('Croácia', 'Canadá', '13:00') +
            createGame('Espanha', 'Alemanha', '16:00')
        ) +
        createCard(
            '28/11', 'segunda-feira',
            createGame('Camarões', 'Sérvia', '07:00') +
            createGame('Coreia do Sul', 'Gana', '10:00') +
            createGame('Brasil', 'Suíça', '13:00') +
            createGame('Portugal', 'Uruguai', '16:00')
        ) +
        createCard(
            '29/11', 'terça-feira',
            createGame('Equador', 'Senegal', '12:00') +
            createGame('Holanda', 'Catar', '12:00') +
            createGame('Irã', 'Estados Unidos', '16:00') +
            createGame('País de Gales', 'Inglaterra', '16:00')
        ) +
        createCard(
            '30/11', 'quarta-feira',
            createGame('Tunísia', 'França', '12:00') +
            createGame('Austrália', 'Dinamarca', '12:00') +
            createGame('Polônia', 'Argentina', '16:00') +
            createGame('Arábia Saudita', 'México', '16:00')
        ) +
        createCard(
            '01/12', 'quinta-feira',
            createGame('Croácia', 'Bélgica', '12:00') +
            createGame('Canadá', 'Marrocos', '12:00') +
            createGame('Japão', 'Espanha', '16:00') +
            createGame('Costa Rica', 'Alemanha', '16:00')
        ) +
        createCard(
            '02/12', 'sexta-feira',
            createGame('Coreia do Sul', 'Portugal', '12:00') +
            createGame('Gana', 'Uruguai', '12:00') +
            createGame('Sérvia', 'Suíça', '16:00') +
            createGame('Camarões', 'Brasil', '16:00')
        )

document.querySelector('#round-of-16').innerHTML =
        createCard(
            '03/12', 'sábado',
            createGame('Holanda', 'Estados Unidos', '12:00') +
            createGame('Argentina', 'Austrália', '16:00')
        ) +
        createCard(
            '04/12', 'domingo',
            createGame('França', 'Polônia', '12:00') +
            createGame('Inglaterra', 'Senegal', '16:00')
        ) +
        createCard(
            '05/12', 'segunda-feira',
            createGame('Japão', 'Croácia', '12:00') +
            createGame('Brasil', 'Coreia do Sul', '16:00')
        ) +
        createCard(
            '06/12', 'terça-feira',
            createGame('Marrocos', 'Espanha', '12:00') +
            createGame('Portugal', 'Suíça', '16:00')
        )

document.querySelector('#quarter-finals').innerHTML =    
        createCard(
            '09/12', 'sexta-feira',
            createGame('', '', '12:00') +
            createGame('Holanda', 'Argentina', '16:00')
        ) +
        createCard(
            '10/12', 'sábado',
            createGame('', '', '12:00') +
            createGame('Inglaterra', 'França', '16:00')
        )
/*
document.querySelector('#semi-finals').innerHTML =
        createCard(
            '13/12', 'terça-feira',
            createGame('', '', '16:00')
        ) +
        createCard(
            '14/12', 'quarta-feira',
            createGame('', '', '16:00')
        )
document.querySelector('#third-place-play-off').innerHTML =
        createCard(
            '17/12', 'sábado',
            createGame('', '', '12:00')
        )

document.querySelector('#final').innerHTML =
        createCard(
            '18/12', 'domingo',
            createGame('', '', '12:00')
        )
*/
const searchInput = document.getElementById('search-input')
const allCards = document.querySelectorAll('.card')
const searchedGame = searchInput.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\//g,'').replace("-", '').split(" ").join("")

searchInput.oninput = searchGame

function searchGame() {
    const searchedGame = searchInput.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\//g,'').replace("-", '').split(" ").join("")

    if (searchedGame) {
        for(let card of allCards) {
            let cardItems = card.querySelectorAll('h2, span, img')
            let isCardHidden = true
    
            for(let item of cardItems) {
                let itemTitleSimplified = item.getAttribute('title').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\//g,'').replace("-", '').split(" ").join("")
    
                if (itemTitleSimplified.includes(searchedGame)) {
                    isCardHidden = false
                }
            }

            if (isCardHidden == true) {
                card.setAttribute('hidden', '')
            }
        }

    } else {
        for(let card of allCards) {
            card.removeAttribute('hidden')
        }
    }
}