function LogInService(logInStorage) {
    return {
        logIn:logIn
    }
    function logIn(email, password) {
        var user = logInStorage.getUser(email);
        if (user == null) { //it will check null and undefined.
            throw new LoginException("Your emailId is wrong", "email");
        }
        if (usre.password !== password) {
            throw new LoginException("password is wrong", "password");
        } 
        
    }
}