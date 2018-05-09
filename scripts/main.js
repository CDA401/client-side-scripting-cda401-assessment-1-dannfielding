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

function rollover(image) {
    image.src = "pictures/indexrollover1.jpg";
}

function rolloveroff(image) {
    image.src = "pictures/indexrollover.jpg";
}



function contactValidation() {
    var first_name = document.forms["contactform"]["fname"].value;
    if (first_name == "") {
        document.getElementById("first_name_error").innerHTML = "Please enter a first name.";
        event.preventDefault();
    }
    
    var last_name = document.forms["contactform"]["lname"].value;
    if (last_name == "") {
        document.getElementById("last_name_error").innerHTML = "Please enter a last name.";
        event.preventDefault();
    }

    var email = document.forms["contactform"]["email"].value;
    if (email == "") {
        document.getElementById("email_error").innerHTML = "Please enter a email address.";
        event.preventDefault();
    }
    
    var phone = document.forms["contactform"]["phone"].value;
    if (phone == "") {
        document.getElementById("phone_error").innerHTML = "Please enter a phone number.";
        event.preventDefault();
    }
    

}

function fnameValidation() {
    var first_name = document.getElementById("fname");

    if (first_name.value == "") {
        first_name.style.backgroundColor = "red";
       } else {
            first_name.style.backgroundColor = "";
        }
    }

function lnameValidation() {
    var last_name = document.getElementById("lname");

    if (last_name.value == "") {
        last_name.style.backgroundColor = "red";
       } else {
            last_name.style.backgroundColor = "";
        }
    }
    
    function emailValidation() {
    var email = document.getElementById("emailv");

    if (email.value == "") {
        email.style.backgroundColor = "red";
       } else {
            email.style.backgroundColor = "";
        }
    }
    
    function phoneValidation() {
    var phone = document.getElementById("phonev");

    if (phone.value == "") {
        phone.style.backgroundColor = "red";
       } else {
            phone.style.backgroundColor = "";
        }
    }


    
    function orderValidation() {

    var address = document.forms["orderform"]["address"].value;
    if (address == "") {
        document.getElementById("address_error").innerHTML = "Please enter an address.";
        event.preventDefault();
    }

    var postcode = document.forms["orderform"]["post"].value;
    if (postcode == "") {
        document.getElementById("post_error").innerHTML = "Please enter a postcode.";
        event.preventDefault();
    }
}

    function addressValidation() {
    var address = document.getElementById("address");

    if (address.value == "") {
        address.style.backgroundColor = "red";
       } else {
            address.style.backgroundColor = "";
        }
    }
    
    function postValidation() {
    var postcode = document.getElementById("post");

    if (postcode.value == "") {
        postcode.style.backgroundColor = "red";
       } else {
            postcode.style.backgroundColor = "";
        }
    }
    