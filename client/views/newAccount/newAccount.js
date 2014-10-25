Template.newAccount.events = {
  "submit form" : function(e){
    e.preventDefault();
    var email = $("#inputEmail").val();
    if (!email || email == ''){
      Session.set("newAccountError", "email cannot be blank");
      return;
    };
    var password = $("#inputPassword").val();
    if (!password || password == ''){
      Session.set("newAccountError", "password cannot be blank");
      return;
    };
    if (Session.get("createUser")){
      var userName = $("#inputUsername").val();
      if (!userName || userName == ''){
        Session.set("newAccountError", "username cannot be blank");
        return;
      };
      var opt = {
        username : userName,
        email : email,
        password : password
      };
      Accounts.createUser(opt, function(err){
        if(err){
          Session.set("newAccountError", err.reason);
          return;
        } else {
          Session.set("newAccountError", null);
          Meteor.call("sendConfirmEmail",function(err,res){
            Router.go("home");
          });
        }
      });      
    } else {
      Meteor.loginWithPassword(email, password, function(err){
        if(err){
          Session.set("newAccountError", err.reason);
          return;
        } else {
          Session.set("newAccountError", null);
          Router.go("home");
        }
      });
    }

  },
  'click #btnCreateAccount': function(e){
    e.preventDefault();
    Session.set("newAccountError", null);
    Session.set("createUser", true);
  },
  'click #btnLogin' : function(e){
    e.preventDefault();
    Session.set("newAccountError", null);
    Session.set("createUser", undefined);
  }
};


Template.newAccount.created = function(){
  Session.set("newAccountError", null);
}

Template.newAccount.error = function(){
  return Session.get("newAccountError");
};

Template.newAccount.createUser = function(){
  return Session.get("createUser");
}
