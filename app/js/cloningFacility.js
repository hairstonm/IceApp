var CloningFacility = function (battle) {
   var baseHealth = 10;
   var baseAttack = 10;
   this.randomizer = new Randomizer();
   this.receiveEvent = function (message) {
      var heroName = "Redshirt" + this.randomizer.randomize(100);
      this.scope.heroName = heroName;
      this.scope.heroHealth = baseHealth;
      this.scope.heroMaxHealth = baseHealth;
      return battle.loadNewAttacker(new CombatParty(baseHealth, baseAttack, Mediator.getInstance(), heroName, "hero"));
   }
}
