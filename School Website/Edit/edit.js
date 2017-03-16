
window.onload = function () {

    

    var fetchedUrl = window.location.href;
    var splitUrl = fetchedUrl.split('=');
    var fetchedId = splitUrl[1];
    var repo = new Repository();
    var user = repo.getUserById(fetchedId);

    document.getElementById('txtEmail').value = user.Email;
    document.getElementById('txtPassword').value = user.Password;
    document.getElementById('txtName').value = user.Name;
    document.getElementById('txtDob').value = user.Dob;
    document.getElementById('txtMob').value = user.Mob;
    document.getElementById('radioMale').checked = user.Gender;
    document.getElementById('graduation').checked = user.Qualifiction;
    document.getElementById('txtAddress').value = user.Address;
    
    $('option[value='+user.Country+']').attr("selected", "selected");
};






function updeteSelectedStudent() {
    var student = getSelectedStudent();
    student.Email = document.getElementById('txtEmail').value;
    student.Password = document.getElementById('txtPassword').value;
    student.Name = document.getElementById('txtName').value;
    student.Dob = document.getElementById('txtDob').value;
    student.Mob = document.getElementById('txtMob').value;
    student.Gender = document.getElementById('radioMale').checked;
    student.Qualifiction = document.getElementById('graduation').checked;
    student.Address = document.getElementById('txtAddress').value;
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
    var student = getSelectedStudent();
    document.getElementById('txtEmail').value = student.Email;
    document.getElementById('txtPassword').value = student.Password;
    document.getElementById('txtName').value = student.Name;
    document.getElementById('txtDob').value = student.Dob;
    document.getElementById('txtMob').value = student.Mob;
    document.getElementById('radioMale').checked = student.Gender;
    document.getElementById('graduation').checked = student.Qualifiction;
    document.getElementById('txtAddress').value = student.Address;
    $('#ddlCountry').val(student.Address);

}

