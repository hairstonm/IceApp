describe("Spice App", function(){
	var game;
	var arena;
	var mediator;

	beforeEach(function(){
		arena = new Arena();
		mediator = new Mediator();
		game = new Game(mediator, arena);
	});

	it("Sends character on missions", function(){
		game.startMission();
		game.increment();
		attackListener.recieveMessage(attackerMessage).expectToBeCalled();
		defenderListener.recieveMessage(defenderMessage).expectToBeCalled();
	});
});