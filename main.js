// Sample data for food spots
const foodSpots = [
    {
        id: 1,
        name: "Mma Ramotswe's Seswaa Spot",
        cuisine: "traditional",
        location: "Main Mall",
        rating: 4.5,
        image: "images/spot1.jpg"
    },
    // Add more spots...
];

// Function to render spots
function renderSpots(spots) {
    const container = document.querySelector('.spot-grid');
    container.innerHTML = spots.map(spot => `
        <div class="spot-card">
            <img src="${spot.image}" alt="${spot.name}">
            <div class="spot-info">
                <h3>${spot.name}</h3>
                <p>Cuisine: ${spot.cuisine}</p>
                <p>Rating: ${'★'.repeat(Math.floor(spot.rating))}${'☆'.repeat(5-Math.floor(spot.rating))}</p>
            </div>
        </div>
    `).join('');
}

// Filter functionality
document.getElementById('cuisine-filter').addEventListener('change', (e) => {
    const cuisine = e.target.value;
    const filtered = cuisine === 'all' 
        ? foodSpots 
        : foodSpots.filter(spot => spot.cuisine === cuisine);
    renderSpots(filtered);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSpots(foodSpots);
});

// In main.js
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -24.6586, lng: 25.9086}, // Gaborone coordinates
        zoom: 12
    });
    
    // Add markers for each spot
    foodSpots.forEach(spot => {
        new google.maps.Marker({
            position: {lat: spot.lat, lng: spot.lng},
            map: map,
            title: spot.name
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedback-form');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', validateForm);
    }

    function validateForm(event) {
        event.preventDefault();
        
        // Basic Validation
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const review = document.getElementById('review');
        const rating = document.getElementById('rating');
        
        const errorMessages = [];

        if (name.value.trim().length < 2) {
            errorMessages.push('Name must be at least 2 characters long');
            name.classList.add('error');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            errorMessages.push('Please enter a valid email address');
            email.classList.add('error');
        }

        if (review.value.trim().length < 10) {
            errorMessages.push('Review must be at least 10 characters long');
            review.classList.add('error');
        }

        if (rating.value === '') {
            errorMessages.push('Please select a rating');
            rating.classList.add('error');
        }

        const errorContainer = document.getElementById('error-messages');
        if (errorMessages.length > 0) {
            errorContainer.innerHTML = errorMessages.map(msg => `<p>${msg}</p>`).join('');
            errorContainer.style.display = 'block';
        } else {
            // Submit form or perform AJAX submission
            alert('Thank you for your review!');
            feedbackForm.reset();
            errorContainer.style.display = 'none';
        }
    }
});
