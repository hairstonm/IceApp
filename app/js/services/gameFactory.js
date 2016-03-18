angular.module("app").factory('game', ['listeners', function(listeners) {
	var openArena = new OpenArena();
	var closedArena = new ClosedArena();
	var	mediator = new Mediator();
	var	arena = new Arena(openArena, closedArena,
	 	new CombatParty(5,mediator, "Redshirt"),
	  	new CombatParty(4, mediator, "PuppyMonkeyBaby"));
	mediator.registerListener("attack", listeners.attack);
	mediator.registerListener("defend", listeners.defend);
	return new Game(mediator, arena);
}]);

angular.module("app").factory('listeners', function(){
	return {
		attack : new AttackListener(),
		defend : new DefenderListener(),
	};
});

var assignScopeToListeners = function(listeners, $rootScope){
	for(listener in listeners){
		listeners[listener].scope = $rootScope;
	}
}

var defineToggleMissionStatus = function($rootScope){
	$rootScope.toggleMissionStatus = function(){
		$rootScope.$broadcast('toggleMissionStatus');
	}
}

angular.module("app").controller('gameIncrementer', ['$rootScope', '$interval', 'game', 'listeners',
	function($rootScope, $interval, game, listeners) {
		$rootScope.missionInProgress = false;
		$rootScope.missionButtonText = "Start Mission";
		defineToggleMissionStatus($rootScope);
		$rootScope.missionLog = [];
		$interval(function(){
			assignScopeToListeners(listeners,$rootScope);
			game.increment()
		}, 1000);
	}
]);