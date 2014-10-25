AccountController = RouteController.extend({
  verifyEmail : function(){
    Accounts.verifyEmail(this.params.token, function(err){
      Session.set("globalErr", undefined);
      Router.go('home');
    });
  }
});