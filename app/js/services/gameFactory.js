angular.module("app").factory('game', ['listeners', function(listeners) {
	var openArena = new OpenArena();
	var closedArena = new ClosedArena();
	var	mediator = new Mediator();
	var	arena = new Arena(openArena, closedArena, new Combatant(mediator), new Combatant(mediator));
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

angular.module("app").controller('gameIncrementer', ['$rootScope', '$interval', 'game', 'listeners',
	function($rootScope, $interval, game, listeners) {
		$rootScope.missionInProgress = false;
		$rootScope.toggleMissionStatus = function(){
			$rootScope.$broadcast('toggleMissionStatus');
		}
		$rootScope.missionLog = [];
		$interval(function(){
			for(listener in listeners){
				listeners[listener].scope = $rootScope;
			}
			game.increment()
		}, 1000);
	}
]);