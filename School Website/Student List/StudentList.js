
window.onload = function () {
  
    displayRegistaredStudent();

};

//function getRegistaredStudent() {
//    var student = [
//       (new User("rakesh@gmail.com", "rakesh1234", "Rakesh Tiwari", "08-03-1985", "987532706", "Male", "Graduation", "AT/PO-Brarajnagar(Odisha)", "Inda")),
//       (new User("rahul@gmail.com", "rahul1234", "Rahul Varma", "06-09-1989", "987538906", "Male", "Graduation", "AT/PO-Jharsuguda(Odisha)", "Inda")),
//       (new User("ashok@gmail.com", "ashok1234", "Ashok Sahu", "08-03-1987", "987632706", "Male", "Graduation", "AT/PO-Rayagada(Odisha)", "Inda")),
//       (new User("ravi@gmail.com", "ravi1234", "Ravi Sarma", "08-03-1988", "984532706", "Male", "Graduation", "AT/PO-Baleswar(Odisha)", "Inda")),
//       (new User("amar@gmail.com", "amar1234", "Amar Barla", "08-03-1986", "987562706", "Male", "Graduation", "AT/PO-Raulkela(Odisha)", "Inda")),
//       (new User("asish@gmail.com", "asish1234", "Asish Sony", "08-03-1989", "987382706", "Male", "Graduation", "AT/PO-Sambalpur(Odisha)", "Inda"))
//    ];

//    return student;
//}
function displayRegistaredStudent() {
    var repository = new Repository();

    var student = repository.getRegistaredStudent();

    for (var i = 0; i < student.length; i++) {
        var container = document.getElementById("container");
        var content = document.createElement("div");
        var divEmail = document.createElement('div');
        var divPassword = document.createElement('div');
        var divName = document.createElement('div');
        var divDob = document.createElement('div');
        var divMob = document.createElement('div');
        var divMale = document.createElement('div');
        var divGraduate = document.createElement('div');
        var divAddress = document.createElement('div');
        var divCountry = document.createElement('div');
        var btn = document.createElement('input');
        btn.type = "button";
        btn.value = "Edit";
        var hr = document.createElement('hr');
        divEmail.innerHTML = "<label>Email :</label>" + " " + "<label>" + student[i].Email + "</label>";
        divPassword.innerHTML = "<label>Password:</label>" + " " + "<label>" + student[i].Password + "</label>";
        divName.innerHTML = "<label>Name :</label>" + " " + "<label>" + student[i].Name + "</label>";
        divDob.innerHTML = "<label>DOB :</label>" + " " + "<label>" + student[i].Dob + "</label>";
        divMob.innerHTML = "<label>MOB :</label>" + " " + "<label>" + student[i].Mob + "</label>";
        divMale.innerHTML = "<label>Gender :</label>" + " " + "<label>" + student[i].Gender + "</label>";
        divGraduate.innerHTML = "<label>Qualifiction :</label>" + " " + "<label>" + student[i].Qualifiction + "</label>";
        divAddress.innerHTML = "<label>Address :</label>" + " " + "<label>" + student[i].Address + "</label>";
        divCountry.innerHTML = "<label>Country :</label>" + " " + "<label>" + student[i].Country + "</label>";

        content.appendChild(divEmail);
        content.appendChild(divPassword);
        content.appendChild(divName);
        content.appendChild(divDob);
        content.appendChild(divMob);
        content.appendChild(divMale);
        content.appendChild(divGraduate);
        content.appendChild(divAddress);
        content.appendChild(divCountry);
        content.appendChild(btn);
        content.appendChild(hr);

        container.appendChild(content);

    }
}

function displayRegistaredStudent() {
    var repository = new Repository();

    var student = repository.getRegistaredStudent();

    for (var i = 0; i < student.length; i++) {
        var table = $("#tbl");
        var tr = $("<tr>");
        var content = document.createElement("div");
        var divEmail = document.createElement('div');
        var divPassword = document.createElement('div');
        var divName = document.createElement('div');
        var divDob = document.createElement('div');
        var divMob = document.createElement('div');
        var divMale = document.createElement('div');
        var divGraduate = document.createElement('div');
        var divAddress = document.createElement('div');
        var divCountry = document.createElement('div');
        var btn = document.createElement('input');
        btn.type = "button";
        btn.value = "Edit";
        var hr = document.createElement('hr');
        divEmail.innerHTML = "<label>Email :</label>" + " " + "<label>" + student[i].Email + "</label>";
        divPassword.innerHTML = "<label>Password:</label>" + " " + "<label>" + student[i].Password + "</label>";
        divName.innerHTML = "<label>Name :</label>" + " " + "<label>" + student[i].Name + "</label>";
        divDob.innerHTML = "<label>DOB :</label>" + " " + "<label>" + student[i].Dob + "</label>";
        divMob.innerHTML = "<label>MOB :</label>" + " " + "<label>" + student[i].Mob + "</label>";
        divMale.innerHTML = "<label>Gender :</label>" + " " + "<label>" + student[i].Gender + "</label>";
        divGraduate.innerHTML = "<label>Qualifiction :</label>" + " " + "<label>" + student[i].Qualifiction + "</label>";
        divAddress.innerHTML = "<label>Address :</label>" + " " + "<label>" + student[i].Address + "</label>";
        divCountry.innerHTML = "<label>Country :</label>" + " " + "<label>" + student[i].Country + "</label>";

        content.appendChild(divEmail);
        content.appendChild(divPassword);
        content.appendChild(divName);
        content.appendChild(divDob);
        content.appendChild(divMob);
        content.appendChild(divMale);
        content.appendChild(divGraduate);
        content.appendChild(divAddress);
        content.appendChild(divCountry);
        content.appendChild(btn);
        content.appendChild(hr);

        container.appendChild(content);

    }
}
