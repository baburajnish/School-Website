function RegistrationService(registrationStorage) {

  
    return {
        resitration: resitration
    }
    function resitration(user) {
        
        registrationStorage.saveUser(user);
    }
}
