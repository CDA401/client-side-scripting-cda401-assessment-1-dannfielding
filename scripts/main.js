function main() {
    var slideIndex = 0;
    showSlides();
    
	var date = new Date();
	var curr_date = date.toDateString(); //converts to a readable format
	
	document.getElementById("date").innerHTML = curr_date;
	


    var myVar = setInterval(time, 1000);

    function time() { // Time function
        var d = new Date();
        document.getElementById("time").innerHTML = d.toLocaleTimeString();
    }

    function showSlides() { // Carousel function
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

}

function rollover(image) { // Rollover function
    image.src = "pictures/indexrollover1.jpg";
}

function rolloveroff(image) { // Rollover function
    image.src = "pictures/indexrollover.jpg";
}



function contactValidation() { // Text validation for contact form
    var first_name = document.forms["contactform"]["fname"].value;
    if (first_name == "") {
        document.getElementById("first_name_error").innerHTML = "Please enter a first name."; // Error message if nothings entered into the text box
        event.preventDefault();
    }

    var last_name = document.forms["contactform"]["lname"].value;
    if (last_name == "") {
        document.getElementById("last_name_error").innerHTML = "Please enter a last name."; // Error message if nothings entered into the text box
        event.preventDefault();
    }

    var email = document.forms["contactform"]["email"].value;
    if (email == "") {
        document.getElementById("email_error").innerHTML = "Please enter a email address."; // Error message if nothings entered into the text box
        event.preventDefault();
    }

    var phone = document.forms["contactform"]["phone"].value;
    if (phone == "") {
        document.getElementById("phone_error").innerHTML = "Please enter a phone number."; // Error message if nothings entered into the text box
        event.preventDefault();
    }
    
    var message = document.forms["contactform"]["message"].value;
    if (message == ""){
        document.getElementById("message_error").innerHTML = "Please enter a messsage."
        event.preventDefault()
    }


}

function fnameValidation() { // Colour validation for the first name input box
    var first_name = document.getElementById("fname");

    if (first_name.value == "") {
        first_name.style.backgroundColor = "red"; // Changes input box colour to red
    }
    else {
        first_name.style.backgroundColor = "";
    }
}

function lnameValidation() { // Colour validation for the last name input box
    var last_name = document.getElementById("lname");

    if (last_name.value == "") {
        last_name.style.backgroundColor = "red"; // Changes input box colour to red
    }
    else {
        last_name.style.backgroundColor = "";
    }
}

function emailValidation() { // Colour validation for the email input box
    var email = document.getElementById("emailv");

    if (email.value == "") {
        email.style.backgroundColor = "red"; // Changes input box colour to red
    }
    else {
        email.style.backgroundColor = "";
    }
}

function phoneValidation() { // Colour validation for the phone input box
    var phone = document.getElementById("phonev");

    if (phone.value == "") {
        phone.style.backgroundColor = "red"; // Changes input box colour to red
    }
    else {
        phone.style.backgroundColor = "";
    }
}

function messageValidation() { // Colour validation for the message box
    var message = document.getElementById("message");

    if (message.value == "") {
        message.style.backgroundColor = "red"; // Changes input box colour to red
    }
    else {
        message.style.backgroundColor = "";
    }
}

function orderValidation(theForm) {
    var base = document.forms["orderform"]["base"].value;
    var orderform = document.forms["orderform"]["topping"]
    
    if (base == "") { // Validation for the radio inputs to make sure one radio is selected
        document.getElementById("base_error").innerHTML = "Please select a pizzabase."; // Error message if one of the radio input isn't selected
        event.preventDefault();
    }
    
    // Validation for the checkboxes to make sure one box is selected
    if (theForm.topping1.checked == false && // Validation for the cheese topping
    theForm.topping2.checked == false && // Validation for the mushrooms topping
    theForm.topping3.checked == false && // Validation for the ham topping
    theForm.topping4.checked == false) { // Validation for the anchovies topping
    document.getElementById("topping_error").innerHTML = "Please select at least one topping."; // Error message if one check box isn't selected
    event.preventDefault();
    }
    
    var phone = document.forms["orderform"]["phone"].value;
    if (phone == "") {
        document.getElementById("phone_error").innerHTML = "Please enter a phone number."; // Error message if nothings entered into the text box
        event.preventDefault();
    }
    
    
    var name = document.forms["orderform"]["name"].value;
    if (name == "") {
        document.getElementById("name_error").innerHTML = "Please enter a name."; // Error message if nothings entered into the text box
        event.preventDefault();
    }
    
    var address = document.forms["orderform"]["address"].value;
    if (address == "") {
        document.getElementById("address_error").innerHTML = "Please enter an address."; // Error message if nothings entered into the text box
        event.preventDefault();
    }

    var postcode = document.forms["orderform"]["post"].value;
    if (postcode == "") {
        document.getElementById("post_error").innerHTML = "Please enter a postcode."; // Error message if nothings entered into the text box
        event.preventDefault();
    }
}

function nameValidation() { // Colour validation for the name input box
    var name = document.getElementById("name");

    if (name.value == "") {
        name.style.backgroundColor = "red"; // Changes input box colour to red
    }
    else {
        name.style.backgroundColor = "";
    }
}

function phoneValidation() { // Colour validation for the phone input box
    var phone = document.getElementById("phone");

    if (phone.value == "") {
        phone.style.backgroundColor = "red"; // Changes input box colour to red
    }
    else {
        phone.style.backgroundColor = "";
    }
}

function addressValidation() { // Colour validation for the address input box
    var address = document.getElementById("address");

    if (address.value == "") {
        address.style.backgroundColor = "red"; // Changes input box colour to red
    }
    else {
        address.style.backgroundColor = "";
    }
}

function postValidation() { // Colour validation for the postcode input box
    var postcode = document.getElementById("post");

    if (postcode.value == "") {
        postcode.style.backgroundColor = "red"; // Changes input box colour to red
    }
    else {
        postcode.style.backgroundColor = "";
    }
}

function realtimetotal() { //Real time total function
    var items = new Array();
    var totalprice = "0.00";
    var output = "";
    
    var basetotal = 0; // Pizzabase total
    var base_small = document.getElementById("base_small");
    if (base_small.checked) {
        basetotal = base_small.value; // Adds the cost of a small to the base total
    }
    var base_medium = document.getElementById("base_medium");
    if (base_medium.checked) {
        basetotal = base_medium.value; // Adds the cost of a medium pizza to the base total
    }
    var base_large = document.getElementById("base_large");
    if (base_large.checked) {
        basetotal = base_large.value; //Adds the cost of a large pizza to the base total
    }
    var base_xlarge = document.getElementById("base_xlarge");
    if (base_xlarge.checked) {
        basetotal = base_xlarge.value; // Adds the cost of a x-large pizza to the base total
    }
    
    var toppingtotal = 0; //Pizza topping total
    var cheese = document.getElementById("cheese");
    if (cheese.checked) {
        toppingtotal = +toppingtotal + +cheese.value; // Adds the cost of cheese to topping total
    }
    var mushrooms = document.getElementById("mushrooms");
    if (mushrooms.checked) {
        toppingtotal = +toppingtotal + +mushrooms.value; // Adds the cost of mushrooms to topping total
    }
    var ham = document.getElementById("ham");
    if (ham.checked) {
        toppingtotal = +toppingtotal + +ham.value; // Adds the cost of ham to topping total
    }
    var anchovies = document.getElementById("anchovies");
    if (anchovies.checked) {
        toppingtotal = +toppingtotal + +anchovies.value; // Adds the cost of anchovies to topping total
    }
    
    var extratotal = 0; //Extras total
    var chips = document.getElementById("chips");
    if (chips.checked) {
        extratotal = +extratotal + +chips.value; // Adds the cost of chips to extras total
    }
    var garlic_bread = document.getElementById("garlic_bread");
    if (garlic_bread.checked) {
        extratotal = +extratotal + +garlic_bread.value; // Adds the cost of a garlic bread to extras total
    }
    
    totalprice = +basetotal + +toppingtotal + +extratotal; // Adds all of the totals up
    
    totalprice = parseFloat(totalprice).toFixed(2); // Floats the total price number to 2 decimal points
    
    document.getElementById("totalprice").innerHTML = totalprice;
    
    
    
}