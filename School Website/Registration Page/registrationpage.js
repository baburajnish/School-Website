$(function () {
    
    $("#txtName").blur(function () {
        if ($(this).val() == "") {
            $("#lblName").html('Please Enter Your Name.');
        } else {
            $("#lblName").html("");
        }
    });
});

function saveUser() {
    validateUser();
}

function validateUser() {

    var userName = $("#txtName");
    var email = $("#txtEmail");
    var password = $("#txtPassword");
    var dob = $("#txtDob");
    var mob = $("#txtMob");
    var country = $("#ddlCountry");
    var address = $("#txtAddress");
   
   
    if (userName.val() == "") {
        $("#lblName").html('Please Enter Your Name.');
    }
    else if (userName.val().length < 2) {
        $("#lblName").html('Name Should be 3 letter.');
    }
    else {
        $("#lblName").html("");
    }
   
    if (email.val() == "") {
        $("#lblEmail").html('Please Enter Your Email.');
    } else {
        $("#lblEmail").html("");
    }

 
    if (password.val() == "") {
        $("#lblPassword").html('Please Enter Your Password.');
    }
    else if (password.val().length < 3) {
        $("#lblPassword").html('Password Should be 4 letter.');
    }
    else {
        $("#lblPassword").html("");
    }
    if (dob.val() == "") {
        $("#lblDOB").html('Please Enter Your DOB.');
    } else {
        $("#lblDOB").html("");
    }
    if (mob.val() == "") {
        $("#lblMOB").html('Please Enter Your MOB.');
    }
    else if( mob.val().length <10 ) {
        $("#lblMOB").html('Password Should be 10 number.');
    }

    else {
        $("#lblMOB").html("");
    }

    if ($('#radioMale').is(':checked') == false && $('#radioFemale').is(':checked') == false) {
        $("#lblGender").html('Please choose Your Gender.');
    } else {
        $("#lblGender").html("");
    }
    if ($('#graduation').is(':checked') == false && $('#10th').is(':checked') == false && $('#12th').is(':checked') == false) {
        $("#lblQualifiction").html('Please choose atleast one option.');
    } else {
        $("#lblQualifiction").html("");
    }


    if (country.val() == "0") {
        $("#lblCountry").html('Please choose Your Country.');
    } else {
        $("#lblCountry").html("");
    }
    if (address.val() == "") {
        $("#lblAddress").html('Please Enter Your Address.');
    } else {
        $("#lblAddress").html("");
    }
}


