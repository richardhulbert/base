Person = React.createClass({
  showRoles(){
    if(Array.isArray(this.props.person.roles)){
      return this.props.person.roles.join();
    }
    return '';
  },
  showEmails(){
    let addresses = ''
    console.log(this.props.person.emails)
    for (var i=0;i<this.props.person.emails.length;i++){
      var m =  this.props.person.emails[i];
      addresses+= m.verified?m.address:m.address+"(unverified)";
    }
    return addresses
  },
  render() {

    return (

      <tr>
        <td>{this.props.person.profile.first_name+' '+this.props.person.profile.last_name}</td>
        <td>{this.showEmails()}</td>
        <td>{this.showRoles()}</td>
      </tr>
    );
  }
});
