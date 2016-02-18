FlowRouter.notFound = {
  action() {
    ReactLayout.render( Default, { yield: <NotFound /> } );
  }
};
Accounts.onLogin( () => {
  if ( Meteor.isClient ) {
    let currentRoute = FlowRouter.current(),
      path           = currentRoute.path;

    return path !== '/login' ? FlowRouter.go( path ) : FlowRouter.go( '/' );
  }
});
