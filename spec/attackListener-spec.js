describe('attackListener', function() {
    var message = new AttackMessage(15, "redshirt6132", "hero");
    var attackListener = new AttackListener("villain");

    beforeEach(inject(function ($rootScope) {
        attackListener.scope = $rootScope.$new();
        attackListener.scope.missionLog = [];
        attackListener.scope.villianHealth = 20;
    }));
it("sends attackMessage to UI", function(){
    attackListener.receiveEvent(message);

    expect(attackListener.scope.missionLog).toContain("redshirt6132 attacked for 15 points of damage")
})
});