Dashboard = React.createClass({
  mixins: [ ReactMeteorData ],
  getMeteorData() {
    let subscription = Meteor.subscribe('users');

    return {
      isLoading: !subscription.ready(),
      people: Meteor.users.find().fetch()
    };
  },

  render() {
    if ( this.data.isLoading ) {

      return <Loading key="dashboard"/>;
    } else {
      return (
        <PeopleTable key="dashboard" people={this.data.people} />
      );
    }
  }
});
