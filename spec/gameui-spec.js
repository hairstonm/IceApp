describe("Game UI ", function(){
	var missionString = "<mission></mission>";
	var $compile;
	var $rootScope;
	var gameInstance;

	beforeEach(function(){
		module('app');
	});

	 
	beforeEach(inject(function(_$compile_, _$rootScope_, _game_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    gameInstance = _game_;
  })); 

	it('starts mission', function(){
		var element = $compile(missionString)($rootScope);
		$rootScope.$digest();
		element.triggerHandler("click");
		gameInstance.increment();
		expect(element.html()).toContain("attack");
	});
});