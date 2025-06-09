const btn = document.querySelector(".submit-btn-js");
const input = document.getElementById("url-input");
const canvas = document.getElementById("qrcode");
const downloadLink = document.getElementById("download-link");
const qrText = document.querySelector(".qr-image-txt");
const year = document.getElementById("year");

year.innerHTML = new Date().getFullYear();

btn.addEventListener("click", () => {
  const url = input.value;
  if (!url) return alert("Please enter a URL");

  // Generate QR code in canvas
  QRCode.toCanvas(canvas, url, function (error) {
    if (error) return console.error(error);

    // Show download image
    const imageURL = canvas.toDataURL("image/png");
    downloadLink.href = imageURL;
    canvas.style.display = "inline";
    qrText.style.display = "none";
    downloadLink.style.display = "inline";
  });
});
