var DeathListener = function(type) {
  this.receiveEvent = function(message) {
    this.scope.missionLog.push(message.type + " was killed!");
    this.scope[type+"Count"]++;
  }
}
