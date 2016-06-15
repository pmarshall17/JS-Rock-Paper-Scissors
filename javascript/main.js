var arr =  ['rock', 'paper', 'scissors'];
var computer = '';

function userChoice(choice) {
  computer = arr[Math.floor(Math.random() * 3)];
  result1 = document.getElementById("result1");
  result1.innerHTML = "You chose " + result1 + ", computer chose " + computer + ".";
  fortuneWheel(result1, computer);
}

function fortuneWheel(choice, computer)  {
  if(choice === 'rock' && computer === 'scissors' ||
     choice === 'paper' && computer === 'rock' ||
     choice === 'scissors' && computer === 'paper') {
      result2 = document.getElementById("result2");
      result2.innerHTML = 'You win!';
  }   
  else if(choice === 'rock' && computer === 'paper' || 
          choice === 'paper' && computer === 'scissors' ||
          choice === 'scissors' && computer === 'rock') {
            result2 = document.getElementById("result2");
            result2.innerHTML = 'You lose!';
  }   
  else {
    result2 = document.getElementById("result2");
    result2.innerHTML = 'Push'; 
  }   
}




