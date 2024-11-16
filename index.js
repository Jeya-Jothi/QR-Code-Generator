/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import {input} from "@inquirer/prompts";
import qr from "qr-image";  //generate QR codes from a given string (in this case, the URL).
import fs from "fs";  //  allows you to interact with the file system (e.g., read and write files). It's used to save the generated QR code as an image.

async function generateQRCode() {
  
  const url = await input({message: "Enter the URL: "}); // get input from the user
  const qrCode = qr.image(url,{type:"png"});  // generate QRcode using that URL in png type.
  const outputPath = "./qrCode.png";  
  qrCode.pipe(fs.createWriteStream(outputPath)); // fs.createWriteStream(outputPath): This creates a writable stream that will save the QR code to the file qrcode.png in the current directory. | pipe(): This method takes the QR code stream (the image) and sends it to the writable stream (which writes it to the file qrcode.png).

  fs.writeFile('URL.txt', url, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 
  console.log(`QR image is generated and saved in ${outputPath}`);

}
generateQRCode();
