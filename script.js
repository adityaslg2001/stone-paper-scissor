let randomness=computer();
let player='';

let arr=['STONE','PAPER','SCISSOR'];

const png = {
    'STONE': 'images/rock-emoji.png',
    'PAPER': 'images/paper-emoji.png',
    'SCISSOR': 'images/scissors-emoji.png'
};

let win=4;

const obj=JSON.parse(localStorage.getItem('obj'))||
{
    wins:0,
    losses:0,
    ties:0
};

const winLoseDisplay=document.querySelector('.win-lose');
const chooseDisplay=document.querySelector('.choose');
const scoreDisplay=document.querySelector('.scores');

updateScore();

function stone()
{
    player='STONE';
    if(randomness===0)
    {
        win=2;
        tieMessage(randomness);
    }
    else if(randomness===1)
    {
        win=1;
        loseMessage(player,randomness);
    }
    else
    {
        win=0;
        winMessage(player,randomness);
    }
    randomness=computer();
}
function paper()
{
    player='PAPER';
    if(randomness===0)
    {
        win=0;
        winMessage(player,randomness);
    }
    else if(randomness===1)
    {
        win=2;
        tieMessage(randomness);
    }
    else
    {
        win=1;
        loseMessage(player,randomness);
    }
    randomness=computer();
}
function scissor()
{
    player='SCISSOR';
    if(randomness===0)
    {
        win=1;
        loseMessage(player,randomness);
    }
    else if(randomness===1)
    {
        win=0;
        winMessage(player,randomness);
    }
    else
    {
        win=2;
        tieMessage(randomness);
    }
    randomness=computer();
}

function computer()
{
    return Math.floor(Math.random()*3);
}

function update()
{
    if(win===0)
    {
        obj.wins+=1;
    }
    else if(win===1)
    {
        obj.losses+=1;
    }
    else if(win===2)
    {
        obj.ties+=1;
    }
    localStorage.setItem('obj',JSON.stringify(obj));
}

function reset()
{
    obj.losses=0;
    obj.wins=0;
    obj.ties=0;

    updateScore();
}

        
function winMessage(player,randomness)
{
    update();
    updateScore();
    winLoseDisplay.innerHTML=`You Win!`;
    chooseDisplay.innerHTML=`Player -> <img src="${png[player]}"class="add-on"> |
        <img src="${png[arr[randomness]]}"class="add-on"> <- Computer`
        
    setInterval(()=>{
        location.reload();
    },5000);
    
    
}
function loseMessage(player,randomness)
{
    update();
    updateScore();
    winLoseDisplay.innerHTML=`You Lose!`;
    chooseDisplay.innerHTML=`Player -> <img src="${png[player]}" class="add-on"> |
        <img src="${png[arr[randomness]]}" class="add-on"> <- Computer`
    
        setInterval(()=>{
            location.reload();
        },5000);
    
}
function tieMessage(randomness)
{
    update();
    updateScore();
    winLoseDisplay.innerHTML=`It's a Tie!`;
    chooseDisplay.innerHTML=`Player -> <img src="${png[player]}" class="add-on"> |
        <img src="${png[arr[randomness]]}" class="add-on"> <- Computer`
        
        setInterval(()=>{
            location.reload();
        },5000);
}

function updateScore()
{
    scoreDisplay.innerHTML=`
        Wins: ${obj.wins} |
        Losses: ${obj.losses} |
        Ties: ${obj.ties}
        `;
}
