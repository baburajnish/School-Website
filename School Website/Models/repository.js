function Repository() {

    return {
        getUserById: function (userId) {
            var users = getRegistaredStudent();
            var student = new Student();
            for (var i = 0; i < users.length ; i++) {
                if (users[i].id == userId) {
                    student.email = users[i].email;
                    student.password = users[i].password
                    student.userName = users[i].userName
                    student.dob = users[i].dob
                    student.mob = users[i].mob
                    student.gender = users[i].gender
                    student.qualifiction = users[i].qualifiction
                    student.address = users[i].address
                    student.country = users[i].country
                    return student;
                    break;
                }
            }
        }
    }

}

function getRegistaredStudent() {
    var student = [
       (new Student("02", "rakesh@gmail.com", "rakesh1234", "Rakesh Tiwari", "08-03-1985", "987532706", "Male", "Graduation", "AT/PO-Brarajnagar(Odisha)", "Inda")),
       (new Student("03", "rahul@gmail.com", "rahul1234", "Rahul Varma", "06-09-1989", "987538906", "Male", "Graduation", "AT/PO-Jharsuguda(Odisha)", "Inda")),
       (new Student("04", "ashok@gmail.com", "ashok1234", "Ashok Sahu", "08-03-1987", "987632706", "Male", "Graduation", "AT/PO-Rayagada(Odisha)", "Inda")),
       (new Student("05", "ravi@gmail.com", "ravi1234", "Ravi Sarma", "08-03-1988", "984532706", "Male", "Graduation", "AT/PO-Baleswar(Odisha)", "Inda")),
       (new Student("06", "amar@gmail.com", "amar1234", "Amar Barla", "08-03-1986", "987562706", "Male", "Graduation", "AT/PO-Raulkela(Odisha)", "Inda")),
       (new Student("07", "asish@gmail.com", "asish1234", "Asish Sony", "08-03-1989", "987382706", "Male", "Graduation", "AT/PO-Sambalpur(Odisha)", "Inda"))
    ];

    return student;
}
