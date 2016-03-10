Person = React.createClass({
  showRoles(){
    if(Array.isArray(this.props.person.roles)){
      return this.props.person.roles.join();
    }
    return '';
  },
  showEmails(){
    let addresses = '';
    for (var i=0;i<this.props.person.emails.length;i++){
      var m =  this.props.person.emails[i];
      addresses+= m.verified?m.address:m.address+"(unverified)";
    }
    return addresses
  },
  render() {

    return (
      <tr>
        <td>{this.showEmails()}</td>
        <td>{this.showRoles()}</td>
        <td>
          <button className="role-button btn btn-primary btn-xs" data-toggle="modal" data-target=".bs-example-modal-lg">
          <span className="glyphicon glyphicon-edit" aria-hidden="true" />
          </button>
        </td>
      </tr>
    );
  }
});
