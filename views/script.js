// Define the function to be executed when the edit button is clicked
function handleEditButtonClick(event) {
    // Prevent the default behavior of the button (e.g., submitting the form)
    event.preventDefault();

    // Retrieve form data
    const formData = new FormData(document.getElementById('edit-form'));
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    console.log(formData);

    // // Make a POST request to the API endpoint
    // fetch('https://example.com/api/edit', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         // Add any additional headers if needed
    //     },
    //     body: JSON.stringify(data), // Convert data to JSON format
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.json(); // Parse the JSON response
    // })
    // .then(data => {
    //     // Handle the response data as needed
    //     console.log('Response:', data);
    // })
    // .catch(error => {
    //     // Handle any errors that occurred during the fetch
    //     console.error('Error:', error);
    // });
}

// Find the edit button by its ID and add a click event listener
const editButton = document.getElementById('edit-button');
editButton.addEventListener('click', handleEditButtonClick);
