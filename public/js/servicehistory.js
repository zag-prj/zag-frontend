document.addEventListener('DOMContentLoaded', () => {
    const clientId = '<%= clientId %>'; // Dynamically set client ID from the EJS template
    fetchCurrentRequests(clientId);
    fetchServiceHistory(clientId);
  });
  
  async function fetchCurrentRequests(clientId) {
    const response = await fetch(`/api/current-requests/${clientId}`); 
    const currentRequests = await response.json();
    displayCurrentRequests(currentRequests);
  }
  
  async function fetchServiceHistory(clientId) {
    const response = await fetch(`/api/service-history/${clientId}`); 
    const serviceHistory = await response.json();
    displayServiceHistory(serviceHistory);
  }
  
  function displayCurrentRequests(requests) {
    const container = document.getElementById('current-services');
    container.innerHTML = ''; // Clear any existing content
    requests.forEach(request => {
      const serviceCard = document.createElement('div');
      serviceCard.className = 'service-card';
      serviceCard.innerHTML = `
        <h2>Current Request #${request.id}</h2>
        <p><strong>Date:</strong> ${new Date(request.date).toLocaleString()}</p>
        <p><strong>Service Type:</strong> ${request.type}</p>
        <p><strong>Status:</strong> ${request.status}</p>
        <p><strong>Technician:</strong> ${request.technician}</p>
        <p><strong>Location:</strong> ${request.location}</p>
        <p><strong>Tracking Status:</strong> ${request.trackingStatus}</p>
      `;
      container.appendChild(serviceCard);
    });
  }
  
  function displayServiceHistory(history) {
    const container = document.getElementById('service-history');
    container.innerHTML = ''; // Clear any existing content
    history.forEach(entry => {
      const serviceCard = document.createElement('div');
      serviceCard.className = 'service-card';
      serviceCard.innerHTML = `
        <h2>Service Request #${entry.id}</h2>
        <p><strong>Date:</strong> ${new Date(entry.date).toLocaleString()}</p>
        <p><strong>Service Type:</strong> ${entry.type}</p>
        <p><strong>Status:</strong> ${entry.status}</p>
        <p><strong>Technician:</strong> ${entry.technician}</p>
        <p><strong>Notes:</strong> ${entry.notes}</p>
      `;
      container.appendChild(serviceCard);
    });
  }
  