angular.module("app").factory('game', ['$rootScope', 'battle', 'resources', function ($rootScope, battle, resources) {
   var baseHealth = 15;
   var mediator = Mediator.getInstance();
   $rootScope.mediator = mediator;
   var scientists = 0;
   var accumulator = new Accumulator(resources);
   var researchFacility = new ResearchFacility(accumulator, scientists);
   var openArena = new OpenArena(battle);
   var closedArena = new ClosedArena(battle);
   var arena = new Arena(openArena, closedArena);
   return new Game(arena, researchFacility);
}]);

angular.module("app").service('battle', function () {
   return new Battle();
});

angular.module("app").service('resources', function () {
   return new Resources();
})
angular.module("app").factory('bestiary', ['battle', function (battle) {
   return new Bestiary(new Randomizer(), battle);
}]);

angular.module("app").factory('cloningFacility', ['battle', function (battle) {
   return new CloningFacility(battle);
}]);

var createListeners = function (battle, bestiary, cloningFacility, resourceAllocator) {
   return {
      heroAttack: new AttackListener("hero"),
      villianAttack: new AttackListener("villian"),
      heroDefend: new DefenderListener("hero"),
      villianDefend: new DefenderListener("villian"),
      heroDeath: new DeathListener("hero"),
      villianDeath: new DeathListener("villian"),
      battle: new BattleListener(battle),
      bestiary: bestiary,
      cloningFacility: cloningFacility,
      resourceAllocator: resourceAllocator,
      heroHealth: new HealthListener("hero"),
      villianHealth: new HealthListener("villian")
   };
};

var registerListeners = function (listeners, $rootScope) {
   $rootScope.mediator.registerListener("heroAttack", listeners.heroAttack);
   $rootScope.mediator.registerListener("heroDefend", listeners.heroDefend);
   $rootScope.mediator.registerListener("villianAttack", listeners.villianAttack);
   $rootScope.mediator.registerListener("villianDefend", listeners.villianDefend);
   $rootScope.mediator.registerListener('heroDeath', listeners.heroDeath);
   $rootScope.mediator.registerListener('villianDeath', listeners.bestiary);
   $rootScope.mediator.registerListener('villianDeath', listeners.villianDeath);
   $rootScope.mediator.registerListener('heroDeath', listeners.cloningFacility);
   $rootScope.mediator.registerListener('villianDeath', listeners.resourceAllocator)
   $rootScope.mediator.registerListener('heroHealth', listeners.heroHealth);
   $rootScope.mediator.registerListener('villianHealth', listeners.villianHealth);
}

var assignScopeToMediators = function (mediator, $rootScope) {
   mediator.scope = $rootScope;
}

var assignScopeToListeners = function (listeners, $rootScope) {
   for (listener in listeners) {
      listeners[listener].scope = $rootScope;
   }
}

var defineToggleMissionStatus = function ($rootScope) {
   $rootScope.toggleMissionStatus = function () {
      $rootScope.$broadcast('toggleMissionStatus');
   }
}

angular.module("app").controller('gameIncrementer', ['$rootScope', '$interval', 'game', 'resources', 'bestiary', 'cloningFacility', 'battle',
   function ($rootScope, $interval, game, resources, bestiary, cloningFacility, battle) {
      $rootScope.missionInProgress = false;
      $rootScope.missionButtonText = "Start Mission";
      defineToggleMissionStatus($rootScope);
      $rootScope.monsterName = "";
      $rootScope.monsterHealth = "";
      $rootScope.missionLog = [];
      $rootScope.villianCount = 0;
      $rootScope.game = game;
      $rootScope.resources = resources.resources;
      var multiplier = 1;
      var resourceContainer = ["copper", "iron", "steel", "science", "titanite"]
      var resourceAllocator = new ResourceAllocator(resources, resourceContainer, new Randomizer(), multiplier);
      var listeners = createListeners(battle, bestiary, cloningFacility, resourceAllocator);
      registerListeners(listeners, $rootScope);
      assignScopeToListeners(listeners, $rootScope);
      bestiary.receiveEvent();
      cloningFacility.receiveEvent()
      $interval(function () {
         game.increment()
      }, 1000);
   }
]);
