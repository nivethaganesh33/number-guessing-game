let generatedVariable= Math.floor(Math.random()* 100)+1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let getCount=1;
let resetButton;

function checkGuess(){
     let myVariable= Number(guessField.value);
     if(getCount === 1){
       guesses.textContent = 'Previous guesses:';
     }
     guesses.textContent += myVariable+" ";
     if(myVariable === generatedVariable){
       lastResult.textContent ="Congratulations! You got it right!";
       lastResult.backgroundColor.textContent = 'green';
       lowOrHi.textContent = '';
       setGameOver();
     }
     else if(getCount === 10){
       lastResult.textContent= "!!!GAME OVER!!!'"
       lastResult.backgroundColor.textContent = 'red';
       setGameOver();
     }
     else{
       lastResult.textContent = 'Wrong!';
       lastResult.style.backgroundColor = 'red';
       if(myVariable <generatedVariable ){
             lowOrHi.textContent = 'Last guess was too low!';
          }
       else{
           lowOrHi.textContent = 'Last guess was too High!';
       }
     }
 getCount++;
 guessField.focus();
 guessField.value= '';
}



guessSubmit.addEventListener('click',checkGuess);

function setGameOver(){
   guessField.disabled = true;
   guessSubmit.disabled = true;
   resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame(){
  getCount=1;
  const oldVariable=document.querySelectorAll(".resultParas p");
  for(var i=0;i< oldVariable.length ;i++){
     oldVariable[i]= '';
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  generatedVariable =Math.floor(Math.random * 100)+1;
}
