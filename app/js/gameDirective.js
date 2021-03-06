var myApp = angular.module('app', []);

myApp.directive('mission', function (game) {
   function link(scope) {
      scope.$on('toggleMissionStatus', function () {
         if (scope.missionInProgress) {
            game.stopMission();
            scope.missionButtonText = "Start Mission";
         } else {
            game.startMission();
            scope.missionButtonText = "Stop Mission";
         }
         scope.missionInProgress = !scope.missionInProgress
      });
   };
   return {
      restrict: 'E',
      replace: true,
      link: link
   };
});

myApp.directive('test', function (game) {
   function link(scope) {
      scope.$on('setResources', function () {
         alert("whad up!");
      });
      return {
         restrict: 'E',
         replace: true,
         link: link
      };
   };
});

myApp.directive('researchFacility', function (game){
   function link (scope){
     scope.$on('research', function (type){
         alert(type);
      });
      return {
         restrict: 'E',
         replace: true,
         link: link
      };
   };
});

