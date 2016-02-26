/**
 * Created by richard on 20/02/2016.
 */
Meteor.publish( 'userslist', function() {
  let isAdmin = Roles.userIsInRole( this.userId, 'admin' );

  if ( isAdmin ) {
    return  Meteor.users.find( {}, { fields: { "emails.address": 1, "profile": 1,"roles": 1 } } )
  } else {
    return null;
  }
});
