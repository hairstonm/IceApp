describe("CombatPartyFactory", function() {
  var mediator;
  var combatPartyFactory;
  beforeEach(function() {
    mediator = new Mediator();
    combatPartyFactory = new CombatPartyFactory(mediator);
  });
  it("creates a new Combat Party when newCombatParty is called", function() {
    var combatParty = combatPartyFactory.newCombatParty();

    expect(combatParty instanceof CombatParty).toBe(true);
  });

  it("creates Combat Party utilizing existing mediator", function() {
    var combatParty = combatPartyFactory.newCombatParty();

    expect(combatParty.mediator === mediator).toBe(true);
  });
});
