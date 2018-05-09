function main() {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("pictures");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 10000); // 7 seconds between pictures changing
    }

    var myVar = setInterval(myTimer, 1000);

    function myTimer() {
        var d = new Date();
        document.getElementById("time").innerHTML = d.toLocaleTimeString();
    }
}



function contactValidation() {
    var first_name = document.forms["contactform"]["first_name"].value;
    var last_name = document.forms["contactform"]["last_name"].value;
    var email = document.forms["contactform"]["email"].value;
    var phone = document.forms["contactform"]["phone"].value;
    
    if ((first_name == null) || (first_name == "")) {
        document.getElementById("first_name_error").innerHTML = "Please enter a first name.";
        event.preventDefault();
        return false;
    }
    if ((last_name == null) || (last_name == "")) {
        document.getElementById("last_name_error").innerHTML = "Please enter a last name.";
        event.preventDefault();
        return false;
    }

    if ((email == null) || (email == "")) {
        document.getElementById("email_error").innerHTML = "Please enter a email address.";
        event.preventDefault();
        return false;
    }
    
    if ((phone == null) || (phone == "")) {
        document.getElementById("phone_error").innerHTML = "Please enter a phone number.";
        event.preventDefault();
        return false;
    }
    

}