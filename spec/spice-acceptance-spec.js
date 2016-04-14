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
	var combatPartyFactory;
	var $rootScope;

	beforeEach(inject(function(_$rootScope_){
			$rootScope = _$rootScope_;
		}));

	beforeEach(function(){
		var baseHealth = 15;
		combatPartyFactory = new CombatPartyFactory();
		mediator = Mediator.getInstance();
		$rootScope.mediator = mediator;
		combatPartyFactory.scope = $rootScope;
		attacker = new CombatParty(5, baseHealth, mediator, "Redshirt");
		defender = new CombatParty(4, baseHealth, mediator, "PuppyMonkeyBaby");
		battle = new Battle(attacker, defender, combatPartyFactory);
		openArena = new OpenArena(battle);
		arena = new Arena(openArena, closedArena);
		game = new Game(arena);
		attackListener = td.object('AttackListener');
		defenderListener = td.object('DefenderListener');
		battleListener = td.object('BattleListener');
		deathListener = td.object('DeathListener');
		defenderDead = td.object('DeathMessage');
		closedArena = td.object('ClosedArena');
		$rootScope.mediator.registerListener("attack", attackListener);
		$rootScope.mediator.registerListener("defend", defenderListener);
		$rootScope.mediator.registerListener("battle", battleListener);
		$rootScope.mediator.registerListener("dead", deathListener);
		$rootScope.$digest();
	});

	it("allows combatants to go on missions", function(){
		game.startMission();
		game.increment();

		td.verify(attackListener.receiveEvent(td.matchers.anything()), {times: 2});
		td.verify(defenderListener.receiveEvent(td.matchers.anything()), {times: 2});
	});

	it("allows attacker to win a battle", function(){
		var captor = td.matchers.captor();
		game.startMission();
		game.increment();
		game.increment();
		game.increment();

		td.verify(deathListener.receiveEvent(captor.capture()));
		expect(captor.value.type).toEqual("PuppyMonkeyBaby");
	});

	it("battle loads new defender when attacker kills defender", function(){
		game.startMission();

		game.increment();
		game.increment();
		game.increment();

		td.verify(battle.loadNewDefender());
	});
});
