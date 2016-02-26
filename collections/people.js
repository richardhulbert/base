/**
 * Created by richard on 21/02/2016.
 */
People = new Meteor.Collection( 'people');

People.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

People.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let PeopleSchema = new SimpleSchema({
  "first_name": {
    type: String,
    label: "The first name of the person."
  },
  "last_name": {
    type: String,
    label: "The last name of the person."
  },
  "email": {
    type: String,
    label: "The email address of the person."
  }
});

People.attachSchema( PeopleSchema );
