
function getUsers() {
    var user = [
        (new User("01", "r", "Student")),
       (new User("02", "Rakesh Tiwari", "Student")),
       (new User("03", "Rahul Varma", "Student")),
       (new User("04", "Ashok Sahu", "Student")),
       (new User("05", "Ravi Sarma", "Admin")),
       (new User("06", "Amar Barla", "Principle")),
       (new User("07", "Asish Sony", "Faculty"))
    ];
    return user;
}
function displayedUser() {
    var user = getUsers();
    var userName = $("#txtName").val();
    var container = $("#container");
    container.html("");
    for (var i = 0; i < user.length; i++) {
        var Id = $("<div>");
        var Name = $("<div>");
        var Role = $("<div>");
        if (userName == user[i].Name) {
            Id.html("User Id :" + user[i].Id);
            Name.html(" User Name :" + user[i].Name);
            Role.html("User Role :" + user[i].Role);

            container.append(Id);
            container.append(Name);
            container.append(Role);
            break;
        }
    }

}




