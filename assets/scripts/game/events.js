'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

let last_played = "";

let clicked_box = function() {
  if ((last_played === "") || (last_played === "O")) {
  $(this).text('X');
  last_played = "X";
}
else {
  $(this).text('O');
  last_played = 'O';
}
  console.log('clicked');

};

const addHandlers = () => {

$('.box-0').on("click", clicked_box);

$('.box-1').on("click", clicked_box);

$('.box-2').on("click", clicked_box);

$('.box-3').on("click", clicked_box);

$('.box-4').on("click", clicked_box);

$('.box-5').on("click", clicked_box);

$('.box-6').on("click", clicked_box);

$('.box-7').on("click", clicked_box);

$('.box-8').on("click", clicked_box);
};

module.exports = {
  addHandlers,
};
