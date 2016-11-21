'use strict';

//file requirements
const api = require('./api');
const ui = require('./ui');
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');
import {getGame, createGame, updateGame, getGames} from './api';

let gameTurns = 0;

let checkWins = function() {
let boardArray = store.game.cells;

// horizontal wins
 if (boardArray[0] !== '' && boardArray[0] === boardArray[1] && boardArray[2] === boardArray[0]) {
   console.log(store.turn + " Wins");
   $('.gameEnd').text(store.turn + " Wins! Play again?");
   $('.tic-tac-toe-board').hide();
 }
  else if (boardArray[3] !== '' && boardArray[3] === boardArray[4] && boardArray[5] === boardArray[3]) {
     $('.gameEnd').text(store.turn + " Wins! Play again?");
     $('.tic-tac-toe-board').hide();
  }
  else if (boardArray[6] !== '' && boardArray[6] === boardArray[7] && boardArray[8] === boardArray[6]) {
   $('.gameEnd').text(store.turn + " Wins! Play again?");
   $('.tic-tac-toe-board').hide();
 }
 //vertical Wins
  else if (boardArray[0] !== '' && boardArray[0] === boardArray[3] && boardArray[6] === boardArray[0]) {
  $('.gameEnd').text(store.turn + " Wins! Play again?");
  $('.tic-tac-toe-board').hide();
  }
  else if (boardArray[1] !== '' && boardArray[1] === boardArray[4] && boardArray[7] === boardArray[1]) {
   $('.gameEnd').text(store.turn + " Wins! Play again?");
   $('.tic-tac-toe-board').hide();
  }
  else if (boardArray[2] !== '' && boardArray[2] === boardArray[5] && boardArray[8] === boardArray[2]) {
   $('.gameEnd').text(store.turn + " Wins! Play again?");
   $('.tic-tac-toe-board').hide();
  }
  // diagonal Wins
  else if (boardArray[0] !== '' && boardArray[0] === boardArray[4] && boardArray[8] === boardArray[0]) {
   $('.gameEnd').text(store.turn + " Wins! Play again?");
   $('.tic-tac-toe-board').hide();
  }
  else if (boardArray[2] !== '' && boardArray[2] === boardArray[4] && boardArray[6] === boardArray[2]) {
   $('.gameEnd').text(store.turn + " Wins! Play again?");
   $('.tic-tac-toe-board').hide();
  }
  else if (boardArray.indexOf('') < 0){
      $('.gameEnd').text("Tie Game!");
    }
    else{
      return false;
    }
    return true;
 };




let boxClick = function(){
   console.log('store.turn is ', store.turn);
    if (store.turn === "x"){
       store.turn = "o";
    } else {
       store.turn = "x";
    }
    gameTurns++;
    console.log('store.turn is ', store.turn);
    $(this).html(store.turn);

    // console.log(store.turn);
    // $(this).off('click');
    // turns div's value to first click value
    // change board array to reflect changes in HTML
    store.win = store.win === ("x" && "x" && "x") || ("o" && "o" && "o");
    let index = $(this).data('index');
    // console.log(store.turn);
    // find the index of the box clicked --jQuery to reference the data-index in html
    // set board array of that index to store.turn
    // boardArray[index] = store.turn;

    console.log(store.turn);
    if(store.game){
    store.game.cells[index] = store.turn;
    updateGame(index,store.turn,checkWins());
  }
};



const reset = function(){
  getGames().then(data=>{
    console.log(data);
    $('.game-stats').html(data.games.length + ' games played!!');
  });
  createGame().then(game=>{
    window.store = store;
    store.game = game.game;
    $('.box').off('click');
    $.each($('.box'), function(index, element) {
        $(element).html('');
        $(element).one('click', boxClick);
      } ) ;
      store.turn = "o";
    $('.tic-tac-toe-board').show();
    $('.gameEnd').text('');
  });

};

const addHandlers = function() {
  $('.box').one('click', boxClick);
  $('.reset').on('click', reset);
};

module.exports = {
  addHandlers,
  checkWins,
  reset

};
