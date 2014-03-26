'use strict';

/* App Module */
var app = angular.module('anleneApp', [
    'ngRoute',
    'ngControllers',
    'ngAnimate',   
    'ngDirectives'
    // 'ngFilters',
]);

app.run(['$location', '$rootScope', '$timeout', function($location, $rootScope, $timeout) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        // when change route, page always goes top (jquery attached)
        $(window).scrollTop(0);

        // metadata
        $rootScope.title = current.$$route.title;
        $rootScope.keywords = current.$$route.keywords;        
        $rootScope.description = current.$$route.description;

        // Hidden footer effect on main page
        if($location.path() == '/') {
            $rootScope.hideFooter = true;
        } else {
            $rootScope.hideFooter = false;
        }
        // play video button for mobile version
        if($location.path() == '/made-of-more') {
            $rootScope.hidePlayerBtn = false;
        } else {
            $rootScope.hidePlayerBtn = true;
        }

    });
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    // $locationProvider.html5Mode(true);

    $routeProvider
	    .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            title: 'Anlene | Main',
            keywords: 'Main',
            description: 'Main'
        })
        .when('/complete-submission', {
            templateUrl: 'views/complete-submission.html',
            controller: 'CompleteSubmissionCtrl',
            title: 'Anlene | Submission successful',
            keywords: 'Content',
            description: 'Content'
        })
	    .otherwise({
        	redirectTo: '/'
        });
    }]);