// Function to open the booking form
function openBookingForm() {
    document.getElementById('booking-form').style.display = 'block';
}

// Function to close the booking form
function closeBookingForm() {
    document.getElementById('booking-form').style.display = 'none';
}

// Handle the form submission
function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const payment = document.getElementById('payment').value;

    // Simple validation (optional)
    if (!name || !email || !payment) {
        alert('Please fill in all fields.');
        return;
    }

    // Simple success message (could be improved with email confirmation, etc.)
    alert(`Thank you for booking, ${name}! We’ve sent a confirmation email to ${email}.`);

    // Reset the form and close it
    document.getElementById('form').reset();
    closeBookingForm();
}
