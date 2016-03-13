const authenticatedRedirect = (ctx,redirect) => {
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( 'login' );
  }
};

const blockUnauthorizedAdmin = ( context, redirect ) => {
  if ( Meteor.userId() && !Roles.userIsInRole( Meteor.userId(), 'admin' ) ) {
    Modules.both.redirectUser( { redirect: redirect } );
  }
}
const blockUnauthorizedManager = ( context, redirect ) => {
  if ( Meteor.userId() && !Roles.userIsInRole( Meteor.userId(), [ 'admin', 'manager' ] ) ) {
    Modules.both.redirectUser( { redirect: redirect } );
  }
};

const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

authenticatedRoutes.route( '/', {
  name: 'index',
  action() {
    ReactLayout.render( Default, { yield: <Index /> } );
  }
});

authenticatedRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    ReactLayout.render( Default, { yield: <Dashboard key={"dashboard_key"}   /> } );
  }
});

authenticatedRoutes.route( '/hidden', {
  name: 'hidden',
  action() {
    ReactLayout.render( Default, { yield: <Hidden key={"hidden_key"}  /> } );
  }
});

authenticatedRoutes.route( '/users', {
  name: 'users',
  triggersEnter: [ blockUnauthorizedAdmin ],
  action() {
    ReactLayout.render(Default, { yield: <Users /> } );
  }
});

authenticatedRoutes.route( '/managers', {
  name: 'managers',
  triggersEnter: [ blockUnauthorizedManager ],
  action() {
    ReactLayout.render( Default, { yield: <Managers /> } );
  }
});

authenticatedRoutes.route( '/employees', {
  name: 'employees',
  action() {
    ReactLayout.render( Default, { yield: <Employees /> } );
  }
});
