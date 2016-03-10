PeopleTable = React.createClass({
  render() {
    return (

        <table className="table table-bordered">
          <thead>
          <tr>
            <th>Email Address</th>
            <th colSpan="2">Roll</th>
          </tr>
          </thead>
          <tbody>
          {this.props.people.map( ( person, index ) => {
            return <Person key={index} person={person} />;
          })}
          </tbody>
        </table>

    );
  }
});
