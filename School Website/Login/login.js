﻿function login() {
    var email = document.getElementById('txtEmail');
    var password = document.getElementById('txtPassword');
    var msg = document.getElementById('lblMsg');
    var student = {
        email: "baburajnish@gmail.com",
        password: "raj1234"
    };
    if (email.value == student.email && password.value == student.password) {
        msg.innerHTML = "You successfull logged in";

    }
    else {
        msg.innerHTML = "Your Username or Password is incorrect.";
    }
    if (email.value == "" && password.value == "") {
        msg.innerHTML = "Please Enter your Username or Password.";
    }
}

