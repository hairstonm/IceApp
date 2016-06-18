describe('healthListener', function(){
    var healthListener = new HealthListener("villian");
    var message = new HealthMessage(10);

    beforeEach(inject(function ($rootScope){
        healthListener.scope = $rootScope.$new();
        healthListener.scope.villianHealth = 20;
    }));

    it("sends combat party health to the UI", function(){
        healthListener.receiveEvent(message);

        expect(healthListener.scope.villianHealth).toEqual(10);
    });
});