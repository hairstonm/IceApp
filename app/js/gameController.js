var myApp = angular.module('app', []);

myApp.directive('mission', function(game){
	// var link = function($scope){
	// 	$scope.startMission = function(){
	// 		game.startMission();
	// 	}
	function MissionCtrl(game) {
		
		this.startMission = function(){
			game.startMission();
		}
	};
	
	return {
		template: [
		 '<form>',
		 	'<button ng-click="mission.startMission()">this is a button</button>',
		 '</form>'
		 ].join(''),
		 // scope: {},
		 controller: MissionCtrl,
		 controllerAs: 'mission',
		 bindToController:true
	};
});

// myApp.controller('GameController', function($scope,game){

// 	$scope.startMission = function(){
// 		game.startMission();
// 	}
// });
