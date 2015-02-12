'use strict';
angular
  .module('app', ['Game'])
  .controller('GameController', _GameController);

function _GameController(GameManager) {
  this.game = GameManager;

}
