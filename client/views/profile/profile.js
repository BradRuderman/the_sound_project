Template.profile.events={
  'click #btnLogout' : function(e){
    e.preventDefault();
    Meteor.logout(function(err){
      Router.go("home");
    });
  },
  'click #verifyEmail' : function(e){
     Meteor.call("sendConfirmEmail",function(err,res){
      if(err){
        Session.set("globalErr", err);
      } else {
        Session.set("globalErr", "sent verification email");
      }
     });
  }
}

Template.profile.email = function(){
  return Meteor.user().emails[0];
};


Template.profile.username = function(){
  return Meteor.user().username;
};