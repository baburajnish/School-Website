/*
function showStudent(){
var student = new Student();
student.userName = document.getElementById('lblName');
student.userName.innerHTML = "Rajnish Tiwari";
student.email = document.getElementById('lblEmail');
student.email.innerHTML = "baburajnish@gmail.com";
student.password = document.getElementById('lblPassword');
student.password.innerHTML = "raj1234";
student.dob = document.getElementById('lblDob');
student.dob.innerHTML = "22-08-1988";
student.mob = document.getElementById('lblMob');
student.mob.innerHTML = "7205332706";
student.gender = document.getElementById('lblMale');
student.gender.innerHTML = "Male";
student.qualifiction = document.getElementById('lblGraduate');
student.innerHTML = "Graduation";
student.country = document.getElementById('lblCountry');
student.country.innerHTML = "Inda";
student.address = document.getElementById('lblAddress');
student.address.innerHTML = "AT/PO-Brarajnagar(Odisha)";
}

*/


window.onload = function () {
    DisplayStudent()
};



function getSelectedStudent() {
    var student = new Student("baburajnish@gmail.com", "raj1234", "Rajnish Tiwari",
        "22-08-1988", "7205332706", "Male", "Graduation", "AT/PO-Brarajnagar(Odisha)", "Inda");
    return student;

}
function DisplayStudent() {
    var student = getSelectedStudent()
    document.getElementById('lblEmail').innerHTML = student.email;
    document.getElementById('lblPassword').innerHTML = student.password;
    document.getElementById('lblName').innerHTML = student.userName;
    document.getElementById('lblDob').innerHTML = student.dob;
    document.getElementById('lblMob').innerHTML = student.mob;
    document.getElementById('lblMale').innerHTML = student.gender;
    document.getElementById('lblGraduate').innerHTML = student.qualifiction;
    document.getElementById('lblAddress').innerHTML = student.address;
    document.getElementById('lblCountry').innerHTML = student.country;


}





/*
function edit() {
   
    var userName=document.getElementById('lblName');
    userName.innerHTML="Rajnish Tiwari";
    var email = document.getElementById('lblEmail');
    email.innerHTML = "baburajnish@gmail.com";
    var password = document.getElementById('lblPassword');
    password.innerHTML = "raj1234";
    var dob = document.getElementById('lblDob');
    dob.innerHTML = "22-08-1988";
    var mob = document.getElementById('lblMob');
    mob.innerHTML = "7205332706";
    var gender = document.getElementById('lblMale');
    gender.innerHTML = "Male";
    var qualifiction = document.getElementById('lblGraduate');
    qualifiction.innerHTML = "Graduation";
    var country = document.getElementById('lblCountry');
    country.innerHTML = "Inda";
    var address = document.getElementById('lblAddress');
    address.innerHTML="AT/PO-Brarajnagar(Odisha)"



}
*/