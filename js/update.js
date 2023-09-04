// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form data
    const fullName = document.getElementById('fullName').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const email = document.getElementById('email').value;

    // Create JSON object
    const formData = {
        name: fullName,
        email: email,
        mobile: contactNumber,
        meta: 'Data Updated' // Replace with the actual meta data
    };

    // Send data to the API
    sendDataToAPI(formData);

    // Update Google Sheets
    // updateGoogleSheet(formData);
});

// Function to send data to the API
function sendDataToAPI(data) {
    fetch('https://api.propacity.in/api/v1/webhooks/integration/61cf0d44-1ede-4dfa-b3ce-930072581261/insertLead', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log('Data sent successfully to the API');
            console.log(data);
        } else {
            console.error('Failed to send data to the API');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// // Wait for the Google API client library to load
// gapi.load('client', function () {
//     // Initialize the Google API client
//     gapi.client.init({
//       apiKey: 'API Key',
//       discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4']
//     })
//     .then(function () {
//       // Function to update Google Sheets
//       function updateGoogleSheet(data) {
//         // Call the Google Sheets API to append data
//         gapi.client.sheets.spreadsheets.values.append({
//           spreadsheetId: '1rQ2WLN6rG3OE7JdDx-oPFMyKXY4XwKfTHq0L-ThihGA',
//           range: 'Sheet1', // Change to the specific sheet name you want to update
//           valueInputOption: 'RAW',
//           insertDataOption: 'INSERT_ROWS',
//           resource: {
//             values: [[data.name, data.email, data.mobile, data.meta]]
//           }
//         })
//         .then(function (response) {
//           console.log('Data updated in Google Sheets:', response.result);
//           console.log(response.result);
//         })
//         .catch(function (error) {
//           console.error('Error updating Google Sheets:', error);
//         });
//       }
  
//       // Call the updateGoogleSheet function with your data
//       const formData = {
//         name: 'name here',
//         email: 'email here',
//         mobile: 'mobile here',
//         meta: 'meta data here'
//       };
  
//       // Example usage:
//       updateGoogleSheet(formData);
//     })
//     .catch(function (error) {
//       console.error('Error initializing Google API client:', error);
//     });
//   });
  
  
