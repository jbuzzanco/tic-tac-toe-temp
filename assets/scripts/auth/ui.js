'use strict';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  console.log(data);
};

const signInFailure = (error) => {
  console.error(error);
};

const signOutSuccess = (data) => {
  console.log(data);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signInFailure,
  signOutSuccess,
};
