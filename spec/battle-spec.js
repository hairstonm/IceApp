describe("battle", function() {
  var attacker;
  var defender;
  var battle;
  var combatPartyFactory;

  beforeEach(function() {
    attacker = td.object("CombatParty");
    defender = td.object("CombatParty");
    battle = new Battle();
    battle.loadNewDefender(defender);
    battle.loadNewAttacker(attacker);
  });

  it("uses attacker to attack defender", function() {
    battle.evaluateCombat();

    td.verify(attacker.attack(defender));
  });

  it("uses defender to attack attacker", function() {
    battle.evaluateCombat();

    td.verify(defender.attack(attacker));
  });
});
