angular.module("app").factory('game', ['listeners', function(listeners) {
	var openArena = new OpenArena();
	var	mediator = new Mediator();
	var	arena = new Arena(openArena, new Combatant(mediator), new Combatant(mediator));
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

angular.module("app").controller('gameIncrementer', ['$scope', '$interval', 'game',
	function($scope, $interval, game) {
		$interval(function(){
			game.increment()
		}, 1000);
	}
]);