$(document).ready(function () {

    
    var fetchedUrl = window.location.href;
    var splitUrl = fetchedUrl.split('=');
    var fetchedId = splitUrl[1];
    var repo = new Repository();
    var user = repo.getUserById(fetchedId);

    $('#lblId').html(user.Id);
    $('#lblName').html(user.Name);

    if ($('#chkStudent').val() == user.Role) {
        $('#chkStudent').prop("checked", true);
    }
    if ($('#chkAdmin').val() == user.Role) {
        $('#chkAdmin').prop("checked", true);
    }
    if ($('#chkPrinciple').val() == user.Role) {
        $('#chkPrinciple').prop("checked", true);
    }
    if ($('#chkFaculty').val() == user.Role) {
        $('#chkFaculty').prop("checked", true);
    }
   
 
});





































