// Function to toggle cards
function toggleCards() {
    const loginCard = document.getElementById('login-card');
    const registerCard = document.getElementById('register-card');

    // Swap the active class between the two cards
    loginCard.classList.toggle('active');
    registerCard.classList.toggle('active');
}

// Add click event listeners to both cards
document.getElementById('login-card').addEventListener('click', (event) => {
    // Check if the clicked target is the card itself or the toggle link
    if (event.target.closest('.toggle-card')) {
        toggleCards(); // If a toggle link is clicked, swap cards
    }
});

document.getElementById('register-card').addEventListener('click', (event) => {
    // Check if the clicked target is the card itself or the toggle link
    if (event.target.closest('.toggle-card')) {
        toggleCards(); // If a toggle link is clicked, swap cards
    }
});

// Add click event listeners to the toggle links within each card
document.querySelectorAll('.toggle-card').forEach(toggle => {
    toggle.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from bubbling up to the card
        toggleCards();
    });
});

// Allow clicking on the faded card to swap
document.querySelectorAll('.auth-card').forEach(card => {
    card.addEventListener('click', (event) => {
        // Check if the clicked card is not active
        if (!card.classList.contains('active')) {
            toggleCards();
        }
    });
});

