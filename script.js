// Get the media URL from the form
const mediaUrl = document.querySelector('input[name="media_url"]').value;

// Make a POST request to the download endpoint
fetch('/download', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    mediaUrl
  })
})
.then(response => response.json())
.then(data => {
  // If the download was successful, display a success message
  if (data.status === 'success') {
    alert('Download successful!');
  } else {
    alert('Download failed!');
  }
});
