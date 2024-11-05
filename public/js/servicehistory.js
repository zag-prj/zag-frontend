document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Fetch current services and service history from the API
        const response = await fetch('/api/services'); // Adjust the URL to match your API route
        if (!response.ok) throw new Error('Network response was not ok');
        
        const { currentServices, serviceHistory } = await response.json();
        
        renderCurrentServices(currentServices);
        renderServiceHistory(serviceHistory);
    } catch (error) {
        console.error('Error fetching services:', error);
        document.querySelector('.container').innerHTML = '<p>Error retrieving service data.</p>';
    }
});

// Render current services
function renderCurrentServices(services) {
    const currentServicesContainer = document.querySelector('.current-services');
    currentServicesContainer.innerHTML = ''; // Clear any existing content
    services.forEach(service => {
        currentServicesContainer.innerHTML += `
            <div class="service-card">
                <h2>Current Request #${service.id}</h2>
                <p><strong>Date:</strong> ${new Date(service.date).toLocaleDateString()}</p>
                <p><strong>Service Type:</strong> ${service.serviceType}</p>
                <p><strong>Status:</strong> ${service.status}</p>
                <p><strong>Technician:</strong> ${service.technician}</p>
                <p><strong>Location:</strong> ${service.location}</p>
                <p><strong>Tracking Status:</strong> ${service.trackingStatus}</p>
            </div>
        `;
    });
}

// Render service history
function renderServiceHistory(services) {
    const serviceHistoryContainer = document.querySelector('.service-history');
    serviceHistoryContainer.innerHTML = ''; // Clear any existing content
    services.forEach(service => {
        serviceHistoryContainer.innerHTML += `
            <div class="service-card">
                <h2>Service Request #${service.id}</h2>
                <p><strong>Date:</strong> ${new Date(service.date).toLocaleDateString()}</p>
                <p><strong>Service Type:</strong> ${service.serviceType}</p>
                <p><strong>Status:</strong> ${service.status}</p>
                <p><strong>Technician:</strong> ${service.technician}</p>
                <p><strong>Notes:</strong> ${service.notes}</p>
            </div>
        `;
    });
}
