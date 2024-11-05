async function fetchContracts(clientId) {
    try {
        const response = await fetch(`/api/contracts/${clientId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const contracts = await response.json();
        displayContracts(contracts);
    } catch (error) {
        console.error('Failed to fetch contracts:', error);
    }
}

function displayContracts(contracts) {
    const contractList = document.getElementById('contract-list');
    contractList.innerHTML = ''; // Clear existing content

    contracts.forEach(contract => {
        const contractCard = document.createElement('div');
        contractCard.classList.add('contract-card');
        contractCard.innerHTML = `
            <h2>${contract.name}</h2>
            <p><strong>Expiry Date:</strong> ${new Date(contract.expiryDate).toLocaleDateString()}</p>
            <div class="action-buttons">
                <button type="button" class="view-btn" onclick="viewContract(${contract.id})">View Details</button>
                <button type="button" class="renew-btn" onclick="renewContract(${contract.id})">Renew Contract</button>
            </div>
        `;
        contractList.appendChild(contractCard);
    });
}

// Call fetch function with a specific client ID
const clientId = '<%= clientId %>'; // Replace with actual client ID
fetchContracts(clientId);
