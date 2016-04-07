angular.module("app").factory('game', function($rootScope) {
	var combatPartyFactory = new CombatPartyFactory();
	combatPartyFactory.scope = $rootScope;
	var openArena = new OpenArena();
	var closedArena = new ClosedArena();
	var baseHealth = 15;
	var mediator = Mediator.getInstance();
	$rootScope.mediator = mediator;
	var attacker = new CombatParty(5, baseHealth, mediator, "Redshirt");
	var defender = new CombatParty(4, baseHealth, mediator, "PuppyMonkeyBaby");
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

var registerListeners = function(listeners, $rootScope){
	$rootScope.mediator.registerListener("attack", listeners.attack);
	$rootScope.mediator.registerListener("defend", listeners.defend);
	$rootScope.mediator.registerListener('dead', listeners.dead);
}

var assignScopeToMediators = function(mediator, $rootScope){
	mediator.scope = $rootScope;
}

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
		registerListeners(listeners,$rootScope);
		$interval(function(){
			assignScopeToListeners(listeners,$rootScope);
			game.increment()
		}, 1000);
	}
]);
