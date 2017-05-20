function LoginStorage() {
    return {
        getUser: getUser
    }
    function getUser(emailId) {
        var users = localStorage["users"] || [];
        var userList = users.filter(function (user) {
            user.emailId === emailId;
        });
        var foundUser = userList.pop();
        if (foundUser == null) {
            return null;
        }
        var loginUser = new LoginUsre(foundUser.emailId, foundUser.password, foundUser.id);
        return loginUser;
    }
}