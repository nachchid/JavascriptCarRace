const startBtn = document.querySelector('.play-btn');
const speedDashboard = document.querySelector('.game-dashboard-speed');
const scoreDashboard = document.querySelector('.game-dashboard-score');
const lifeDashboard = document.querySelector('.game-dashboard-life');
const container = document.getElementById('container');

startBtn.addEventListener('click', startGame);
document.addEventListener('keydown', pressKeyOn);
document.addEventListener('keyup',pressKeyOff);
    

let animationGame;
let gamePlay = false;
let keys = {
    ArrowUp: false,
    Arrowdown: false,
    ArrowLeft: false,
    ArrowRight: false
}

let player;



function startGame(){
    startBtn.style.display = 'none';
    var div  = document.createElement('div');    
    div.setAttribute('class','playerCar');
    div.x = 250;
    div.y = 500;
    container.appendChild(div);    
    gamePlay = true;
    animationGame = requestAnimationFrame(playGame);
    player = {
        speed:1,
        lives:3,
        score: 0,
        carstoPass: 10,
        roadwidth: 350
    }
    startBoard();
}

function startBoard(){
    for (let x = 0; x<13;x++){
        var div = document.createElement('div');
        div.setAttribute('class','road');
        div.style.top = (x*50)+'px';
        div.style.width = player.roadwidth + 'px';
        container.appendChild(div);
    }
}

function updateDash(){
    console.log(player);
    scoreDashboard.innerHTML = player.score;
    speedDashboard.innerHTML = player.speed;
    lifeDashboard.innerHTML = player.lives;
}



function pressKeyOn(){

}

function pressKeyOff(){

}



function playGame(){
if(gamePlay)
{
updateDash();
}
animationGame = requestAnimationFrame(playGame);
}

