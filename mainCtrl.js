angular.module('quoteBook').controller('mainCtrl', function($scope, dataServices) {
$scope.quotes = dataServices.getQuotes();
$scope.addNewQuote = dataServices.addData;
$scope.removeData = dataServices.removeData;
});
