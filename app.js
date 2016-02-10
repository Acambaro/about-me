// JS file for Feb 9 class demo
// A guessing game about you with 5 questions for the user, and a different response to the user depending upon if the y got the right or wrong answer.

var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName);

alert('Hi there, ' + userName + ', I\'m going to ask you some questions about me. Please answer Yes or No');

var answer1 = prompt('Was I borned in the USA?');
console.log('The user answer to Question 1 was ' + answer1);
if (answer1.toUpperCase === 'No'){
  alert('You are corect!');
  console.log(userName + ' nailed Question 1');
} else if (answer1.toUpperCase === 'Yes'){
  alert('Sorry, you are wrong!');
  console.log('The answer was wrong')
} else {
  alert('You should answer No, you lose this round.');
}
var answer2 = prompt('Am I good looking?');
console.log('The user answer to Question 1 was ' + answer2);
if (answer2 === 'Yes'){
  alert('You are corect!');
  console.log(userName + 'The answer is correct');
} else if (answer2=== 'No'){
  alert('Sorry, you are wrong!');
  console.log('The answer was wrong')
} else {
  alert('You should answer Yes, you lost another round.');
}

alert ('Very well, ' + userName + ', Now I want you to answer with a T or F')

var answer3 = prompt('Am I a nice person?');
console.log('The user answer to Question 1 was ' + answer3);
if (answer3 === 'F'){
  alert('You are corect!');
  console.log(userName + 'The answer was correct');
} else if (answer3 === 'T'){
  alert('Sorry, you are wrong!');
  console.log('The answer was wrong')
} else {
  alert('You should answer F, you better stop playing.');
}
var answer4 = prompt('Do excercise five days a week?')
console.log ('User answer question4' + answer4);
if (answer4 == 'Yes'){
alert('Good for you!');
console.log('The user answer correct');
}else if (answer4 === 'No'){
  alerts('Go and kill your self')
  consolo.log ('The user is a lazy dude!');
}else{
  alert ('You should answer Yes')
}
