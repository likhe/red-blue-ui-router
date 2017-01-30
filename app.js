const app = angular.module("RedBlue", ["ui.router"]);

app.config(function($stateProvider) {
  const blueState = {
    name: 'blue',
    url: '/blue',
    templateUrl: 'partials/blue.html'
  };

  const redState = {
    name: 'red',
    url: '/red',
    templateUrl: 'partials/red.html'
  };

  $stateProvider.state(blueState);
  $stateProvider.state(redState);
});
