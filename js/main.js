
const elStartGameButton = document.querySelector('input[name="bStartGame"]'); // стартова кнопка
const elFireButton = document.querySelector('input[name="bFire"]'); // байрактарна кнопка

const elNumberOfSheepUnits = document.querySelector('input[name="number-of-sheep-units"]');

const elPlayer1field = document.querySelector('.player1field');
const elPlayer2field = document.querySelector('.player2field');
const elGameLog = document.querySelector('.gameLog');

let numberOfSheepUnits;

let player1sheeps = [];
let player2sheeps = [];

let player1HTML = ''; 
let player2HTML = ''; 
let logHTML = ''; 





// ================================================================================================
// Generate Sheeps Player 1
const GenerateSheepsPlayer1 = (e) => {
    for (let i = 0; i < (numberOfSheepUnits); i++) {

        let unitSize    = randValue(1,    4, 1);
        let unitHealth  = randValue(10, 100, 1);
        let unitForce   = randValue(10, 100, 1);
        let unitPower   = randValue(10, 100, 1);
            

        let unit = {  
            size:   unitSize,
            health: unitHealth ,
            force:  unitForce ,
            power:  unitPower 
            };
        player1sheeps.push(unit);
    }
    
}


// ================================================================================================
// Generate Sheeps Player 2
const GenerateSheepsPlayer2 = (e) => {
    for (let i = 0; i < (numberOfSheepUnits); i++) {

        let unitSize    = randValue(1,    4, 1);
        let unitHealth  = randValue(10, 100, 1);
        let unitForce   = randValue(10, 100, 1);
        let unitPower   = randValue(10, 100, 1);
            

        let unit = {  
            size:   unitSize,
            health: unitHealth ,
            force:  unitForce ,
            power:  unitPower 
            };
        player2sheeps.push(unit);
    }

}

const DrawStepGame = (e) => {
    player1HTML = ''; 
    player2HTML = ''; 
    elPlayer1field.innerHTML = '';
    elPlayer2field.innerHTML = '';

    for (let i = 0; i < (numberOfSheepUnits); i++) {
        let imageSheeps = `<img src="img/sheep${ randValue(0, 4, 1) }.png" width="32"></img>`;

        // Player 1
        player1HTML += `
        <div class="sheep1">
        Підрозділ номер ${i+1}<br>
        ${imageSheeps.repeat(player1sheeps[i].size)}<br>
        Health: ${player1sheeps[i].health } 
        Force:  ${player1sheeps[i].force } 
        Power:  ${player1sheeps[i].power }
        </div>`;

        // Player 2
        player2HTML += `
        <div class="sheep1">
        Підрозділ номер ${i+1}<br>
        ${imageSheeps.repeat(player2sheeps[i].size)}<br>
        Health: ${player2sheeps[i].health } 
        Force:  ${player2sheeps[i].force } 
        Power:  ${player2sheeps[i].power }
        </div>`;

    }

    elPlayer1field.insertAdjacentHTML('beforeend', player1HTML);
    elPlayer2field.insertAdjacentHTML('beforeend', player2HTML);
    elGameLog.     insertAdjacentHTML('beforeend', logHTML);
}

const FireFunction = (e) => {

logHTML += ` Підрозділ 1(${player1sheeps[0].health}) <br>`;
player1sheeps[0].health -= 50;
logHTML += ` Підрозділ 1 втрачає 50 очок = ${player1sheeps[0].health} `;

DrawStepGame();


}











// ================================================================================================
// Start Game
const StartGameFunction = (e) => {

    player1HTML = ''; 
    player2HTML = ''; 
    logHTML = ''; 

    elPlayer1field.innerHTML = '';
    elPlayer2field.innerHTML = '';
    elGameLog.innerHTML = '';

    numberOfSheepUnits =  parseInt( elNumberOfSheepUnits.value );

    player1sheeps.length = [];
    player2sheeps.length = [];

    GenerateSheepsPlayer1();
    GenerateSheepsPlayer2();

    DrawStepGame();

}

//   --------------------------------------------------------------////////////////////-----------------------------------------
// Рандомна функція (від, до, кратна чому)
const randValue = (min,max,num) => {
    return Math.floor(Math.floor(Math.random()*(max-min+1)+min) / num) * num;
}

//   --------------------------------------------------------------////////////////////-----------------------------------------
// Клік на кнопку
elStartGameButton.addEventListener('click', () => {StartGameFunction()});
elFireButton.addEventListener('click', () => {FireFunction()});
