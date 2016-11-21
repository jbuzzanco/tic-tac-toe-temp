'use strict';
const store = require('../store.js');
import {reset} from '../game/events';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  console.log(data);
  store.user = data.user;
  $('.reset').html('Start a new Game or Play Again!')
  reset();

};

const signInFailure = (error) => {
  console.error(error);
};

const signOutSuccess = () => {
  store.user = null;
  console.log(store);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signInFailure,
  signOutSuccess,
};
