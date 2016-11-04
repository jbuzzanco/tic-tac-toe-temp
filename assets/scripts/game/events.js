'use strict';

//file requirements
const api = require('./api');
const ui = require('./ui');
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');



let winner = "x" || "o";
let board = ['','','','','','','','','',];


let checkWins = function() {
  console.log(board);
  console.log(board[0] === board[1]);
  console.log(board[2] === board[0]);
  console.log(!!board[0])
 if (board[0] !== '' && board[0] === board[1] && board[2] === board[0]) {
   console.log(store.turn + " Wins");
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
