/**
 * Created by richard on 29/02/2016.
 */

let route = ( options ) => {
  return options && options.redirect ? _sendUserToDefault( options.redirect ) : _sendUserToDefault();
};

let _sendUserToDefault = ( redirect ) => {
  let roles = _getCurrentUserRoles();

  if ( _userHasRole(roles,'admin')  )    {
    _redirectUser( 'users', redirect );
  }

  if ( _userHasRole(roles,'manager') )  {
    _redirectUser( 'managers', redirect );
  }

  if ( _userHasRole(roles,'employee') ) {
    _redirectUser( 'employees', redirect );
  }
};

let _getCurrentUserRoles = () => {
  return Roles.getRolesForUser( Meteor.userId() );
};

let _userHasRole = (roles,role) =>{
 if( $.inArray(roles,role) !=-1)return true;
   return false;
}

let _redirectUser = ( path, redirect ) => {
  if ( redirect ) {
    redirect( path );
  } else {
    FlowRouter.go( FlowRouter.path( path ) );
  }
};

Modules.both.redirectUser = route;
