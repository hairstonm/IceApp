describe("Spice App", function(){
	var game;
	var arena;
	var mediator;
	var openArena;
	var closedArena;
	var attackListener;
	var defenderListener;
	var battleListener;
	var deathListener;
	var battle;
	var attacker;
	var defender;
	var newDefender;
	var bestiary;
	var $rootScope;
	var cloningFacility;

	beforeEach(inject(function(_$rootScope_){
			$rootScope = _$rootScope_;
		}));

	beforeEach(function(){
		var baseHealth = 15;
		var randomizer = {randomize: function(){return 4}};
		battle = new Battle();
		cloningFacility = new CloningFacility(battle);
		bestiary = new Bestiary(randomizer, battle);
		mediator = Mediator.getInstance();
		$rootScope.mediator = mediator;
		bestiary.scope = $rootScope;
		openArena = new OpenArena(battle);
		arena = new Arena(openArena, closedArena);
		game = new Game(arena);
		bestiary.receiveEvent();
		cloningFacility.receiveEvent();
		attackListener = td.object('AttackListener');
		defenderListener = td.object('DefenderListener');
		battleListener = td.object('BattleListener');
		deathListener = td.object('DeathListener');
		defenderDead = td.object('DeathMessage');
		closedArena = td.object('ClosedArena');
		$rootScope.mediator.registerListener("attack", attackListener);
		$rootScope.mediator.registerListener("defend", defenderListener);
		$rootScope.mediator.registerListener("battle", battleListener);
		$rootScope.mediator.registerListener("attackerDeath", deathListener);
		$rootScope.mediator.registerListener("defenderDeath", deathListener);
		$rootScope.mediator.registerListener("attackerDeath", cloningFacility);
		$rootScope.mediator.registerListener("defenderDeath", bestiary);
		$rootScope.mediator.registerListener()
		$rootScope.$digest();
	});

	it("allows combatants to go on missions", function(){
		game.startMission();
		game.increment();

		td.verify(attackListener.receiveEvent(td.matchers.anything()));
		td.verify(defenderListener.receiveEvent(td.matchers.anything()));
	});

	it("allows attacker to win a battle", function(){
		var captor = td.matchers.captor();
		game.startMission();
		game.increment();
		game.increment();
		game.increment();

		td.verify(deathListener.receiveEvent(captor.capture()));
		expect(captor.value.type).toEqual("Trump");
	});

	it("battle loads new defender when attacker kills defender", function(){
		game.startMission();

		game.increment();
		game.increment();
		game.increment();

		td.verify(battle.loadNewDefender());
	});
});
