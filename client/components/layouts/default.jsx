ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
Default = React.createClass({
  mixins: [ ReactMeteorData ],
  transitionName :'sweep-left',
  getMeteorData() {
    return {
      loggingIn: Meteor.loggingIn(),
      hasUser: !!Meteor.user(),
      isPublic( route ) {
        let publicRoutes = [
          'login'
        ];

        return publicRoutes.indexOf( route ) > -1;
      },
      canView() {
        return this.isPublic( FlowRouter.current().route.name ) || !!Meteor.user();
      }
    };
  },

  loading() {
    return <div className="loading"></div>;
  },
  getView() {
    return this.data.canView() ? this.props.yield : <Login />;
  },
  render() {
    return <div className="app-root">
      <AppHeader hasUser={this.data.hasUser} />

      <div className="container transition-container">
        <ReactCSSTransitionGroup transitionName={this.transitionName} transitionAppear={true}  transitionAppearTimeout={300} transitionEnterTimeout={300} transitionLeaveTimeout={300}>
        {this.data.loggingIn ? this.loading() : this.getView()}
        </ReactCSSTransitionGroup>
      </div>
    </div>;
  }
});
