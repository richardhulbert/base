AuthenticatedNavigation = React.createClass({
  currentUserEmail() {
    return Meteor.user().emails[0].address;
  },
  logout( event ) {
    event.preventDefault();
    return Meteor.logout( () => FlowRouter.go( '/login' ) );
  },
  render() {
    return <div id="navbar-collapse" className="collapse navbar-collapse">
      <ul className="nav navbar-nav">
        <li className={FlowHelpers.currentRoute( 'hidden' )}><a href="/hidden">Hidden</a></li>
        <li className={FlowHelpers.currentRoute( 'hidden' )}><a href="/dashboard">dashboard</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" className="user-profile-toggle dropdown-toggle clearfix" data-toggle="dropdown">
            {this.currentUserEmail()}
            <span className="caret"></span>
          </a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="/preferences">Account Preferences</a></li>
            <li className="logout" onClick={this.logout}><a href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>;
  }
});
