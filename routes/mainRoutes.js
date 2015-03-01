// Home Route
Router.route('/', function () {
  this.render('mainBodyLayout');
  SEO.set({ title: 'Hello World - ' + Meteor.App.NAME });
});
