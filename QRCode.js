let qrCodeImageUrl = ''; // Declare qrCodeImageUrl globally
document.querySelector(".generate-button").addEventListener('click', async () => {
  const url = document.querySelector("input").value;
  if (!url) {
    alert('Please enter a valid URL');
    return;
  }

    // Generate QR code directly in the browser
    QRCode.toDataURL(url, { errorCorrectionLevel: 'H' }, function (err, dataUrl) {
      if (err) {
        console.error('Error generating QR code:', err);
        return;
      }
  
      // Create a new image element
      const img = document.createElement('img');
      img.src = dataUrl; // The base64 encoded QR code image
      img.alt = 'QR Code';
  
      // Clear previous QR Code and append the new one
      const imageContent = document.querySelector('.image-content');
      imageContent.classList.add("image-content-margin");
      imageContent.innerHTML = ''; // Clear existing content
      imageContent.appendChild(img); // Append the new image

      // Show the Download button
      const downloadButton = document.getElementById('download');
      downloadButton.classList.add("download-margin")
      downloadButton.style.display = 'inline-block';

      // Handle download button click
      downloadButton.onclick = function() {
        downloadButton.textContent = "Downloaded";
        const link = document.createElement('a');
        link.href = qrCodeImageUrl; // Same URL for the QR code
        link.download = 'qr_code.png'; // File name for download
        link.click(); // Trigger the download
      };
    });
});
