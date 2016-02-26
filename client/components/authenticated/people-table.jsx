PeopleTable = React.createClass({
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
          <tr>
            <th>Name</th>
            <th>Email Address</th>
            <th>Roll</th>
          </tr>
          </thead>
          <tbody>
          {this.props.people.map( ( person, index ) => {
            return <Person key={index} person={person} />;
          })}
          </tbody>
        </table>
      </div>
    );
  }
});
