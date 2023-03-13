function formValidate() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var error = document.getElementById("error");
    var text = "";

    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter Valide Email";
        error.innerHTML = text;
        return false;
    }
    else if ( isNaN(phone) || phone.length != 11) {
        text = "Please Enter Valide Phone";
        error.innerHTML = text;
        return false;
    }
    
    else if (isNaN(password)|| password.length != 8) {
        text = "Please Enter Valide password at least 8 number";
        error.innerHTML = text;
        return false;
    }

    else{
        window.location.href = "another page.html";
        alert("Done");
        return true;
       
    }

}


// || phone.length != 11

// function redirectPage() {
//     window.location.href = 'Creat a new account.html'
// }

 // }else if (password.value.match(/[0-9]/)){
    //     text = "Please Enter Valide Password";
    //     error.innerHTML = text;
    //     return false;
    // }



    // .................................................
    // the other page


    // function loginValidate() {
    //     var fName = document.getElementById("fName").value;
    //     var lName = document.getElementById("lName").value;
    //     var email = document.getElementById("email").value;
    //     var phone = document.getElementById("phone").value;
    //     var password = document.getElementById("password").value;
    //     var cPassword = document.getElementById("cPassword").value;
    //     var text = "";
    //     var error = document.getElementById("error");

    //     if(fName.length < 5){
    //         text = "Please Enter Valide First Name";
    //         error.innerHTML = text;
    //         return false;
    //     } else if (lName.length <5) {
    //         text = "Please Enter Valide Last Name";
    //         error.innerHTML = text;
    //         return false;
    //     }

    // }