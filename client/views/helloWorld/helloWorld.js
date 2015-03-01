/**
*  Service that will contain all the functions which will return data to helper functions
*  Service: helloWorldService
*/
helloWorldService = {
  getContent: function(){
  	return "Hello World"
  }
};

Template['helloWorld'].helpers({
  content: function() {
    return helloWorldService.getContent();
  }
});

Template['helloWorld'].events({

});
