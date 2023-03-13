function loginValidate() {
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var mail = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    var text = "";

    if (fName.length < 5) {
        event.preventDefault()
        text = "Please Enter Valide First Name";
        error.innerHTML = text;
        console.log("first step done");
        return false;
    }else if (lName.length < 5) {
        event.preventDefault()
        text = "Please Enter Valide Last Name";
        error.innerHTML = text;
        console.log("second step done");
        return false;
    }
    else if (mail.indexOf("@") == -1 || mail.length <5) {
        event.preventDefault()
        text = "Please Enter Valide Email";
        error.innerHTML = text;
        console.log("third step done");
        return false;
    }else if (isNaN(phone) || phone.length != 11) {
        event.preventDefault()
        text = "Please Enter Valide Phone";
        error.innerHTML = text;
        console.log("phone number problem");
        return false;
    }  else if (isNaN(password)|| password.length != 8) {
        event.preventDefault()
        text = "Please Enter Valide password at lest 8 number";
        error.innerHTML = text;
        console.log('move to next step');
        return false;
    }else{
        window.location.href = "index.html";
        alert("Done");
        return true;
       
    }
   

}