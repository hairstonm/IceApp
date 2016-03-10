describe("Game UI ", function(){
	var missionString = '<mission></mission>';
	var $compile;
	var $rootScope;
	var gameInstance;
	var listeners;

	beforeEach(function(){
		module('app');
	});

	 
	beforeEach(inject(function(_$compile_, _$rootScope_, _game_, _listeners_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    gameInstance = _game_;
    listeners = _listeners_;
  })); 

	it('starts mission', function(){
		var element = $compile(missionString)($rootScope);
		$rootScope.missionLog = [];
		listeners.attack.scope = $rootScope;
		listeners.defend.scope = $rootScope;
		$rootScope.$digest();
		//element.triggerHandler("click");
		//gameInstance.startMission();
		//toDo figure out how t click a button 
		gameInstance.increment();
		expect($rootScope.missionLog[0]).toEqual("attack");
	});
});