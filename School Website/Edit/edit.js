function displayStudent() {
    var userName = document.getElementById('txtName');
    userName.value="Rajnish Tiwari";
    var email = document.getElementById('txtEmail');
    email.value="baburajnish@gmail.com";
    var password = document.getElementById('txtPassword');
    password.value="raj1234";
    var dob = document.getElementById('txtDob');
    dob.value= "22-08-1988";
    var mob = document.getElementById('txtMob');
    mob.value= "7205332706";
    var gender = document.getElementById('radioMale');
    gender.checked = true;
    var qualifiction = document.getElementById('graduation');
    qualifiction.checked = true;
    var address = document.getElementById('txtAddress');
    address.value = "AT/PO-Brarajnagar(Odisha)"
    var student=new Student()
}