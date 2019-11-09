'use strict';
var messengerModule = angular.module("messenger", ['ngRoute']);

messengerModule.config(['$routeProvider',function($routeProvider){
	console.log("RouteProvider called");
	
	$routeProvider.when('/viewAllMessage',{
			templateUrl:'/pages/viewAllMessage.html',
			controller:'messengerHome'	
		}).when('/viewMessage',{
			templateUrl:'/pages/viewMessage.html',
            controller: 'ViewMessage'
		}).when('/createMessage',{
			templateUrl: '/pages/createMessage.html',
			controller:'CreateMessageCtrl'
		}).when('/viewMyMessage',{
			templateUrl: '/pages/viewAllMessage.html',
			controller:'ViewMyMessageCtrl'
		}).when('/editMessage',{
			templateUrl: '/pages/editMessage.html',
			controller:'EditMessageCtrl'
		}).otherwise({
			redirectTo:'/viewAllMessage'
		});
}]);