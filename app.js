// JS file for Feb 9 class demo
// A guessing game about you with 5 questions for the user, and a different response to the user depending upon if the y got the right or wrong answer.
var tally =0;
function printAlert (alertMsg, docID) {
  var el = document.getElementById(docID);
  el.textContent = alertMsg;
};

var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName);

printAlert('Hi there, ' + userName + ', I\'m going to ask you some questions about me. Please answer Y or N', 'print1');

var answer1 = prompt('Was I borned in the America?').toUpperCase();
console.log('The user answer to Question 1 was ' + answer1);

function response1(answer1) {
  if (answer1 === 'N'){
    //alert('You are corect!');
    printAlert('You are corect!','print2');
    tally++;
    console.log(userName + ' nailed Question 1');
  } else if (answer1 === 'Y'){
    //alert('Sorry, you are wrong!');
    printAlert('Sorry, you are wrong!','print2');
    console.log('The answer was wrong')
  } else {
    //alert('You should have answered N, you lose this round.');
    printAlert('You should have answered N, you lose this round.','print2');
  }
};
response1(answer1);

var answer2 = prompt('Am I a Latino dude?').toUpperCase();
console.log('The user answer to Question 1 was ' + answer2);

function response2(answer2) {
  if (answer2 === 'Y'){
    //alert('You are corect!');
    printAlert('You are corect!','print3');
    tally++;
    console.log(userName + 'The answer is correct');
  } else if (answer2 === 'N'){
    //alert('Sorry, you are wrong!');
    printAlert('Sorry, you are wrong!','print3');
    console.log('The answer was wrong')
  } else {
    //alert('You should have answered Y, you lost another round.');
    printAlert('You should have answered Y, you lost another round.','print3');
  }
};
response2(answer2);

//alert ('Very well, ' + userName + ', Now I want you to answer with a T or F');
printAlert('Very well, ' + userName + ', Now I want you to answer with a T or F','print4');

var answer3 = prompt('I\ m the nices person in the world?').toUpperCase();
console.log('The user answer to Question 1 was ' + answer3);

function response3(answer3) {
  if (answer3 === 'T'){
    //alert('You are corect!');
    printAlert('You are corect!','print5');
    tally++;
    console.log(userName + 'The answer was correct');
  } else if (answer3 === 'F'){
    //alert('Sorry, you are wrong!');
    printAlert('Sorry, you are wrong!','print5');
    console.log('The answer was wrong')
  } else {
    //alert('You should have answered F, not doing very good,' + userName );
    printAlert('You should have answered F, not doing very good,','print5');
  }
};
response3(answer3);

var answer4 = prompt('I have beautiful green eyes?').toUpperCase();
console.log ('User answer question4' + answer4);

function response4(answer4) {
  if (answer4 == 'F'){
    //alert('Well done!');
    printAlert('Well done!','print6');
    tally++;
    console.log('The user answer correct');
  }else if (answer4 === 'T'){
    //alert('Go and kill your self');
    printAlert('Go and kill yourself','print6');
    console.log ('The user is a lazy dude!');
  }else{
    //alert ('You should have answered F');
    printAlert('You should have answered F','print6');
  }
};
response4(answer4);

//alert('Ok, ' + userName + ', if you answer correct this time you will win the game');
printAlert('Ok, ' + userName + ', if you answer correct this time you will win the game','print7');

var answer5 = prompt('I have black hair?').toUpperCase();
console.log ('User answer question5' + answer5);

function response5(answer5) {
  if (answer5 === 'F'){
    //alert('Wrong again!');
    printAlert('Wrong again!','print8');
    console.log('The user answered incorrect');
  }else if (answer5 === 'T'){
    //alert('Excelent!');
    printAlert('Excelent!','print8');
    tally++;
    console.log ('He is good!');
  }else{
    //alert ('You should have answered T');
    printAlert('You should have answered T','print8');
  }
};
response5(answer5);

//comment Thursday update


for (i= 0; i < 4; i++){

  var bYear = parseInt(prompt('Can you guess the year I was borned?'));
  console.log('user guessed: ' + bYear);

  function response6(bYear) {
    if(bYear < 1997){
      alert('Your guess was too low, go higher!');
      printAlert('Your guess was too low, go higher!','print9');
    } else if(bYear > 1997) {
      alert('You guess too high');
      printAlert('You guess too high','print9');
    } else if(isNaN(bYear)){
      alert('Please imput a number!');
      printAlert('Please imput a number!','print9');
    } else if(bYear === 1997){
      alert('You are correct!');
      printAlert('You are correct!','print9');
      tally++;
      i = 4;
    }
  };
  response6(bYear);
}
//
var otherSt = ['california','texas'];
var correct = false;


console.log(otherSt);

var all = prompt('Guest the Cities where I have lived').toLowerCase();
console.log ('User answer' + all);

function response7(answer){
  for(var i = 0; i < otherSt.length; i++){
    console.log (otherSt[i]);
    if(answer === otherSt[i]){
      correct = true;

    }
  }

  if (correct){
    //alert ('You are correct!');
    printAlert('You are correct!','print10');
    tally++;
  }
  else {
    //alert ('sorry you are wrong!');
    printAlert('sorry you are wrong!','print10');
  }
};
response7(all);
//alert('Congratulations you answer ' + tally + ' out of seven question');
printAlert('Congratulations you answer ' + tally + ' out of seven question','print11');
