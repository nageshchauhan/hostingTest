messengerModule.factory("messengerService",['$http','$q', function(http, q){
    
	var url = '/messenger/webapi/messages/';
	
	return {
    	
    fetchAllMessages :function(){
          return http.get(url).then(
	            function(response){
	                return response.data;
	            },
	            function(errResponse){
	                console.error('Error while fetching all messages');
	                return q.reject(errResponse);
	            }
          );
      },
      
      fetchBlog: function(blogId){
    	  return http.get(url+blogId).then(
    			  function(response){
    				  return response.data;
    			  },
    			  function(errResponse){
    				  console.error('Error while fetching a blog');
    	              return q.reject(errResponse);
    			  }
    	  );
      },
      
      createMessage: function(message){
    	  return http.post(url,message).then(
    			  function(response){
    				  return response.data;
    			  },
    			  function(errResponse){
    				  console.error('Error while creating a message');
    	              return q.reject(errResponse);
    			  }
    	  );
      },
      
      updateBlog: function(message){
    	  return http.put(url+message.id, message).then(
    			  function(response){
    				  return response.data;
    			  },
    			  function(errResponse){
    				  console.log('Error while updating blog');
    				  return q.reject(errResponse);
    			  }
    	  );
      }
      
    };
}]);

messengerModule.factory('CommonService', function () {
	var headInfo = new Map();;
	return {
	    setData: function (key, data) {
	        headInfo.set(key,data);
	    },
	    getData: function (key) {
	        return headInfo.get(key);
	    },
	    removeData: function(key){
	    	headInfo.remove(key);
	    }
	};
});