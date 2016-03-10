Users = React.createClass({
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
      return <Loading />;
    } else {
      return (
        <div className="table-responsive">
          <h4 className="page-header">Users</h4>
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>Email Address</th>
              <th colSpan="2" className="text-center">Role</th>
            </tr>
            </thead>
            <tbody>
            {this.data.people.map( ( person, index ) => {
              return <Person key={index} person={person} />;
            })}
            </tbody>
          </table>
        </div>
      );
    }
  }
});
