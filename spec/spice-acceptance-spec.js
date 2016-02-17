describe("Spice App", function(){
	var game;
	var arena;
	var mediator;
	var openArena;
	var attackListener;

	beforeEach(function(){
		openArena = new OpenArena();
		arena = new Arena(openArena, new Combatant(), new Combatant());
		mediator = new Mediator();
		game = new Game(mediator, arena);
		attackListener = {
			receiveMessage : function(){}
		};

		spyOn(attackListener, 'receiveMessage');
	});

	it("Sends character on missions", function(){
		game.startMission();
		game.increment();
		expect(attackListener.receiveMessage).toHaveBeenCalled();
		defenderListener.receiveMessage(defenderMessage).expectToBeCalled();
	});
});