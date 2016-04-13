'use strict';

var firstSpan;
var secondSpan;
var resultSpan;

document.addEventListener('DOMContentLoaded', init);

function init() {
  firstSpan = document.getElementById('first');
  secondSpan = document.getElementById('second');
  resultSpan = document.getElementById('result');
  var clearButton = document.getElementById('clear');

  clearButton.addEventListener('click', clearClicked);

  var numButtons = document.getElementsByClassName('num');
  for(var i = 0; i < numButtons.length; i++){
    numButtons[i].addEventListener('click', numClicked);
  }
  
  document.getElementById('equal').addEventListener('click', equalClicked);
  
  newProblem();
}

function clearClicked() {
  resultSpan.textContent = '';
}

function equalClicked() {
  var firstVal = parseInt(firstSpan.textContent);
  var secondVal = parseInt(secondSpan.textContent);

  var answer = firstVal + secondVal;
  var resultVal = parseInt(resultSpan.textContent);
  
  var isCorrect = answer === resultVal;
  displayResult(isCorrect, answer);
}

function displayResult(isCorrect, correctVal) {
  var messageDiv = document.getElementById('message');
  var message;

  if(isCorrect) {
    message = "You're right!";
  } else {
    message = `You're wrong!  The correct answer is ${correctVal}!`;
  }

  messageDiv.textContent = message;

  setTimeout(function() {
    messageDiv.textContent = "What's the answer?";
    newProblem();
  }, 2000);
}

function numClicked(event) {
  var numStr = event.target.textContent;
  var oldVal = resultSpan.textContent;
  var newVal = oldVal + numStr;
  resultSpan.textContent = newVal;
}

function newProblem() {
  firstSpan.textContent = randomInt();
  secondSpan.textContent = randomInt();
  resultSpan.textContent = '';
}

function randomInt() {
  var num = Math.floor(Math.random() * 21);
  return num;
}
