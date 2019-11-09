messengerModule.controller('ViewMessage',['$scope','$location','messengerService','CommonService',function(scope, $location, messengerService, cmnService){
	scope.heading='View Blog\'s';
	scope.message = {};
	scope.fetchMessage = function(messageId){
		messengerService.fetchBlog(messageId).then(
				function(message){
					scope.message = message;
				},
				function(errMessage){
					console.log("Error while fetching blog")
				}
		);
	};
	
	if(cmnService.getData('messageId')){
		scope.fetchMessage(cmnService.getData('messageId'));	
	}else{
		$location.path('/')
	}
}]);

messengerModule.controller("messengerHome", ['$scope','$location','messengerService','CommonService', function (scope, $location, messengerService,cmnService) {
	scope.heading='View All Blog\'s';
	scope.messages = [];
	
    
	scope.fetchAllMessages = function(){
        messengerService.fetchAllMessages()
        .then(
            function(messages){
            	scope.messages = messages;
            },
            function(errResponse){
                console.log("Error while fetching all messages");
            }
        );
    }
    
	scope.fetchAllMessages();

	scope.viewDetailedBlog = function(messageId){
		console.log("clicked message id: "+messageId);
		cmnService.setData('messageId',messageId);
		$location.path('/viewMessage')
	};
	
	scope.editBlog = function(messageId){
		console.log("edit clicked for msg id: "+messageId)
		cmnService.setData('messageId',messageId);
		$location.path('/editMessage')
	}
}]);

messengerModule.controller('CreateMessageCtrl',['$scope','$location','messengerService','CommonService', function (scope, $location, messengerService,cmnService) {
	scope.heading="Create Blog";
	
	scope.message={};
	scope.message.author='Nagesh';
	
	scope.error={};
	
	scope.createMessage = function(){
		scope.message.created = new Date().getTime();
		console.log('creating message');
		messengerService.createMessage(scope.message).then(
			function(response){
				cmnService.setData('messageId',response.id);
				$location.path('/viewMessage');
			},
			function(errResponse){
				console.log("Error while fetching all messages");
			}
		);
	};
	
	scope.validateMessage = function(){
		//on successful validation call createMessage
		console.log('validating message-'+scope.message.message);
		if(!scope.message.message || scope.message.message.trim()==""){
			scope.error.errMsg="Field is mandatory";
			scope.error.errExist=true;
			return;
		}
		scope.error.errExist=false;
		scope.error.errMsg="";
		scope.createMessage();
	}
}]);

messengerModule.controller('ViewMyMessageCtrl',['$scope', function(scope){
	scope.heading='View My Blog\'s';
}]);

messengerModule.controller('EditMessageCtrl',['$scope','$location','messengerService','CommonService',function(scope, $location, messengerService, cmnService){
	scope.heading='Edit Blog';
	scope.message = {};
	
	scope.fetchBlog = function(messageId){
		messengerService.fetchBlog(messageId).then(
			function(message){
				scope.message = message;
			},
			function(errMessage){
				console.log("Error while fetching blog")
			}
		);
	};
	
	if(cmnService.getData('messageId')){
		scope.fetchBlog(cmnService.getData('messageId'));	
	}else{
		$location.path('/')
	}
	
	scope.updateBlog = function(){
		
		messengerService.updateBlog(scope.message).then(
			function(message){
				scope.message = message;
			},
			function(errMessage){
				console.log('Error while updating blog');
			}
		);
	}
}]);


