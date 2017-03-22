/// <reference path="C:\Users\babur\Desktop\School Website\School Website\Registration Page/RegistrationPage.html" />
$(document).ready(function() {
    $("#msgDiv").hide();
});

function login() {
    var email = $('#txtEmail');
    var password =$('#txtPassword');
  
    var repository = new Repository();
    var users = repository.getRegistaredStudent();

    for (var i = 0; i < users.length; i++) {

        if (email.val() == "" && password.val() == "") {

            $("#msgDiv").html("Please Enter  Username and Password.").show();
            return;
        }
        if (email.val() == users[i].Email && password.val() == users[i].Password) {

            $("#msgDiv").html("You are successfully logged in!").show();
            email.val("");
            password.val("");

            return;
        } else {
            $("#msgDiv").html("Please enter valid email id or password.").show();
            return;
        }
       
       
    }
   
}

function goTo(parameters) {
    window.location.href = "../Registration Page/RegistrationPage.html";
}
