function checkInputs() {
    const username = $.trim($('#username').val());
    const password = $.trim($('#password').val());
    const loginButton = $('#loginButton');
  
    if (username && password) {
      loginButton.prop('disabled', false);
    } else {
      loginButton.prop('disabled', true);
    }
  }
  