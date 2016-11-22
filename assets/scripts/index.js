
// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
'use strict';

const authEvents = require('./auth/events.js');

const gameEvents = require('./game/events.js');
import {getGames, getGame} from './game/api';
window.getGames = getGames;
// On document ready
$(() => {
  authEvents.addHandlers();
  gameEvents.addHandlers();
$('.tic-tac-toe-board').hide();
$('.reset').html('You must sign in before playing');

});
