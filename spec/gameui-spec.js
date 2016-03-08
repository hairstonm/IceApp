describe("Game UI ", function(){
	var missionString = "<mission></mission>";
	var $compile;
	var $rootScope;

	beforeEach(function(){
		module('app');
	});

	 
	beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  })); 

	it('starts mission', function(){
		var element = $compile(missionString)($rootScope);
		$rootScope.$digest();

		element.triggerHandler("click");
		console.log("test" +element.html());
		expect(element.html()).toContain("attack");
	});
});