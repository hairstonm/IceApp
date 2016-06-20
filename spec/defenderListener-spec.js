describe('defendListener', function() {
    var message = new AttackMessage(15, "redshirt6132", "hero");
    var defenderListener = new DefenderListener("villain");

    beforeEach(inject(function ($rootScope) {
        defenderListener.scope = $rootScope.$new();
        defenderListener.scope.missionLog = [];
        defenderListener.scope.villianHealth = 20;
    }));
it("sends attackMessage to UI", function(){
    defenderListener.receiveEvent(message);

    expect(defenderListener.scope.missionLog).toContain("redshirt6132 received 15 points of damage")
})
});