
const elStartGameButton = document.querySelector('input[name="bStartGame"]'); // стартова кнопка
const elNumberOfSheepUnits = document.querySelector('input[name="number-of-sheep-units"]');// Кількість монстрів

const elPlayer1field = document.querySelector('.player1field');
const elPlayer2field = document.querySelector('.player2field');
const elGameLog = document.querySelector('.gameLog');

let player1sheeps = [];
let player2sheeps = [];


const StartGameFunction = (e) => {

        let player1HTML = ''; 
        let player2HTML = ''; 
        let logHTML = ''; 

        elPlayer1field.innerHTML = '';
        elPlayer1field.insertAdjacentHTML('beforeend', player1HTML);
        elPlayer2field.innerHTML = '';
        elPlayer2field.insertAdjacentHTML('beforeend', player2HTML);
        elGameLog.innerHTML = '';
        elGameLog.insertAdjacentHTML('beforeend', logHTML);

        let numberOfSheepUnits =  parseInt( elNumberOfSheepUnits.value );



        player1sheeps.length = [];
        player2sheeps.length = [];




        for (let i = 0; i < (numberOfSheepUnits); i++) {

            let unitSize = randValue(1, 5, 1);
            let unitHealth = randValue(10, 100, 1);
            let unitForce = randValue(10, 100, 1);
            let unitPower = randValue(10, 100, 1);
              

            let unit = {     // объект
                size: unitSize,
                health: unitHealth ,
                force: unitForce ,
                power: unitPower 
              };

            player1sheeps.push(unit);
            //console.log(player1sheeps[i])
        }

            for (let i = 0; i < (numberOfSheepUnits); i++) {
                let imageSheeps = `<img src="img/sheep${ randValue(0, 4, 1) }.png" width="32"></img>`;
                player1HTML += `     <div class="sheep1">
                Підрозділ номер ${i+1}<br>
                ${imageSheeps.repeat(player1sheeps[i].size)}
                <br>
                Health: ${player1sheeps[i].health } 
                Force:  ${player1sheeps[i].force } 
                Power:  ${player1sheeps[i].power }
                </div>`;
            }
    
            for (let i = 0; i < (numberOfSheepUnits); i++) {
                player2HTML += `     <div class="sheep2">
                    <img src="img/sheep${ randValue(0, 4, 1) }.png" width="32">
                </div>`;
            }
            logHTML += ` ${player1sheeps[0].health} <br>`;
            player1sheeps[0].health -= 50;
            logHTML+= `Мінус 50 балів Слізерину <br>`;
            logHTML += ` ${player1sheeps[0].health} `;






        elPlayer1field.insertAdjacentHTML('beforeend', player1HTML);
        elPlayer2field.insertAdjacentHTML('beforeend', player2HTML);
        elGameLog.insertAdjacentHTML('beforeend', logHTML);




    }









//   --------------------------------------------------------------////////////////////-----------------------------------------
// Рандомна функція (від, до, кратна чому)
const randValue = (min,max,num) => {
    return Math.floor(Math.floor(Math.random()*(max-min+1)+min) / num) * num;
}

//   --------------------------------------------------------------////////////////////-----------------------------------------
// Клік на кнопку
elStartGameButton.addEventListener('click', () => {StartGameFunction()});
