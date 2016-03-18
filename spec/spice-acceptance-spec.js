describe("Spice App", function(){
	var game;
	var arena;
	var mediator;
	var openArena;
	var closedArena;
	var attackListener;
	var defenderListener;

	beforeEach(function(){
		var baseHealth = 15;
		openArena = new OpenArena();
		mediator = new Mediator();
		arena = new Arena(openArena, closedArena,
			new CombatParty(5, baseHealth, mediator, "Redshirt"),
		    new CombatParty(4, baseHealth, mediator, "PuppyMonkeyBaby"));
		game = new Game(mediator, arena);
		attackListener = td.object('AttackListener');
		defenderListener = td.object('DefenderListener');
		battleListener = td.object('BattleListener');
		defenderDead = td.object('DeathMessage')
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


});