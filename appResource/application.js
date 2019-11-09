'use strict';
var messengerModule = angular.module("messenger", ['ngRoute']);

messengerModule.config(['$routeProvider',function($routeProvider){
	console.log("RouteProvider called");
	
	$routeProvider.when('/viewAllMessage',{
			templateUrl:'/hostingTest/pages/viewAllMessage.html',
			controller:'messengerHome'	
		}).when('/viewMessage',{
			templateUrl:'/hostingTest/pages/viewMessage.html',
            controller: 'ViewMessage'
		}).when('/createMessage',{
			templateUrl: '/hostingTest/pages/createMessage.html',
			controller:'CreateMessageCtrl'
		}).when('/viewMyMessage',{
			templateUrl: '/hostingTest/pages/viewAllMessage.html',
			controller:'ViewMyMessageCtrl'
		}).when('/editMessage',{
			templateUrl: '/hostingTest/pages/editMessage.html',
			controller:'EditMessageCtrl'
		}).otherwise({
			redirectTo:'/viewAllMessage'
		});
}]);
