RoleGroup = React.createClass({
 _clickfunction:function(event){
 console.log(this.props.role,this.props.person._id)
  },
  render(){
    return (
      <div className="role pill">
        {this.props.role}
      <button className="role-button btn btn-danger btn-xs" onClick={this._clickfunction}>
        <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
      </button>
      </div>
    )
  }
});
