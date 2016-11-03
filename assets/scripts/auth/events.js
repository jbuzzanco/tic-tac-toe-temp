'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onSignUpUser = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();
  api.signUp(data)
  .then(ui.success)
  .catch(ui.failure);
};

const onSignInUser = function (event) {
  event.preventDefault();
  // debugger;
  let data = getFormFields(event.target);
  // $('.player-id').text("Hello!: " + data);
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.signInFailure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.failure);
};

const onSignOutUser = function () {
  api.signOut()
  .then(ui.signOutSuccess)
  .catch(ui.failure);
};

//click handlers
// let clicked_box = function(){
//   $(this).text('XX');
//   console.log('clicked');
//
// };

const addHandlers = () => {
  //log in info
  $('#sign-up').on('submit', onSignUpUser);
  $('#sign-in').on('submit', onSignInUser);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('click', onSignOutUser);

  //click handlers
  // $('.box-0').on("click", clicked_box);
  //
  // $('.box-1').on("click", clicked_box);
  //
  // $('.box-2').on("click", clicked_box);
  //
  // $('.box-3').on("click", clicked_box);
  //
  // $('.box-4').on("click", clicked_box);
  //
  // $('.box-5').on("click", clicked_box);
  //
  // $('.box-6').on("click", clicked_box);
  //
  // $('.box-7').on("click", clicked_box);
  //
  // $('.box-8').on("click", clicked_box);

};


module.exports = {
  addHandlers,
};
