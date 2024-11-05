document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.service-scheduling-form');

  form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Prevent default form submission

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries()); // Convert FormData to a regular object

      try {
          const response = await fetch('/api/schedule-service', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data), // Send form data as JSON
          });

          if (response.ok) {
              const result = await response.json();
              alert('Service scheduled successfully!');
              // Optionally, redirect or clear the form
              form.reset();
          } else {
              const error = await response.json();
              alert(`Error scheduling service: ${error.message}`);
          }
      } catch (error) {
          console.error('Error submitting form:', error);
          alert('An error occurred while scheduling the service.');
      }
  });
});
