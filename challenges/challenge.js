/*******Pig game */

var scores, currentScore, activePlayer, gamePlaying;

init();

var lastDice;

//document.querySelector('#current--' + activePlayer).textContent = dice
//document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score--0').textContent;console.log(x)




document.querySelector('.btn--roll').addEventListener('click', function(){

    if(gamePlaying){
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

       

        /*if(dice === 6 && lastDice === 6){
            scores[activePlayer] = 0;
            document.querySelector('#score--' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1){
            //add score
            currentScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = currentScore;
    
        } else {
       //next player 
       
       nextPlayer();
        }
        lastDice = dice
        */
        if (dice1 !== 1 && dice2 !== 1){
            //add score
            currentScore = dice1 + dice2;
            document.querySelector('#current--' + activePlayer).textContent = currentScore;
    
        } else {
       //next player 
       
       nextPlayer();
      
    
    
        }
        lastDice = dice
    
    }
    
    
});

document.querySelector('.btn--hold').addEventListener('click', function() {

    if(gamePlaying){
        scores[activePlayer] += currentScore;
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer]
       
        var input =document.querySelector('.final-score').value;
   
        var winningScore;
        if(input){
            var winningScore = input;
        } else {
            winningScore = 100;
        }
        if (scores[activePlayer] >= winningScore){
            document.querySelector('#name--' + activePlayer).textContent =  'winner!';
            document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player--' + activePlayer ).classList.add('player--winner')
            document.querySelector('.player--' + activePlayer).classList.remove('player--active')
            gamePlaying = false;
        } else{
       nextPlayer();}
    }
 
 
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
   currentScore = 0 ;
    document.getElementById('current--0').textContent = '0';
   document.getElementById('current--1').textContent = '0';

   document.querySelector('.player--0 ').classList.toggle('player--active');
   document.querySelector('.player--1').classList.toggle('player--active');
   document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', init);
 

function init(){
    scores = [0,0];
    activePlayer = 0;
    currentScore = 0;
    gamePlaying = true;
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    

document.getElementById('score--0').textContent =  '0';
document.getElementById('score--1').textContent =  '0';
document.getElementById('current--0').textContent =  '0';
document.getElementById('current--1').textContent =  '0';
document.getElementById('name--0').textContent =  'Player 1';
document.getElementById('name--1').textContent =  'Player 2';
document.querySelector('.player--0').classList.remove('player--winner')
document.querySelector('.player--1').classList.remove('player--winner')
document.querySelector('.player--0').classList.remove('player--active')
document.querySelector('.player--1').classList.remove('player--active')
document.querySelector('.player--0').classList.add('player--active')
}