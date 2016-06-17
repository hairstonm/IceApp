var Bestiary = function (randomizer, battle) {

   this.receiveEvent = function (message) {
      var newCombatParty = function () {
         var bestiary = [new CombatParty(10, 15, Mediator.getInstance(), "Kraken", 'defender'),
            new CombatParty(5, 38, Mediator.getInstance(), "PuppyMonkeyBaby", 'defender'),
            new CombatParty(15, 29, Mediator.getInstance(), "ChickenWomanDuckThing", 'defender'),
            new CombatParty(6, 41, Mediator.getInstance(), "CJJJM", 'defender'),
            new CombatParty(1, 22, Mediator.getInstance(), "Trump", 'defender')];
         return bestiary[randomizer.randomize(bestiary.length)];
      }
      var monster = newCombatParty();
      this.scope.monsterName = monster.partyName;
      this.scope.monsterHealth = monster.health;
      this.scope.monsterMaxHealth = monster.health;
      battle.loadNewDefender(monster);
   }
}
