(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
        var vm = this; 
        vm.todos = [];
        vm.addTodo = addTodo;

        vm.alphabetSort = '';

        vm.sortTodo = sortTodo;
        vm.highTodo = highTodo;
        vm.lowTodo = lowTodo;

        ///////////////////////////////////////////////////////////////////

        function addTodo() {
            var obj = {text: vm.newTodo, class: vm.newClass}

            switch (obj.class) {
                case '0':
                    obj.color = "list-group-item-info"
                    break
                case '1':
                    obj.color = "list-group-item-warning"
                    break
                case '2':
                    obj.color = "list-group-item-danger"
                    break
                default:
                    obj.color = "list=group-item-info"
            }
            vm.todos.push(obj);

            vm.newTodo = '';
        };

        function highTodo() {
            vm.alphabetSort = '-class';
        }

        function lowTodo() {
            vm.alphabetSort = 'class';
        }

        function sortTodo() {
            vm.alphabetSort = 'text';
        }
    }
})();