'use strict';
(function() {
    angular.module('app').config(function($routeProvider, $stateProvider) {
        // $routeProvider
        // route for the home page
        /*.when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController',
            controllerAs: 'vm'
        })*/

        // route for the about page
        /*.when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutController',
            controllerAs: 'vm'
        })*/

        // route for the people page
        /*.when('/about/people/', {
            templateUrl: 'views/people.html',
            controller: 'PeopleController',
            controllerAs: 'vm'
        });*/
        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'MainController',
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutController',
                controllerAs: 'vm'
            })
            .state('about.people', {
                url: '/people',
                views: {
                    '@': {
                        templateUrl: 'views/people.html',
                        controller: 'PeopleController',
                        controllerAs: 'vm'
                    }
                }

            })
    });
})();