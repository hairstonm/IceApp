angular.module("app").factory('game', function() {
	var combatPartyFactory = new CombatPartyFactory();
	var openArena = new OpenArena();
	var closedArena = new ClosedArena();
	var baseHealth = 15;
	var attacker = new CombatParty(5, baseHealth, "Redshirt");
	var defender = new CombatParty(4, baseHealth, "PuppyMonkeyBaby");
	var battle = new Battle(attacker, defender, combatPartyFactory);
	var	arena = new Arena(openArena, closedArena, battle);
	return new Game(arena);
});

angular.module("app").factory('listeners', function(){
	return {
		attack : new AttackListener(),
		defend : new DefenderListener(),
		dead : new DeathListener()
	};
});

angular.module("app").factory('mediator',  ['listeners', function(listeners){
	var mediator = Mediator.getInstance();
	mediator.registerListener("attack", listeners.attack);
	mediator.registerListener("defend", listeners.defend);
	mediator.registerListener('dead', listeners.dead);
	return mediator;
}]);

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

angular.module("app").controller('gameIncrementer', ['$rootScope', '$interval', 'game', 'listeners', 'mediator',
	function($rootScope, $interval, game, listeners, mediator) {
		$rootScope.missionInProgress = false;
		$rootScope.missionButtonText = "Start Mission";
		defineToggleMissionStatus($rootScope);
		$rootScope.missionLog = [];
		$rootScope.game = game;
		$rootScope.mediator = mediator;
		$interval(function(){
			assignScopeToListeners(listeners,$rootScope);
			game.increment()
		}, 1000);
	}
]);
