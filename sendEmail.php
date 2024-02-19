<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the data from the form
    $phoneNumber = $_POST["phoneNumber"];
    $myEmail = $_POST["myEmail"];
    $myName = $_POST["myName"];
    $emailAddress = "dominicmutethia70@gmail.com"; // Replace with your email address

    // Construct the message
    $message = "I would like to book an appointment. For better communication, Please contact me at:\n";
    $message .= "Your number: $phoneNumber\n";
    $message .= "Your name: $myName\n";
    $message .= "Email address: $myEmail";

    // Set up email headers
    $headers = "From: $myEmail\r\n";

    // Send the email
    mail($emailAddress, "Appointment Booking", $message, $headers);

    // Respond to the client-side with a success message
    echo "Email sent successfully!";
} else {
    // Redirect to the homepage or display an error message
    header("Location: index.html");
    exit();
}

