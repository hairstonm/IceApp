var Bestiary = function (randomizer, battle) {

   this.receiveEvent = function (message) {
      var newCombatParty = function () {
         var bestiary = [new CombatParty(10, 15, Mediator.getInstance(), "Kraken", 'defender'),
            new CombatParty(5, 10, Mediator.getInstance(), "PuppyMonkeyBaby", 'defender'),
            new CombatParty(15, 25, Mediator.getInstance(), "ChickenWomanDuckThing", 'defender'),
            new CombatParty(6, 18, Mediator.getInstance(), "CJJJM", 'defender'),
            new CombatParty(1, 1, Mediator.getInstance(), "Trump", 'defender')];
         return bestiary[randomizer.randomize(bestiary.length)];
      }
      this.scope.monsterName = newCombatParty().partyName;
      this.scope.monsterHealth = newCombatParty().health;
      battle.loadNewDefender(newCombatParty());
   }
}
