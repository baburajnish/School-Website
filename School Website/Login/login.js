/// <reference path="C:\Users\babur\Desktop\School Website\School Website\Registration Page/RegistrationPage.html" />
$(document).ready(function () {
    $("#msgDiv").hide();
});

function login() {
    var email = $('#txtEmail');
    var password = $('#txtPassword');

    var repository = new Repository();
    var users = repository.getRegistaredStudent();

    for (var i = 0; i < users.length; i++) {
        try {
            if (email.val() == "" && password.val() == "") {

                throw new UserException("Please Enter  Username and Password.");
            }

        }
        catch (e) {
            $("#msgDiv").html(e.message).show();
            return;
        }
        try {
            if (email.val() !== users[i].Email) {
                throw new UserException("Please enter valid Email id.")
            }
        } catch (e) {
            $("#msgDiv").html(e.message).show();
            return;
        }
        try {
            if (password.val() !== users[i].Password) {
                throw new UserException("Please enter valid Password.")
            }
        } catch (e) {
            $("#msgDiv").html(e.message).show();
            return;
        }

        if (email.val() == users[i].Email && password.val() == users[i].Password) {

            $("#msgDiv").html("You are successfully logged in!").show();
            email.val("");
            password.val("");
            return;
        }

    }

}

function goTo(parameters) {
    window.location.href = "../Registration Page/RegistrationPage.html";
}
