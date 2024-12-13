"use strict";

$(document).ready(function() {
    //jQuery Validation Plugin
    $("#reservation_form").validate({
        rules: {
            arrival_date: { required: true, date:true },
            nights: { required: true, number: true },
            adults: { required: true, min: 1 },
            children: { required: true, min: 0 },
            name: { required: true },
            email: { required: true, email: true },
            phone: { required: true, pattern: /^\d{3}-\d{3}-\d{4}$/ }
        },
        messages: {
            arrival_date: { required: "Please enter the arrival date." },
            nights: { required: "Please enter the number of nights.", number: "Please enter a valid number." },
            adults: { required: "Please select the number of adults.", min: "Please select at least one adult." },
            children: { required: "Please select the number of children.", min: "Please select at least zero children." },
            name: { required: "Please enter your name." },
            email: { required: "Please enter your email address.", email: "Please enter a valid email address." },
            phone: { required: "Please enter your phone number.", pattern: "Please enter a valid phone number (e.g., 999-999-9999)." }
        },
        errorElement: "span",
        errorClass: "error"
    });

    // validation logic (real-time input checks)
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    // validation for Arrival Date
    $("#arrival_date").on("input", function() {
        if ($(this).val().trim() === "") {
            $(this).next(".error").remove();
            $(this).after("<span class='error'>Please enter the arrival date.</span>");
        } else {
            $(this).next(".error").remove();
        }
    });


	 // real-time Validation for Phone (check pattern)
	 $("#phone").on("input", function() {
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        if (!phonePattern.test($(this).val().trim())) {
            $(this).next(".error").remove();
            $(this).after("<span class='error'>Please enter a valid phone number (e.g., 999-999-9999).</span>");
        } else {
            $(this).next(".error").remove();
        }
    });


    // real-time validation for Nights
    $("#nights").on("input", function() {
        if ($(this).val().trim() === "" || isNaN($(this).val())) {
            $(this).next(".error").remove();
            $(this).after("<span class='error'>Please enter a valid number of nights.</span>");
        } else {
            $(this).next(".error").remove();
        }
    });

   
    $("#reservation_form").on("submit", function(event) {
        let isValid = true;

        // validation for email
        const email = $("#email").val().trim();
        if (!emailPattern.test(email)) {
            $("#email").after("<span class='error'>Please enter a valid email address.</span>");
            isValid = false;
        }

        // validation for phone
        const phone = $("#phone").val().trim();
        if (!phonePattern.test(phone)) {
            $("#phone").after("<span class='error'>Please enter a valid phone number (e.g., 999-999-9999).</span>");
            isValid = false;
        }

        // Prevent form submission if custom validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});
//end-ready