describe("battle", function() {
  var attacker;
  var defender;
  var battle;

  beforeEach(function() {
    attacker = td.object("CombatParty");
    defender = td.object("CombatParty");
    battle = new Battle(attacker, defender);
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
    var newDefender = td.object("CombatParty");
    battle.loadNewDefender(newDefender);
    battle.evaluateCombat();

    td.verify(attacker.attack(newDefender));
  });
});
