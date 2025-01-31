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

// Initialize FullCalendar
$(document).ready(function() {
    $('#calendar').fullCalendar({
        events: [
            {
                title: 'Football Game: Kuala Lumpur',
                start: '2025-02-10T10:00:00',
                description: 'Local Football Field, Kuala Lumpur',
                url: '#', // Add link to event booking page
            },
            {
                title: 'Football Game: Penang',
                start: '2025-02-12T15:00:00',
                description: 'Local Football Field, Penang',
                url: '#',
            }
            // You can dynamically fetch events here
        ],
        eventClick: function(event) {
            if (event.url) {
                window.open(event.url, '_blank'); // Open event details or booking page
                return false; // Prevent default action
            }
        }
    });
});

// Example of filtered events
let allEvents = [
    { title: 'Football Game: Kuala Lumpur', start: '2025-02-10T10:00:00', location: 'Kuala Lumpur' },
    { title: 'Football Game: Penang', start: '2025-02-12T15:00:00', location: 'Penang' },
    { title: 'Football Game: Johor Bahru', start: '2025-02-15T10:00:00', location: 'Johor Bahru' }
];

// Apply filters to calendar
function applyFilters() {
    const location = document.getElementById('location-filter').value.toLowerCase();
    const date = document.getElementById('date-filter').value;
    
    // Filter events based on location and date
    const filteredEvents = allEvents.filter(event => {
        const eventLocationMatches = event.location.toLowerCase().includes(location);
        const eventDateMatches = date ? event.start.startsWith(date) : true;  // Filter by date if provided
        
        return eventLocationMatches && eventDateMatches;
    });
    
    // Clear existing calendar events
    $('#calendar').fullCalendar('removeEvents');
    
    // Add filtered events to calendar
    $('#calendar').fullCalendar('addEventSource', filteredEvents);
}

// Register User (just stores data in local storage for now)
function registerUser(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    
    // Save user data in local storage (for demo purposes)
    localStorage.setItem('user', JSON.stringify({ username, email }));
    
    displayProfile(username);
}

// Display user profile info
function displayProfile(username) {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('profile-info').style.display = 'block';
    document.getElementById('welcome-message').textContent = `Welcome, ${username}!`;
}

// Logout
function logout() {
    localStorage.removeItem('user');
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('profile-info').style.display = 'none';
}
