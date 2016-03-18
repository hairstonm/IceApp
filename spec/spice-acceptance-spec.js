describe("Spice App", function(){
	var game;
	var arena;
	var mediator;
	var openArena;
	var closedArena;
	var attackListener;
	var defenderListener;

	beforeEach(function(){
		openArena = new OpenArena();
		mediator = new Mediator();
		arena = new Arena(openArena, closedArena, new CombatParty(5, mediator), new CombatParty(4, mediator));
		game = new Game(mediator, arena);
		attackListener = td.object('AttackListener');
		defenderListener = td.object('DefenderListener');
		mediator.registerListener("attack", attackListener);
		mediator.registerListener("defend", defenderListener);
	});

	it("allows combatants to go on missions", function(){
		game.startMission();
		game.increment();
		
		td.verify(attackListener.receiveEvent(td.matchers.anything()), {times: 2});
		td.verify(defenderListener.receiveEvent(td.matchers.anything()), {times: 2});
	});
});