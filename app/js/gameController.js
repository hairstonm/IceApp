var myApp = angular.module('app', []);

myApp.controller('GameController', function($scope,game){

	$scope.startMission = function(){
		game.startMission();
	}
});