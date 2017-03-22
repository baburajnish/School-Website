/// <reference path="C:\Users\babur\onedrive\documents\visual studio 2013\Projects\School Website\School Website\Assign Role/assign-Role.html" />
/// <reference path="C:\Users\babur\onedrive\documents\visual studio 2013\Projects\School Website\School Website\Assign Role/assign-Role.html" />

//function getUsers() {
//    var user = [
//        (new User("01", "r", "User")),
//       (new User("02", "Rakesh Tiwari", "User")),
//       (new User("03", "Rahul Varma", "User")),
//       (new User("04", "Ashok Sahu", "User")),
//       (new User("05", "Ravi Sarma", "Admin")),
//       (new User("06", "Amar Barla", "Principle")),
//       (new User("07", "Asish Sony", "Faculty"))
//    ];
//    return user;
//}
function displayedUser() {
    var repository = new window.Repository();
    var user = repository.getRegistaredStudent();
    var userName = $("#txtName").val();
    var container = $("#container");
    container.html("");
    for (var i = 0; i < user.length; i++) {
        var id = $("<div class='col-sm-2'>");
        var name = $("<div class='col-sm-4'>");
        var role = $("<div class='col-sm-2'>");
        var action = $("<div class='col-sm-4'>");
        var btnDiv = $("<div>", { "class": "btn-group" });
        
        var btnAssignRole = $('<input />', {
            "class": 'btn btn-info',
            type: 'button',
            value: 'Assign Role',
            Id: 'btn_a',
            on: {
                click: function () {
                    var userId=user[i].Id;
                    window.location.href = "../Assign Role/assign-Role.html?userId="+userId;
                }
            }
        });
        var btnEdit = $('<input/>', {
            "class": 'btn btn-info',
            type: 'button',
            value: 'Edit',
            Id: 'btn_b',

            on: {
                click: function () {
                    var userId = user[i].Id;
                    window.location.href = "../Edit/edit-view.html?userId="+userId;
                }
            }

        });



        if (userName == user[i].Name) {
            id.html("<label class='control-label'> Id</label> " + "<div clas='col-sm-2'><label class='control-label'>" + user[i].Id + "</label></div>");
            name.html("<label class='control-label'> Name </label> " + "<div clas='col-sm-4'><label class='control-label'>" + user[i].Name + "</label></div>");
            role.html("<label class='control-label'> Role </label>" + "<div clas='col-sm-2'><label class='control-label'>" + user[i].Role + "</label></div>");
            action.html("<label class='control-label'> Action </label>");

            container.append(id);
            container.append(name);
            container.append(role);
            btnDiv.append(btnAssignRole);
            btnDiv.append(btnEdit);
            container.append(action);
            container.append(btnDiv);
           
     
                   

            break;
        }
    }

}




