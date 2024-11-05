document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.support-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries()); // Convert FormData to a regular object

        try {
            const response = await fetch('/api/support-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data), // Send form data as JSON
            });

            if (response.ok) {
                const result = await response.json();
                alert('Support request submitted successfully!');
                // Optionally, redirect or clear the form
                form.reset();
            } else {
                const error = await response.json();
                alert(`Error submitting request: ${error.message}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the support request.');
        }
    });
});
