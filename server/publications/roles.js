/**
 * Created by richard on 29/02/2016.
 */
Meteor.publish( 'roles', function() {
  return Collection.find();
});
