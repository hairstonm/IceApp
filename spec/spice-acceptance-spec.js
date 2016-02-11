describe("Spice App", function(){
	var game;
	var arena;
	var mediator;

	beforeEach(function(){
		game = new Game(mediator, arena);
	});

	describe("Sends character on missions", function(){
		When(function(){game.startMission()});
		And(function(){game.increment()});
		Then(function(){attackListener.recieveMessage(attackerMessage).expectToBeCalled()});
		Then(function(){defenderListener.recieveMessage(defenderMessage).expectToBeCalled()});
	});
});