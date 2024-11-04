document.getElementById('service-scheduling-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Gather form data
    const formData = {
      serviceType: document.getElementById('service-type').value,
      date: document.getElementById('date').value,
      time: document.getElementById('time').value,
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      comments: document.getElementById('comments').value,
    };
  
    // Send a POST request to the server
    fetch('/api/schedule-service', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Service scheduled successfully!');
        event.target.reset(); 
      } else {
        alert('Failed to schedule service: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error scheduling the service.');
    });
  });
  