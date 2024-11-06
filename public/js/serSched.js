// document.getElementById('service-scheduling-form').addEventListener('submit', async function (event) {
//     event.preventDefault(); // Prevent the default form submission
  
//     const serviceType = document.getElementById('service-type').value;
//     const date = document.getElementById('date').value;
//     const time = document.getElementById('time').value;
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const comments = document.getElementById('comments').value;
  
//     try {
//       // Step 1: Fetch the clientId based on the user (if necessary)
//       const clientResponse = await fetch('/api/client?email=' + encodeURIComponent(email)); // Example: using email to get clientId
//       const clientData = await clientResponse.json();
//       const clientId = clientData.id; // Ensure your API returns the necessary id
  
//       // Step 2: Fetch available technicians if needed (optional)
//       const techResponse = await fetch('/api/technician'); // Fetch all technicians
//       const techData = await techResponse.json();
//       const technicianId = techData[0].id; 
  
//       // Step 3: Create the job using the fetched clientId and technicianId
//       const jobData = {
//         clientId,
//         technicianId, // Make sure to handle this based on your application's logic
//         serviceType,
//         date,
//         time,
//         name,
//         email,
//         phone,
//         comments,
//       };
  
//       const jobResponse = await fetch('/api/job', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(jobData),
//       });
  
//       if (jobResponse.ok) {
//         const result = await jobResponse.json();
//         alert('Service scheduled successfully!'); // You can display a success message
//         // Optionally, you might want to redirect the user or clear the form
//       } else {
//         throw new Error('Failed to schedule service');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('There was an error scheduling your service. Please try again.');
//     }
//   });
  