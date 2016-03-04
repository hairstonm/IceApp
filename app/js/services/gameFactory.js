angular.module("app").factory('game', function() {
	var openArena = new OpenArena();
	var	mediator = new Mediator();
	var	arena = new Arena(openArena, new Combatant(mediator), new Combatant(mediator));
	mediator.registerListener(new AttackListener("please work"));
	return new Game(mediator, arena);

});
