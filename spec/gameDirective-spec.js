describe("Game Directive ", function(){
	var missionString = '<mission></mission>';
	var $compile;
	var $rootScope;
	var gameInstance;
	var listeners;
	var element;

	beforeEach(function(){
		module('app');
	});

	beforeEach(inject(function(_$compile_, _$rootScope_, _game_, _listeners_){
	    $compile = _$compile_;
	    $rootScope = _$rootScope_;
	    gameInstance = _game_;
	    listeners = _listeners_;
  	}));

	beforeEach(function(){
		element = $compile(missionString)($rootScope);
		$rootScope.missionLog = [];
		$rootScope.mediator = Mediator.getInstance();
		$rootScope.toggleMissionStatus = function(){
			$rootScope.$broadcast('toggleMissionStatus');
		}
		$rootScope.missionInProgress = false;
		$rootScope.mediator.registerListener("attack", listeners.attack);
		$rootScope.mediator.registerListener("defend", listeners.defend);
		$rootScope.mediator.registerListener('dead', listeners.dead);
		listeners.attack.scope = $rootScope;
		listeners.defend.scope = $rootScope;
		$rootScope.$digest();
	});

	it('starts mission', function(){
		element.find("button").triggerHandler("click");
		gameInstance.increment();

		expect($rootScope.missionLog.length).toBeGreaterThan(0);
	});

	it('stops mission', function(){
		element.find("button").triggerHandler("click");
		gameInstance.increment();
		element.find("button").triggerHandler("click");
		gameInstance.increment();

		expect($rootScope.missionLog.length).toEqual(4);
	});

	it('continues a mission when a combatant dies', function(){
		element.find("button").triggerHandler("click");
		gameInstance.increment();
		gameInstance.increment();
		gameInstance.increment();
		gameInstance.increment();

		expect($rootScope.missionLog.indexOf("Kraken")).toBeGreaterThan(-1);
	});
});
