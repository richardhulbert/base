/**
 * Created by richard on 21/02/2016.
 */
Meteor.publish( 'dashboard', function() {
  return People.find();
});
