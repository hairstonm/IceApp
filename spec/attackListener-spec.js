describe('attackListener', function() {
    var deathMessage = new DeathMessage("dead");
    var defender = td.object("CombatParty");
    var battle = td.object("Battle");
    var message = new AttackMessage(15, "redshirt6132", "attacker");
    var attackListener = new AttackListener();

    beforeEach(inject(function ($rootScope) {
        attackListener.scope = $rootScope.$new();
        attackListener.scope.missionLog = [];
        attackListener.scope.monsterHealth = 20;
    }));
it("decreases monster health when an attacker attacks", function(){
    attackListener.receiveEvent(message);

    expect(attackListener.scope.monsterHealth).toEqual(5);
});
});