var app = angular.module("search", []);

app.controller("find", function($scope, $http) {

$scope.articles = [];

$scope.go = function() {

    let keyword = $scope.keyword;
    let from = $scope.fromDate.toISOString().split('T')[0];
    let to = $scope.toDate.toISOString().split('T')[0];
    let sort = $scope.sortby;

    var url = `https://newsapi.org/v2/everything?q=${keyword}&from=${from}&to=${to}&sortBy=${sort}&apiKey=84e9019ac272472cab269d40cae1b6f4`;
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