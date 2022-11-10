function createGame(playerA, hour, playerB) {    
    return `
        <li>
            <img src="./assets/icon=${playerA.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}.svg" alt="Logo ${playerA}">
            <strong>${hour}</strong>
            <img src="./assets/icon=${playerB.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")}.svg" alt=" Logo ${playerB}">
        </li>
    `
}

let delay = -0.3;
function createCard(date, day, games) {
    delay = delay + 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML = 
        createCard('24/11', 'quinta-feira', createGame('Brasil', "16:00", 'Sérvia') + createGame('Brasil', "16:00", 'Sérvia')) +
        createCard('28/11', 'segunda-feira', createGame('Brasil', '13:00', 'Suíça')) +
        createCard('02/12', 'sexta-feira', createGame('Camarões', '16:00', 'Brasil')) +
        createCard('25/07', 'segunda-feira', createGame('Brasil', '10:00','Alemanha'))