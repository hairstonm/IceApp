angular.module("app").factory('game', ['listeners', function(listeners) {
	var combatPartyFactory = new CombatPartyFactory();
	var openArena = new OpenArena();
	var closedArena = new ClosedArena();
	var	mediator = new Mediator();
	var baseHealth = 15;
	var attacker = new CombatParty(5, baseHealth, mediator, "Redshirt");
	var defender = new CombatParty(4, baseHealth, mediator, "PuppyMonkeyBaby");
	var battle = new Battle(attacker, defender, combatPartyFactory);
	var	arena = new Arena(openArena, closedArena, battle);
	mediator.registerListener("attack", listeners.attack);
	mediator.registerListener("defend", listeners.defend);
	mediator.registerListener('dead', listeners.dead);
	return new Game(arena);
}]);

angular.module("app").factory('listeners', function(){
	return {
		attack : new AttackListener(),
		defend : new DefenderListener(),
		dead : new DeathListener()
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
		$rootScope.game = game;
		$interval(function(){
			assignScopeToListeners(listeners,$rootScope);
			game.increment()
		}, 1000);
	}
]);
