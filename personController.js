function personController($scope) {

    // vars
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.rateDay = 350;
    $scope.workedDays = 5;

    $scope.person = {
        age: 30,
        petNames: ["moo", "oz"],
        cars: [
            {
                type: "mini",
                engineSizeCC: "1000",
                hasTurbo: false
            },
            {
                type: "citroen",
                engineSizeCC: "2000",
                hasTurbo: true
            }
        ]
    };

    // funcs
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }


    console.log('$scope', $scope);
}