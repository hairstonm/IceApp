describe("Spice App", function(){
	var game;
	var arena;
	var mediator;
	var openArena;
	var closedArena;
	var attackListener;
	var defenderListener;
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
		combatPartyFactory.scope = $rootScope;
		openArena = new OpenArena();
		mediator = Mediator.getInstance();
		$rootScope.mediator = mediator;
		attacker = new CombatParty(5, baseHealth, mediator, "Redshirt");
		defender = new CombatParty(4, baseHealth, mediator, "PuppyMonkeyBaby");
		newDefender = new CombatParty(8, baseHealth, mediator, "The Kraken");
		battle = new Battle(attacker, defender, combatPartyFactory);
		arena = new Arena(openArena, closedArena, battle);
		game = new Game(arena);
		attackListener = td.object('AttackListener');
		defenderListener = td.object('DefenderListener');
		battleListener = td.object('BattleListener');
		defenderDead = td.object('DeathMessage');
		closedArena = td.object('ClosedArena');
		$rootScope.mediator.registerListener("attack", attackListener);
		$rootScope.mediator.registerListener("defend", defenderListener);
		$rootScope.mediator.registerListener("dead", battleListener);
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

		td.verify(battleListener.receiveEvent(captor.capture()));
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
