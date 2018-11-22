'use strict';
(function() {
    angular.module('app').component('edit', {
        templateUrl: 'component/component.html',
        controller: EditController,
        controllerAs: 'vm',
        bindings: {
            fieldValue: '=',
            fieldType: '@',
            onUpdate: '&'
        }
    });

    function EditController() {
        var vm = this;
        vm.editMode = false;
        activate();
        vm.onModeChange = function() {
            if (vm.editMode) {
                vm.onUpdate({ value: vm.fieldValue });
                vm.fieldValueCopy = vm.fieldValue;
            }
            vm.editMode = !vm.editMode;
        };

        function activate() {
            vm.fieldValueCopy = vm.fieldValue;
            // Set a default fieldType
            // if (!vm.fieldType) {
            //     vm.fieldType = 'text';
            // }
        }
    }
})();