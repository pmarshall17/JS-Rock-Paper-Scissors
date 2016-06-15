var arr =  ['rock', 'paper', 'scissors'];
var computer = '';

function userChoice(choice) {
  computer = arr[Math.floor(Math.random() * 3)];
  choice = document.getElementById("choice");
  choice.innerHTML = "You chose " + choice + ", computer chose " + computer + ".";
  fortuneWheel(choice, computer);
}

// function fortuneWheel(choice, computer)  {
//   if(choice === 'rock' && computer === 'scissors' ||
//      choice === 'paper' && computer === 'rock' ||
//      choice === 'scissors' && computer === 'paper') {
//       fate = document.getElementById("fate");
//       fate.innerHTML = 'You win!';
//      tallyUp('win');
//   }   
//   else if(choice === 'rock' && computer === 'paper' || 
//           choice === 'paper' && computer === 'scissors' ||
//           choice === 'scissors' && computer === 'rock') {
//             fate = document.getElementById("fate");
//             fate.innerHTML = 'You lose!';
//     tallyUp('lose'); 
//   }   
//   else {
//     fate = document.getElementById("fate");
//     fate.innerHTML = 'Push'; 
//     tallyUp('tie');
  }   
}