'use strict';

const host = require('../app').host;
const store = require('../store');

const getGames = function (over) {
  console.log(store);
  return $.ajax({
    method: "GET",
    url: host + `/games`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });

};

const createGame = function () {
  return $.ajax({
    method: "POST",
    url: host + "/games",
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

const getGame = function (gameID) {
  return $.ajax({
    method: "GET",
    url: host + "/games/" + gameID,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};


const updateGame = function (cell, symbol, over) {
  return $.ajax({
    url: host + "/games/" + store.game.id,
    method: "PATCH",
    contentType: "application/json",

    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: `{
      "game": {
        "cell": {
          "index": "${cell}",
          "value": "${symbol}"
        },
        "over": "${over}"
      }
    }`
  });
};


export {getGames, createGame,getGame, updateGame};
