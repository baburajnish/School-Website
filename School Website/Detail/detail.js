
window.onload = function () {
    DisplayStudent();
    displayRegistaredStudent();

};



function getSelectedStudent() {
    var student = new User("baburajnish@gmail.com", "raj1234", "Rajnish Tiwari",
        "22-08-1988", "7205332706", "Male", "Graduation", "AT/PO-Brarajnagar(Odisha)", "Inda");
    return student;

}
function DisplayStudent() {
    var student = getSelectedStudent();
    document.getElementById('lblEmail').innerHTML = student.Email;
    document.getElementById('lblPassword').innerHTML = student.Password;
    document.getElementById('lblName').innerHTML = student.Name;
    document.getElementById('lblDob').innerHTML = student.Dob;
    document.getElementById('lblMob').innerHTML = student.Mob;
    document.getElementById('lblMale').innerHTML = student.Gender;
    document.getElementById('lblGraduate').innerHTML = student.Qualifiction;
    document.getElementById('lblAddress').innerHTML = student.Address;
    document.getElementById('lblCountry').innerHTML = student.Country;
   



}
