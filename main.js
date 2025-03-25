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
