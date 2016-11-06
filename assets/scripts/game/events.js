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

//  if (board[0] !== '' && board[0] === board[1] && board[2] === board[0]) {
//    console.log(store.turn + " Wins");
//  }

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
      checkWins();
  });
};


module.exports = {
  addHandlers,
  checkWins,
};
