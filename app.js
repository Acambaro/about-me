// JS file for Feb 9 class demo
// A guessing game about you with 5 questions for the user, and a different response to the user depending upon if the y got the right or wrong answer.

var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName);

alert('Hi there, ' + userName + ', I\'m going to ask you some questions about me. Please answer Y or N');

var answer1 = prompt('Was I borned in the America?').toUpperCase();
console.log('The user answer to Question 1 was ' + answer1);

if (answer1 === 'N'){
  alert('You are corect!');
  console.log(userName + ' nailed Question 1');
} else if (answer1 === 'Y'){
  alert('Sorry, you are wrong!');
  console.log('The answer was wrong')
} else {
  alert('You should have answered N, you lose this round.');
}

var answer2 = prompt('Am I a Latino dude?').toUpperCase();
console.log('The user answer to Question 1 was ' + answer2);
if (answer2 === 'Y'){
  alert('You are corect!');
  console.log(userName + 'The answer is correct');
} else if (answer2 === 'N'){
  alert('Sorry, you are wrong!');
  console.log('The answer was wrong')
} else {
  alert('You should have answered Y, you lost another round.');
}

alert ('Very well, ' + userName + ', Now I want you to answer with a T or F');

var answer3 = prompt('I\ m the nices person in the world?').toUpperCase();
console.log('The user answer to Question 1 was ' + answer3);
if (answer3 === 'T'){
  alert('You are corect!');
  console.log(userName + 'The answer was correct');
} else if (answer3 === 'F'){
  alert('Sorry, you are wrong!');
  console.log('The answer was wrong')
} else {
  alert('You should have answered F, not doing very good,' + userName );
}

var answer4 = prompt('I have beautiful green eyes?').toUpperCase();
console.log ('User answer question4' + answer4);
if (answer4 == 'F'){
  alert('Well done!');
  console.log('The user answer correct');
}else if (answer4 === 'T'){
  alerts('Go and kill your self')
  consolo.log ('The user is a lazy dude!');
}else{
  alert ('You should have answered Y');
};

alert('Ok, ' + userName + ', if you answer correct this time you will win the game');

var answer5 = prompt('I have black hair?').toUpperCase();
console.log ('User answer question5' + answer5);
if (answer5 === 'F'){
  alert('Wrong again!');
  console.log('The user answered incorrect');
}else if (answer5 === 'T'){
  alert('Excelent!')
  consolo.log ('He is good!');
}else{
  alert ('You should have answered Y');
};


//comment Thursday update


for (i= 0; i < 4; i++){

  var byear = parseInt(prompt('Can you guess the year I was borned?'));
  console.log('user guessed: ' + byear);

  if(byear < 1997){
    alert('Your guess was too low, go higher!');
  } else if(byear > 1997) {
    alert('You guess too high');
  } else if(isNaN(byear)){
    alert('Please imput a number!');
  } else if(byear === 1997){
    alert('You are correct!');
    i = 4;
  }
}

var otherSt = ['california','texas'];
var correct = false;


console.log(otherSt);

while(correct === false){
  var answer = prompt('Guest the Cities where I have lived').toLowerCase();
  console.log ('User answer' + answer);

  for(var i = 0; i > otherSt.length; i++);{
    if(answer === otherSt[i]){
      alert ('You are correct!');
      correct = true;
    }
  }
  if(correct === false){
    alert ('sorry you are wrong!')
  }
}
