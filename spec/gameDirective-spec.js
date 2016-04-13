describe("Game Directive ", function(){
	var missionString = '<mission></mission>';
	var $compile;
	var $rootScope;
	var gameInstance;
	var listeners;
	var element;
	var battle;

	beforeEach(function(){
		module('app');
	});

	beforeEach(inject(function(_$compile_, _$rootScope_, _game_){
	    $compile = _$compile_;
	    $rootScope = _$rootScope_;
	    gameInstance = _game_;
  	}));

	beforeEach(function(){
		battle = td.object("Battle");
		element = $compile(missionString)($rootScope);
		$rootScope.missionLog = [];
		$rootScope.mediator = Mediator.getInstance();
		listeners = {
				attack : new AttackListener(),
				defend : new DefenderListener(),
				dead : new DeathListener(),
				battle : new BattleListener(battle)
		};
		$rootScope.toggleMissionStatus = function(){
			$rootScope.$broadcast('toggleMissionStatus');
		}
		$rootScope.missionInProgress = false;
		$rootScope.mediator.registerListener("attack", listeners.attack);
		$rootScope.mediator.registerListener("defend", listeners.defend);
		$rootScope.mediator.registerListener('dead', listeners.dead);
		$rootScope.mediator.registerListener('battle', listeners.battle);
		listeners.attack.scope = $rootScope;
		listeners.defend.scope = $rootScope;
		$rootScope.$digest();
	});

	it('starts mission', function(){
		element.find("button").triggerHandler("click");
		gameInstance.increment();

		expect($rootScope.missionLog.length).toBeGreaterThan(0);
	});

	it('stops mission', function(){
		element.find("button").triggerHandler("click");
		gameInstance.increment();
		element.find("button").triggerHandler("click");
		gameInstance.increment();

		expect($rootScope.missionLog.length).toEqual(4);
	});

	it('continues a mission when a combatant dies', function(){
		element.find("button").triggerHandler("click");
		gameInstance.increment();
		gameInstance.increment();
		gameInstance.increment();
		gameInstance.increment();

		debugger;
		expect($rootScope.missio	nLog.indexOf("Kraken")).toBeGreaterThan(-1);
	});
});
