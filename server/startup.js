Meteor.startup(
  function(){
    createUsers ();
  }
);


function createUsers () {
  var users

  if (Meteor.users.find().fetch().length === 0) {

    console.log('Creating users: ');

    users = [
      {first_name: "Jane",last_name:"Doe", email: "jane.doe@example.com", roles: []},
      {first_name: "Hamza",last_name:"Bing", email: "hamza.bing@codevanilla.com", roles: ['customer']},
      {first_name: "Alice",last_name:"Bear", email: "alice.bear@codevanilla.com", roles: ['manage-users']},
      {first_name: "Richard",last_name:"Hulbert", email: "richard@richardhulbert.com", roles: ['admin']}
    ];

    _.each(users, function (userData) {
      var id

      console.log(userData);

      id = Accounts.createUser({
        email: userData.email,
        password: "apple1",
        profile: {first_name: userData.first_name,last_name:userData.last_name}
      });

      // email verification
      Meteor.users.update({_id: id},
        {$set: {'emails.0.verified': true}});

      Roles.addUsersToRoles(id, userData.roles);

    });
  }
}
