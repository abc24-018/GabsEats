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
