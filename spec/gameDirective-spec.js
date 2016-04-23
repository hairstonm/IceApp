describe("Game Directive ", function() {
    var missionString = '<mission></mission>';
    var $compile;
    var $rootScope;
    var gameInstance;
    var listeners;
    var element;
    var battle;

    beforeEach(function() {
        module('app');
    });

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        gameInstance = td.object("Game");
    }));

    beforeEach(function(){
        element = $compile(missionString)($rootScope);
        $rootScope.game = gameInstance;
        $rootScope.toggleMissionStatus = function() {
          $rootScope.$broadcast('toggleMissionStatus');
        }
        $rootScope.$digest();
    });

    it('starts mission', function() {
        element.find("button").triggerHandler("click");
        expect($rootScope.missionInProgress).toEqual(true);
    });

    it('stops mission', function() {
        element.find("button").triggerHandler("click");
        gameInstance.increment();
        element.find("button").triggerHandler("click");
        gameInstance.increment();

        expect($rootScope.missionInProgress).toEqual(false);
    });
});
