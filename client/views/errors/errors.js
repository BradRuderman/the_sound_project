Template.errors.error = function(){
  return Session.get("globalErr");
}

Template.errors.events = {
  'click' : function(e){
    Session.set("globalErr", undefined);
  }
}