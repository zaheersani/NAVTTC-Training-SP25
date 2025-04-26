$(document).ready(function() {

    getTodos();
    getUsers();

    function getTodos() {
        $.get('https://jsonplaceholder.typicode.com/todos', function(data) {
            console.log(data);
        });
    }

    function getUsers() {
        $.get('https://jsonplaceholder.typicode.com/users', function(data) {
            console.log(data);
        });
    }
});