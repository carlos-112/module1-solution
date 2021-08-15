(function () {
    'use strict';
    
    angular.module('LunchBreak', [])
    
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        $scope.clickIt = function(){

            if ($scope.myPlaceHolder != null) {

            var menuItems = $scope.myPlaceHolder.replace(/\s+/g, '').split(",");
            
            menuItems = menuItems.filter((a) => a);

            var count = menuItems.length;

                if (count < 4){
                    $scope.myTextBox = "Enjoy!"
                }

                else {
                    $scope.myTextBox = "Too Much!"
                }

            }

            else {
               $scope.myTextBox = "Please Enter Food!"
            }

        }

    } 
    
})();
    