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

angular.module("app").controller('gameIncrementer', ['$scope', '$interval', 'game', 'listeners',
	function($scope, $interval, game, listeners) {
		$scope.missionLog = [];
		$scope.missionInProgress = false;
		$interval(function(){
			for(listener in listeners){
				listeners[listener].scope = $scope;
			}
			game.increment()
		}, 1000);
	}
]);