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
    }
    else {
        first_name.style.backgroundColor = "";
    }
}

function lnameValidation() {
    var last_name = document.getElementById("lname");

    if (last_name.value == "") {
        last_name.style.backgroundColor = "red";
    }
    else {
        last_name.style.backgroundColor = "";
    }
}

function emailValidation() {
    var email = document.getElementById("emailv");

    if (email.value == "") {
        email.style.backgroundColor = "red";
    }
    else {
        email.style.backgroundColor = "";
    }
}

function phoneValidation() {
    var phone = document.getElementById("phonev");

    if (phone.value == "") {
        phone.style.backgroundColor = "red";
    }
    else {
        phone.style.backgroundColor = "";
    }
}

function orderValidation(theForm) {
    var base = document.forms["orderform"]["base"].value;
    var orderform = document.forms["orderform"]["topping"]
    
    if (base == "") {
        document.getElementById("base_error").innerHTML = "Please select a pizzabase.";
        event.preventDefault();
    }
    
    if (theForm.topping1.checked == false &&
    theForm.topping2.checked == false &&
    theForm.topping3.checked == false &&
    theForm.topping4.checked == false) {
    document.getElementById("topping_error").innerHTML = "Please select at least one topping.";
    event.preventDefault();
    }
    
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
    }
    else {
        address.style.backgroundColor = "";
    }
}

function postValidation() {
    var postcode = document.getElementById("post");

    if (postcode.value == "") {
        postcode.style.backgroundColor = "red";
    }
    else {
        postcode.style.backgroundColor = "";
    }
}

function realtimetotal() {
    var items = new Array();
    var totalprice = "0.00";
    var output = "";
    
    var basetotal = 0;
    var base_small = document.getElementById("base_small");
    if (base_small.checked) {
        basetotal = base_small.value;
        items.push("Small Pizzabase - £5");
    }
    var base_medium = document.getElementById("base_medium");
    if (base_medium.checked) {
        basetotal = base_medium.value;
        items.push("Medium Pizzabase - £7.50");
    }
    var base_large = document.getElementById("base_large");
    if (base_large.checked) {
        basetotal = base_large.value;
        items.push("Large Pizzabase - £10");
    }
    var base_xlarge = document.getElementById("base_xlarge");
    if (base_xlarge.checked) {
        basetotal = base_xlarge.value;
        items.push("X-Large Pizzabase - £12.50");
    }
    
    var toppingtotal = 0;
    var cheese = document.getElementById("cheese");
    if (cheese.checked) {
        toppingtotal = +toppingtotal + +cheese.value;
        items.push("Cheese Topping - £0.20");
    }
    var mushrooms = document.getElementById("mushrooms");
    if (mushrooms.checked) {
        toppingtotal = +toppingtotal + +mushrooms.value;
        items.push("Mushrooms Topping - £0.40");
    }
    var ham = document.getElementById("ham");
    if (ham.checked) {
        toppingtotal = +toppingtotal + +ham.value;
        items.push("Ham Topping - £0.50")
    }
    var anchovies = document.getElementById("anchovies");
    if (anchovies.checked) {
        toppingtotal = +toppingtotal + +anchovies.value;
    }
    
    var extratotal = 0;
    var chips = document.getElementById("chips");
    if (chips.checked) {
        extratotal = +extratotal + +chips.value;
    }
    var garlic_bread = document.getElementById("garlic_bread");
    if (garlic_bread.checked) {
        extratotal = +extratotal + +garlic_bread.value;
    }
    
    totalprice = +basetotal + +toppingtotal + +extratotal;
    
    totalprice = parseFloat(totalprice).toFixed(2);
    
    document.getElementById("totalprice").innerHTML = totalprice;
    
    
    
}