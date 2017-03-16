function Repository() {

    return {
        getUserById: function (userId) {
            var users = getRegistaredStudent();
            var student = new Student();
            for (var i = 0; i < users.length ; i++) {
                if (users[i].Id == userId) {
                    student.Id = users[i].Id;
                    student.Email = users[i].Email;
                    student.Password = users[i].Password;
                    student.Name = users[i].Name;
                    student.Dob = users[i].Dob;
                    student.Mob = users[i].Mob;
                    student.Gender = users[i].Gender;
                    student.Qualifiction = users[i].Qualifiction;
                    student.Address = users[i].Address;
                    student.Country = users[i].Country;
                    student.Role = users[i].Role;
                    return student;
                    break;
                }
            }
        }
    }

}

function getRegistaredStudent() {
    var student = [
       (new Student("02", "Student", "rakesh@gmail.com", "rakesh1234", "Rakesh Tiwari", "08-03-1985", "987532706", "Male", "Graduation", "AT/PO-Brarajnagar(Odisha)", "India")),
    (new Student("03", "Student", "rahul@gmail.com", "rahul1234", "Rahul Varma", "06-09-1989", "987538906", "Male", "Graduation", "AT/PO-Jharsuguda(Odisha)", "USA")),
    (new Student("04", "Student", "ashok@gmail.com", "ashok1234", "Ashok Sahu", "08-03-1987", "987632706", "Male", "Graduation", "AT/PO-Rayagada(Odisha)", "India")),
    (new Student("05", "Admin", "ravi@gmail.com", "ravi1234", "Ravi Sarma", "08-03-1988", "984532706", "Male", "Graduation", "AT/PO-Baleswar(Odisha)", "India")),
    (new Student("06", "Principle", "amar@gmail.com", "amar1234", "Amar Barla", "08-03-1986", "987562706", "Male", "Graduation", "AT/PO-Raulkela(Odisha)", "India")),
    (new Student("07", "Faculty", "asish@gmail.com", "asish1234", "Asish Sony", "08-03-1989", "987382706", "Male", "Graduation", "AT/PO-Sambalpur(Odisha)", "India"))
    ];

    return student;
}
