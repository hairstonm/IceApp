describe("Game UI ", function(){
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
		$rootScope.toggleMissionStatus = function(){
			$rootScope.$broadcast('toggleMissionStatus');
		}
		$rootScope.missionInProgress = false;
		listeners.attack.scope = $rootScope;
		listeners.defend.scope = $rootScope;
		$rootScope.$digest();
	});

	it('starts mission', function(){
		element.find("button").triggerHandler("click");
		gameInstance.increment();
		
		expect($rootScope.missionLog[0]).toEqual("Attacked for 5 points of damage");
	});

	it('stops mission', function(){
		element.find("button").triggerHandler("click");
		gameInstance.increment();
		element.find("button").triggerHandler("click");
		gameInstance.increment();

		expect($rootScope.missionLog.length).toEqual(4);
	});
});