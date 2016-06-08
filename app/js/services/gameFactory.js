angular.module("app").factory('game', ['$rootScope', 'battle', 'resources', function($rootScope, battle, resources) {
	var baseHealth = 15;
	var mediator = Mediator.getInstance();
	$rootScope.mediator = mediator;
	var scientists = 0;
	var accumulator = new Accumulator(resources);
	var researchFacility = new ResearchFacility(accumulator,scientists);
	var openArena = new OpenArena(battle);
	var closedArena = new ClosedArena(battle);
	var	arena = new Arena(openArena, closedArena);
	return new Game(arena, researchFacility);
}]);

angular.module("app").service('battle', function() {
	return new Battle();
});

angular.module("app").service('resources', function() {
	return new Resources();
})
angular.module("app").factory('bestiary', ['battle', function(battle) {
	return new Bestiary(new Randomizer(), battle);
}]);

angular.module("app").factory('cloningFacility', ['battle', function(battle) {
	return new CloningFacility(battle);
}]);

var createListeners = function(battle, bestiary, cloningFacility){
		return {
		attack : new AttackListener(),
		defend : new DefenderListener(),
		dead : new DeathListener(),
		battle : new BattleListener(battle),
		bestiary: bestiary,
		cloningFacility: cloningFacility
	};
};

var registerListeners = function(listeners, $rootScope){
	$rootScope.mediator.registerListener("attack", listeners.attack);
	$rootScope.mediator.registerListener("defend", listeners.defend);
	$rootScope.mediator.registerListener('defenderDeath', listeners.dead);
	$rootScope.mediator.registerListener('defenderDeath', listeners.bestiary);
	$rootScope.mediator.registerListener('attackerDeath', listeners.dead);
	$rootScope.mediator.registerListener('attackerDeath', listeners.cloningFacility);
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

angular.module("app").controller('gameIncrementer', ['$rootScope', '$interval', 'game', 'resources', 'bestiary', 'cloningFacility', 'battle',
	function($rootScope, $interval, game, resources, bestiary, cloningFacility, battle) {
		$rootScope.missionInProgress = false;
		$rootScope.missionButtonText = "Start Mission";
		defineToggleMissionStatus($rootScope);
		$rootScope.missionLog = [];
		$rootScope.game = game;
		$rootScope.resources = resources.resources;
		var listeners = createListeners(battle, bestiary, cloningFacility);
		registerListeners(listeners,$rootScope);
		bestiary.receiveEvent();
		cloningFacility.receiveEvent()
		$interval(function(){
			assignScopeToListeners(listeners,$rootScope);
			game.increment()
		}, 1000);
	}
]);
