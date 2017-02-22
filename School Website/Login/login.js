function login() {
    var email = document.getElementById('txtEmail');
    var password = document.getElementById('txtPassword');
    var msg = document.getElementById('lblMsg');
    var savedEmail = "baburajnish@gmail.com";
    var savedPassword = "raj1234";

    if (email.value == savedEmail && password.value == savedPassword) {
        msg.innerHTML = "You successfull logged in";

    }
    else {
        msg.innerHTML = "Your Username or Password is incorrect.";
    }
    if (email.value == "" && password.value == "") {
        msg.innerHTML = "Please Enter your Username or Password.";
    }
}