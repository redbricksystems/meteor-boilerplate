// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Meteor TDD',
  DESCRIPTION: 'Startup app for TDD in Meteor using Jasmine framework'
};
