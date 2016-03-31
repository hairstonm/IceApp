var BattleListener = function(battle){
  this.receiveEvent = function(message){
    battle.loadNewDefender();
  }
}
