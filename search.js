var app = angular.module("search", []);

app.controller("find", function($scope, $http) {

$scope.articles = [];
$scope.sortby = "relevancy";

$scope.$watchGroup(['fromDate', 'toDate'], function(newValues) {
    var fromDate = new Date(newValues[0]);
    var toDate = new Date(newValues[1]);


    if (toDate < fromDate) {
        $scope.searchForm.toDate.$setValidity('beforeDate', false);
    } 
    else {
        $scope.searchForm.toDate.$setValidity('beforeDate', true);
    }

  });

$scope.go = function() {

    let keyword = $scope.keyword;
    let from = "";
    if ($scope.fromDate)
    {
        from = "&from=" + $scope.fromDate.toISOString().split('T')[0];
    }
    let to = "";
    if ($scope.toDate)
    {
        to = "$to=" + $scope.toDate.toISOString().split('T')[0];
    }
    let sort = $scope.sortby;
    var url = `https://newsapi.org/v2/everything?q=${keyword}${from}${to}&sortBy=${sort}&apiKey=84e9019ac272472cab269d40cae1b6f4`;
    console.log("API URL:", url); // Debug statement to check the API URL
    $http.get(url)
    .then(function(response) {
        $scope.articles = response.data.articles;
        console.log($scope.articles);
    })
    .catch(function(error) {
        // Handle error
        console.error('Error fetching data:', error);
    });

}


});