function validateAndRedirect() {
    var phoneNumber = document.getElementById('phoneNumber').value.trim();
    var errorMessage = document.getElementById('error-message');

    // Clear previous error messages
    errorMessage.innerHTML = '';

    // Validate the phone number
    var phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(phoneNumber)) {
        errorMessage.innerHTML = 'Invalid phone number. Please enter a valid 10 to 15 digit number.';
        return;
    }

    // WhatsApp link format: https://wa.me/<phonenumber>
    var whatsappLink = 'https://wa.me/' + phoneNumber;

    // Redirect to WhatsApp
    window.location.href = whatsappLink;
}
