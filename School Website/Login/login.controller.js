function LoginController(logInService) {
    this.logInService = logInService;
    this.logIn = function (emailId, password) {
        try {
            this.logInService.logIn(emailId, password);
            $("#msgDiv").hide();
        } catch (e) {
            this.showMessage(e.message);
        }
    };
    this.showMessage = function (message) {
        $("#msgDiv").html(message).show();
    };
}
var loginController;
$(function () {
    $("#msgDiv").hide();
    var loginStorage = new LoginStorage();
    var logInService = new LogInService(loginStorage);
    loginController = new LoginController(logInService);
    $("#btnLogin").click(function () {

        var email = $("#txtEmail").val();
        var password = $("#txtPassword").val();
        loginController.logIn(email, password);
    });


});
