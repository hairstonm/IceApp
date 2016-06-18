describe("deathListener", function(){
    var message = new AttackMessage(15, "redshirt6132", "hero");
    var deathListener = new DeathListener("hero");


    beforeEach(inject(function ($rootScope) {
        deathListener.scope = $rootScope.$new();
        deathListener.scope.missionLog = [];
        deathListener.scope.heroCount = 0;
    }));
    it("adds message to mission log", function(){
        deathListener.receiveEvent(message)

        expect(deathListener.scope.missionLog).toContain("hero was killed!");
    })

    it("increments the type counter", function(){
        deathListener.receiveEvent(message)

        expect(deathListener.scope.heroCount).toEqual(1);
    })
})