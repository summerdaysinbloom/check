var app = angular.module('ngControllers', []);

app
.controller('MainCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
        console.log('[C] MainCtrl');
    }
])
.controller('CompleteSubmissionCtrl', ['$scope', '$location', '$http',
    function($scope, $location, $http) {
        console.log('[C] CompleteSubmissionCtrl');
        var video=document.getElementById("video-player"); 

        $scope.closeLayer = function() {
        	$scope.popupLayer = false;
        	video.pause();
        }
    }
]);