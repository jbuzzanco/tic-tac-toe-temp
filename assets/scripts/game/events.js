'use strict';

//file requirements
const api = require('./api');
const ui = require('./ui');
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');



let winner = "x" || "o";
let boardArray = ['','','','','','','','','',];


let checkWins = function() {
  console.log(boardArray);
  console.log(boardArray[0] === boardArray[1]);
  console.log(boardArray[2] === boardArray[0]);
  console.log(!!boardArray[0]);

// horizontal wins
 if (boardArray[0] !== '' && boardArray[0] === boardArray[1] && boardArray[2] === boardArray[0]) {
   console.log(store.turn + " Wins");
 }
  else if (boardArray[3] !== '' && boardArray[3] === boardArray[4] && boardArray[5] === boardArray[3]) {
     console.log(store.turn + " Wins");
  }
  else if (boardArray[6] !== '' && boardArray[6] === boardArray[7] && boardArray[8] === boardArray[6]) {
   console.log(store.turn + " Wins");
 }
 //vertical Wins
  else if (boardArray[0] !== '' && boardArray[0] === boardArray[3] && boardArray[6] === boardArray[0]) {
  console.log(store.turn + " Wins");
  }
  else if (boardArray[1] !== '' && boardArray[1] === boardArray[4] && boardArray[7] === boardArray[1]) {
   console.log(store.turn + " Wins");
  }
  else if (boardArray[2] !== '' && boardArray[2] === boardArray[5] && boardArray[8] === boardArray[2]) {
   console.log(store.turn + " Wins");
  }
  // diagonal Wins
  else if (boardArray[0] !== '' && boardArray[0] === boardArray[4] && boardArray[8] === boardArray[0]) {
   console.log(store.turn + " Wins");
  }
  else if (boardArray[2] !== '' && boardArray[2] === boardArray[4] && boardArray[6] === boardArray[2]) {
   console.log(store.turn + " Wins");
  }


 };

 const gameResolutionXorO = function() {
   let victor;
   if (boardArray[0] === 'x' && boardArray[1] === 'x' && boardArray[2] === 'x') {
     victor = gameBoardArray[0];
     gameIsOver = true;
    console.log(victor + ' has won.');
  }
};



const addHandlers = function() {
  $('.box').on('click', function(){
      store.turn = store.turn === "x"?"o":"x";
      $(this).html(store.turn);
      // change board array to reflect changes in HTML
      store.win = store.win === ("x" && "x" && "x") || ("o" && "o" && "o");
      let index = $(this).data('index');
      // find the index of the box clicked --jQuery to reference the data-index in html
      // set board array of that index to store.turn
      boardArray[index] = store.turn;
      checkWins();
  });
};


module.exports = {
  addHandlers,
  checkWins,
};
