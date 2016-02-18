const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated'
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
    ReactLayout.render( Default, { yield: <Dashboard /> } );
  }
});

authenticatedRoutes.route( '/hidden', {
  name: 'hidden',
  action() {
    ReactLayout.render( Default, { yield: <Hidden /> } );
  }
});
