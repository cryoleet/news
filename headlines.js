var app = angular.module("headlines", []);

app.controller("display", function($scope, $http) {


    $scope.articles = [];

    $scope.view_type = "overview";

    $scope.countries = [
        { id: 'ch', name: 'Switzerland' },
        { id: 'cn', name: 'China' },
        { id: 'co', name: 'Colombia' },
        { id: 'cu', name: 'Cuba' },
        { id: 'cz', name: 'Czech Republic' },
        { id: 'de', name: 'Germany' },
        { id: 'eg', name: 'Egypt' },
        { id: 'fr', name: 'France' },
        { id: 'gb', name: 'United Kingdom' },
        { id: 'gr', name: 'Greece' },
        { id: 'hk', name: 'Hong Kong' },
        { id: 'hu', name: 'Hungary' },
        { id: 'id', name: 'Indonesia' },
        { id: 'ie', name: 'Ireland' },
        { id: 'il', name: 'Israel' },
        { id: 'in', name: 'India' },
        { id: 'it', name: 'Italy' },
        { id: 'jp', name: 'Japan' },
        { id: 'kr', name: 'South Korea' },
        { id: 'lt', name: 'Lithuania' },
        { id: 'lv', name: 'Latvia' },
        { id: 'ma', name: 'Morocco' },
        { id: 'mx', name: 'Mexico' },
        { id: 'my', name: 'Malaysia' },
        { id: 'ng', name: 'Nigeria' },
        { id: 'nl', name: 'Netherlands' },
        { id: 'no', name: 'Norway' },
        { id: 'nz', name: 'New Zealand' },
        { id: 'ph', name: 'Philippines' },
        { id: 'pl', name: 'Poland' },
        { id: 'pt', name: 'Portugal' },
        { id: 'ro', name: 'Romania' },
        { id: 'rs', name: 'Serbia' },
        { id: 'ru', name: 'Russia' },
        { id: 'sa', name: 'Saudi Arabia' },
        { id: 'se', name: 'Sweden' },
        { id: 'sg', name: 'Singapore' },
        { id: 'si', name: 'Slovenia' },
        { id: 'sk', name: 'Slovakia' },
        { id: 'th', name: 'Thailand' },
        { id: 'tr', name: 'Turkey' },
        { id: 'tw', name: 'Taiwan' },
        { id: 'ua', name: 'Ukraine' },
        { id: 'us', name: 'United States' },
        { id: 've', name: 'Venezuela' },
        { id: 'za', name: 'South Africa' }
    ];


    $scope.fetchHead = function() {
    console.log("In fetchHead")
    var url = 'https://newsapi.org/v2/top-headlines?country='+ $scope.country_code +'&apiKey=84e9019ac272472cab269d40cae1b6f4';
    console.log("API URL:", url); // Debug statement to check the API URL
    $http.get(url)
    .then(function(response) {
        // Handle successful response
        console.log("API Response:", response.data); // Debug statement to check the API response
        $scope.articles = response.data.articles;
        console.log("Articles:", $scope.articles); // Debug statement to check the articles
    })
    .catch(function(error) {
        // Handle error
        console.error('Error fetching data:', error);
    });
}


});