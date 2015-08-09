var analytics = new Firebase('https://talixanalytics.firebaseio.com/');
var activeUsers = analytics.child('activeUsers');

activeUsers.push({
  path: window.location.pathname,
  arrivedAt: Firebase.ServerValue.TIMESTAMP,
  userAgent: navigator.userAgent
});

var totalVisitors = analytics.child('totalVisitors');
totalVisitors.transaction(function(currentData) {
  return currentData + 1;
});