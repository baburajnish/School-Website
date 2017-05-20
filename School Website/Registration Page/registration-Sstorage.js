function RegistratonStorage() {
    if (localStorage.getItem("lastId") == null) {
        localStorage.setItem("lastId", 1);
    }
    return {
        saveUser: saveUser
    }  
    function saveUser(user) {
        var users = localStorage.getItem("users");
        var userList = JSON.parse(users);

        if (userList == null) {
            userList = [];
        }
        var lastId = localStorage.getItem("lastId");
        localStorage.setItem("lastId", ++lastId);
        user.Id = lastId;
        userList.push(user);
        window.localStorage.setItem("users", JSON.stringify(user));
    }
}