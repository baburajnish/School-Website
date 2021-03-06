﻿
function RegistrationController(registrationService) {
    this.registrationService = registrationService;
    this.register = function () {
        var isValid = validateUser();
        if (isValid === true) {
            setObjectFromUI();
        }
    }
    this.resitration = function (user) {
    this.registrationService.resitration(user)

    }
    function validateUser() {

        var userName = $("#txtName");
        var email = $("#txtEmail");
        var password = $("#txtPassword");
        var dob = $("#txtDob");
        var mob = $("#txtMob");
        var country = $("#ddlCountry");
        var address = $("#txtAddress");
        var isValid = true;

        if (userName.val() == "") {
            $("#lblName").html('Please Enter Your Name.');
            isValid = false;
        }
        else if (userName.val().length < 2) {
            $("#lblName").html('Name Should be 3 letter.');
            isValid = false;
        }
        else {
            $("#lblName").html("");
        }

        if (email.val() == "") {
            $("#lblEmail").html('Please Enter Your Email.');
            isValid = false;
        } else {
            $("#lblEmail").html("");
        }


        if (password.val() == "") {
            $("#lblPassword").html('Please Enter Your Password.');
            isValid = false;
        }
        else if (password.val().length < 3) {
            $("#lblPassword").html('Password Should be 4 letter.');
            isValid = false;
        }
        else {
            $("#lblPassword").html("");
        }
        if (dob.val() == "") {
            $("#lblDOB").html('Please Enter Your DOB.');
            isValid = false;
        } else {
            $("#lblDOB").html("");
        }
        if (mob.val() == "") {
            $("#lblMOB").html('Please Enter Your MOB.');
            isValid = false;
        }
        else if (mob.val().length < 10) {
            $("#lblMOB").html('Password Should be 10 number.');
            isValid = false;
        }

        else {
            $("#lblMOB").html("");
        }

        if ($('#radioMale').is(':checked') == false && $('#radioFemale').is(':checked') == false) {
            $("#lblGender").html('Please choose Your Gender.');
            isValid = false;
        } else {
            $("#lblGender").html("");
        }
        if ($('#graduation').is(':checked') == false && $('#10th').is(':checked') == false && $('#12th').is(':checked') == false) {
            $("#lblQualifiction").html('Please choose atleast one option.');
            isValid = false;
        } else {
            $("#lblQualifiction").html("");
        }
        if ($('#Admin').is(':checked') == false && $('#Student').is(':checked') == false && $('#Principle').is(':checked') == false && $('#Faculty').is(':checked') == false) {
            $("#lblRole").html('Please choose atleast one option.');
            isValid = false;
        } else {
            $("#lblRole").html("");
        }

        if (country.val() == "0") {
            $("#lblCountry").html('Please choose Your Country.');
            isValid = false;
        } else {
            $("#lblCountry").html("");
        }
        if (address.val() == "") {
            $("#lblAddress").html('Please Enter Your Address.');
            isValid = false;
        } else {
            $("#lblAddress").html("");
        }
        return isValid;
    }
    function setObjectFromUI() {
        var user = new RegistrationUser();



        var checkedQualification = "";
        var checkedRole = "";

        user.Name = $("#txtName").val();
        user.Email = $("#txtEmail").val();
        user.Password = $("#txtPassword").val();
        user.Dob = $("#txtDob").val();
        user.Mob = $("#txtMob").val();
        user.Gender = $("input[type='radio']:checked").val();

        if ($('#10th').is(':checked') == true) {
            checkedQualification += $('#10th').val() + ",";
        }
        if ($('#12th').is(':checked') == true) {
            checkedQualification += $('#12th').val() + ",";
        }
        if ($('#graduation').is(':checked') == true) {
            checkedQualification += $('#graduation').val() + ",";
        }
        user.Qualifiction = checkedQualification;

        if ($("#Admin").is(':checked') == true) {
            checkedRole += $("#Admin").val() + ", ";
        }
        if ($("#Student").is(':checked') == true) {
            checkedRole += $("#Student").val() + ", ";
        }
        if ($("#Principle").is(':checked') == true) {
            checkedRole += $("#Principle").val() + ", ";
        }
        if ($("#Faculty").is(':checked') == true) {
            checkedRole += $("#Faculty").val() + ", ";
        }

        user.Role = checkedRole;

        user.Country = $("#ddlCountry :selected").text();
        user.Address = $("#txtAddress").val();

        registrationController.resitration(user);
    }
}

$(document).ready(function () {

    var registratonStorage = new RegistratonStorage();
    var registrationService = new RegistrationService(registratonStorage);
    var registrationController = new RegistrationController(registrationService);
    $("#txtDob").datepicker();

    $("#btnRegistration").click(function () {
        registrationController.register();
    });
});




