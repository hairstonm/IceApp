describe("battle", function() {
  var attacker;
  var defender;
  var battle;
  var combatPartyFactory;

  beforeEach(function() {
    attacker = td.object("CombatParty");
    defender = td.object("CombatParty");
    combatPartyFactory = td.object("CombatPartyFactory");
    battle = new Battle(attacker, defender, combatPartyFactory);
  });

  it("uses attacker to attack defender", function() {
    battle.evaluateCombat();

    td.verify(attacker.attack(defender));
  });

  it("uses defender to attack attacker", function() {
    battle.evaluateCombat();

    td.verify(defender.attack(attacker));
  });

  it("loads new defender when defender dies", function() {
    battle.loadNewDefender();

    td.verify(combatPartyFactory.newCombatParty());
  });
});
