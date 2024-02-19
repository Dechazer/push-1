let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}




document.addEventListener("DOMContentLoaded", function () {
    const book = document.getElementById("enter");

    book.addEventListener("click", function ()
     {
        // Replace these with your phone number and email address
        
        const emailAddress = "dominicmutethia70@gmail.com";
        // User will enter their own phone number and email address
        const phoneNumber = document.getElementById("numberInput").value;
        const myEmail = document.getElementById("emailInput").value;
        const myName = document.getElementById("nameInput").value;

        // Construct the message for appointment booking
        const message = `I would like to book an appointment. For better communication, Please contact me at:
Phone Number: ${phoneNumber}
Name: ${myName}
Email address: ${myEmail}`;

        // Create a mailto link for sending an email
        const mailtoLink = `mailto:${emailAddress}?subject=Appointment Booking&body=${encodeURIComponent(message)}`;
        alert("Info Sent");
        // Open the default email client with the mailto link
        window.location.href = mailtoLink;
    });
});