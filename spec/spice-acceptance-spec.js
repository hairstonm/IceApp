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
	
	beforeEach(function(){
		var baseHealth = 15;
		openArena = new OpenArena();
		mediator = new Mediator();
		attacker = new CombatParty(5, baseHealth, mediator, "Redshirt");
		defender = new CombatParty(4, baseHealth, mediator, "PuppyMonkeyBaby");
		battle = new Battle(attacker, defender);
		arena = new Arena(openArena, closedArena, battle);
		game = new Game(mediator, arena);
		attackListener = td.object('AttackListener');
		defenderListener = td.object('DefenderListener');
		battleListener = td.object('BattleListener');
		defenderDead = td.object('DeathMessage');
		closedArena = td.object('ClosedArena');
		mediator.registerListener("attack", attackListener);
		mediator.registerListener("defend", defenderListener);
		mediator.registerListener("dead", battleListener);
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
