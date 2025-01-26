function subscribeFunction() {
    var email = document.getElementById("email").value;
    var statusMessage = document.getElementById("status");

    // Simple email validation (checks if "@" and a domain exists)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailPattern.test(email)) {
        // Change button text and show success message
        document.getElementById("subscribe").value = "Subscribed!";
        statusMessage.innerText = "Your subscription has been successfully completed. Please check your email.";
    } else {
        // Show error if email is not valid
        statusMessage.innerText = "Please enter a valid email address (e.g., example@domain.com).";
    }
}
