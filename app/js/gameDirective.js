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

    myApp.directive('test', function (game) {
        function link(scope) {
            scope.$on('setResources', function () {
                alert("whad up!");
            });
        };
    });
        return {
            restrict: 'E',
            replace: true,
            link: link
        };
    });

