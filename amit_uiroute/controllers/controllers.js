    // create the controller and inject Angular's $scope
    angular.module('app').controller('MainController', function() {
        var vm = this;
    })
    
    .controller('AboutController', function() {
        var vm = this;
    })
    
    .controller('PeopleController', function() {
        var vm = this;
        vm.data = { Id: '123', Name: 'amit', Location: 'Banglore' };
        vm.showValue = true;
        vm.toggleValue = function() {
            vm.showValue = !vm.showValue;
        };
        vm.update = function(value) {
            vm.data.Name = value;
            vm.showValue = true;
        };
    });