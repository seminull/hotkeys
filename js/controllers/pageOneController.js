(function() {

    var PageOneController = function($scope) {

        $scope.searching = false;

        $scope.search = function() {
            $scope.searching = true;
            console.log("Search() was executed, is the div shown?");
        };

    };

    angular.module('hotkeys').controller('PageOneController', PageOneController);

})();
