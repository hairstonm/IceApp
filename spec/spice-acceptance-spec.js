describe("Spice App", function(){
	var game;
	var arena;
	var mediator;
	var openArena;
	var attackListener;
	var defenderListener;

	beforeEach(function(){
		openArena = new OpenArena();
		mediator = new Mediator();
		arena = new Arena(openArena, new Combatant(mediator), new Combatant(mediator));
		game = new Game(mediator, arena);
		attackListener = td.object('AttackListener');
		defenderListener = td.object('DefenderListener');
		mediator.registerListener(attackListener, "attack");
		mediator.registerListener(defenderListener, "defend");
	});

	it("Sends character on missions", function(){
		game.startMission();
		game.increment();
		td.verify(attackListener.receiveEvent("attack"));
		td.verify(defenderListener.receiveEvent("defend"));
	});
});