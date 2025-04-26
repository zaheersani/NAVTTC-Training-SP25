$(document).ready(function() {
    // TODO: Add functionality for Users and Posts, similar to Todos
    
    getTodos();
    getUsers();

    function getTodos() {
        // Fetch data from the JSONPlaceholder API for todos
        $.get('https://jsonplaceholder.typicode.com/todos', function(data) {
            // Remove existing list items before appending new ones
            $('#todo-list').empty();
            // Set todos variable to the fetched data
            var todos = data;
            // Loop through the data and append each todo to the list
            for (var i = 0; i < data.length; i++) {
                var todo = data[i];
                // Append each todo to the list with a unique id
                $('#todo-list').append('<li class="list-group-item" data-bs-toggle="modal" data-bs-target="#exampleModal" id="' + i + '">' + todo.title + '</li>');
            }

            // add click event to each li element after appending
            $('#todo-list li').click(function() {
                // fetch id attribute from the clicked li element
                var id = $(this).attr('id');
                // set title and body of the modal
                $(".modal-title").text("Todo ID: " + (parseInt(id)+1));
                $(".modal-body").text(todos[id].title);
            });
        });
    }

    function getUsers() {
        $.get('https://jsonplaceholder.typicode.com/users', function(data) {
            console.log(data);
        });
    }
});