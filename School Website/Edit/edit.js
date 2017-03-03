/*
function displayStudent() {
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
student.gender.student.qualifiction = document.getElementById('graduation'); = true;
student.qualifiction = document.getElementById('graduation');
student.qualifiction.checked = true;
student.address = document.getElementById('txtAddress');
student.address.value = "AT/PO-Brarajnagar(Odisha)";
}
*/

function updeteSelectedStudent() {
    var student = getSelectedStudent();
    student.email = document.getElementById('txtEmail').value;
    student.password = document.getElementById('txtPassword').value;
    student.userName = document.getElementById('txtName').value;
    student.dob = document.getElementById('txtDob').value;
    student.mob = document.getElementById('txtMob').value;
    student.gender = document.getElementById('radioMale').checked;
    student.qualifiction = document.getElementById('graduation').checked;
    student.address = document.getElementById('txtAddress').value;
    clear();
}
function clear() {
    
    document.getElementById('txtEmail').value = "";
    document.getElementById('txtPassword').value = "";
    document.getElementById('txtName').value = "";
    document.getElementById('txtDob').value = "";
    document.getElementById('txtMob').value = "";
    document.getElementById('radioMale').checked =false;
    document.getElementById('graduation').checked =false;
    document.getElementById('txtAddress').value ="";


}

function getSelectedStudent() {
    var student = new Student("baburajnish@gmail.com", "raj1234", "Rajnish Tiwari",
        "22-08-1988", "7205332706", "true", "true", "AT/PO-Brarajnagar(Odisha)");
    return student;

}
function DisplayStudent() {
    var student = getSelectedStudent()
    document.getElementById('txtEmail').value = student.email;
    document.getElementById('txtPassword').value = student.password;
    document.getElementById('txtName').value = student.userName;
    document.getElementById('txtDob').value = student.dob;
    document.getElementById('txtMob').value = student.mob;
    document.getElementById('radioMale').checked = student.gender;
    document.getElementById('graduation').checked = student.qualifiction;
    document.getElementById('txtAddress').value = student.address;
    

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