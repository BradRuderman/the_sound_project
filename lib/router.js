Router.configure({
  notFoundTemplate: 'error' // this will render
});


Router.map(function() {

  this.route('home', {
    path: '/',
    template: 'home',
    layoutTemplate: 'default'
  });

  this.route('about', {
    path: '/about',
    template: 'about',
    layoutTemplate: 'default'
  });

  this.route('upload', {
    path: '/upload',
    template: 'upload',
    layoutTemplate: 'default'
  });

  this.route('accounts', {
    path: '/accounts',
    template: 'accounts',
    layoutTemplate: 'default'
  });

/*
  this.route('hate', {
    path: '/hate/:_id',
    template : 'hatePage',
    layoutTemplate: 'default',
    waitOn: function() { return Meteor.subscribe('hate', this.params._id) && Meteor.subscribe('hate_comments')},
    data: function() { return Hates.findOne(this.params._id); }
  });

  this.route('add', {
    path: '/hate',
    template: 'addHate',
    layoutTemplate: 'default',

    onBeforeAction: function(pause) {
      if (!Meteor.user()) {
        // render the login template but keep the url in the browser the same
        this.render('accounts');

        // pause this rendering of the rest of the before hooks and the action function 
        pause();
      }
    }

  });


  this.route('verifyEmail', {
    path: '/accounts/verify-email/:token',
    controller : 'AccountController',
    action : 'verifyEmail'
  });
*/
});

