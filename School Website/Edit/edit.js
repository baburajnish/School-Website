function displayStudent(){
var student = new Student();
student.userName = document.getElementById('txtName');
student.userName.value = "Rajnish Tiwari";
student.email = document.getElementById('txtEmail');
student.email.value = "baburajnish@gmail.com";
student.password = document.getElementById('txtPassword');
student.password.value = "raj1234";
student.dob = document.getElementById('txtDob');
student.dob.value = "22-08-1988";
student.mob = document.getElementById('txtMob');
student.mob.value = "7205332706";
student.gender = document.getElementById('radioMale');
student.gender.checked = true;
student.qualifiction = document.getElementById('graduation');
student.qualifiction.checked = true;
student.address = document.getElementById('txtAddress');
student.address.value = "AT/PO-Brarajnagar(Odisha)";
}
/*
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
    address.value = "AT/PO-Brarajnagar(Odisha)";
    
}
*/