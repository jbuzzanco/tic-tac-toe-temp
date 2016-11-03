'use strict';

//file requirements
const api = require('./api');
const ui = require('./ui');
const store = require('../store');
const getFormFields = require('../../../lib/get-form-fields');

const addHandlers = function() {
$('.box').on('click', function(){
    store.turn = store.turn === "x"?"o":"x";
    $(this).html(store.turn);
  });
};


module.exports = {
  addHandlers
};
