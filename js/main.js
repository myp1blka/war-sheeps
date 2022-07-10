
const elStartGameButton         = document.querySelector('input[name="bStartGame"]'); // стартова кнопка
const elFireButton              = document.querySelector('input[name="bFire"]'); // байрактарна кнопка

const elNumberOfSheepUnits      = document.querySelector('input[name="number-of-sheep-units"]');

const elPlayer1field            = document.querySelector('.player1field');
const elPlayer2field            = document.querySelector('.player2field');
const elGameLog                 = document.querySelector('.gameLog');

let numberOfSheepUnits;

let player1sheeps = [];
let player2sheeps = [];

let player1HTML = ''; 
let player2HTML = ''; 
let logHTML     = ''; 

const unit1etalon = { 
    size: 4 ,
    health: 200 ,
    force:  100 ,
    power: 1 ,
    scin: 0 
};
const unit2etalon = {  
    size: 3 ,
    health: 120 ,
    force:  60 ,
    power:  2 ,
    scin: 0 
};
const unit3etalon = {  
    size: 2 ,
    health: 80 ,
    force:  40 ,
    power:  3 ,
    scin: 0 
};
const unit4etalon = {  
    size: 1 ,
    health: 30 ,
    force:  15 ,
    power:  4 ,
    scin: 0 
};

// ================================================================================================
// Case of size units
const SelectUnitSize = (pSize) => {
    switch (pSize){
        case 1:
            let unit1 = Object.assign({}, unit1etalon);
            return unit1;            
        case 2:
            let unit2 = Object.assign({}, unit2etalon);
            return unit2;      
        case 3:
            let unit3 = Object.assign({}, unit3etalon);
            return unit3;      
        case 4:
            let unit4 = Object.assign({}, unit4etalon);
            return unit4;      

    }
}

// ================================================================================================
// Generate Sheeps
const GenerateSheeps = (e) => {
    for (let i = 0; i < (numberOfSheepUnits); i++) {
        player1sheeps.push(SelectUnitSize(randValue(1, 4, 1)));
        player1sheeps[i].scin = randValue(0, 4, 1);
        console.log(player1sheeps[i].scin);
    }
    for (let i = 0; i < (numberOfSheepUnits); i++) {
        player2sheeps.push(SelectUnitSize(randValue(1, 4, 1)));
        player2sheeps[i].scin = randValue(0, 4, 1);
        console.log(player1sheeps[i].scin);        
    }
}


// ================================================================================================
// Draw Step Game
const DrawStepGame = (e) => {
    player1HTML = ''; 
    player2HTML = ''; 
    
    elPlayer1field.innerHTML = '';
    elPlayer2field.innerHTML = '';
    elGameLog.innerHTML = '';
    // let y = numberOfSheepUnits * 2;

    for (let i = 0; i < (numberOfSheepUnits); i++) {
        let imageSheeps1 = `<img src="img/sheep${player1sheeps[i].scin}.png" width="32"></img>`;
        let imageSheeps2 = `<img src="img/sheep${player2sheeps[i].scin}.png" width="32"></img>`;


        // Player 1
        player1HTML += `
        <div class="sheep1" id="${i+1}">
        Підрозділ номер ${i+1}<br>
        ${imageSheeps1.repeat(player1sheeps[i].size)}<br>
        Health: ${player1sheeps[i].health } 
        Force:  ${player1sheeps[i].force } 
        Power:  ${player1sheeps[i].power }
        </div>`;

        // Player 2
        player2HTML += `
        <div class="sheep2" id="${i+1}">
        Підрозділ номер ${i+1}<br>
        ${imageSheeps2.repeat(player2sheeps[i].size)}<br>
        Health: ${player2sheeps[i].health } 
        Force:  ${player2sheeps[i].force } 
        Power:  ${player2sheeps[i].power }
        </div>`;

    }

    elPlayer1field.insertAdjacentHTML('beforeend', player1HTML);
    elPlayer2field.insertAdjacentHTML('beforeend', player2HTML);
    elGameLog.     insertAdjacentHTML('beforeend', logHTML);
}


// ================================================================================================
// FIRE function
const FireFunction = (e) => {

logHTML += ` Підрозділ 1(${player1sheeps[0].health}) <br>`;
player1sheeps[0].health -= 50;
logHTML += ` Підрозділ 1 втрачає 50 очок = ${player1sheeps[0].health}  <br>`;

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

    GenerateSheeps();

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




	//   document.onclick = function(e) {
	//     console.log(e.target.id);
	//   };
