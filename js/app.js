var key = "dd7e54e9349e487aada190727162810";

angular.module('Meteo', [])
  .controller('show', function($scope, $http) {

    $http.get('http://api.apixu.com/v1/forecast.json?key='+ key +'&q=Auxerre&days=4').
    then(function(response) {
      $scope.data = response.data;
      //console.log(response.data);
    });

    $http.get('http://api.apixu.com/v1/forecast.json?key='+ key +'&q=Auxerre&days=3').
    then(function(response) {
      console.log(response.data);
    });

    $scope.searchCity=function(){
      $http.get('http://api.apixu.com/v1/forecast.json?key='+ key +'&days=4&q=' + $scope.search).
      then(function(response) {
        $scope.data = response.data;
      });
    }
});
