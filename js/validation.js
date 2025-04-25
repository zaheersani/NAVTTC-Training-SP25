$().ready(function() {
    $("#username").on("input", function() {
        enableButton();
    });
    $("#password").on("input", function() {
        enableButton();
    });
    
    function enableButton() {
        // Check if both username and password fields are filled
        if ($("#username").val().length > 0 && $("#password").val().length > 0) {
            $("button").removeAttr("disabled");
        } else {
            $("button").prop("disabled", true);
        }
    }

});