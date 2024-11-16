import { input } from "@inquirer/prompts";
import qr from "qr-image";
import fs from "fs";
import path from "path";

async function generateQRCode() {
  const url = await input({message: "Enter thr URL: "});
  const qrCode = qr.image(url,{type:"png"});

  const folderPath = "./QRCode-image";
  if(!fs.existsSync(folderPath)){
    fs.mkdirSync(folderPath);
  }

  const fileName = url.replace(/^https?:\/\//, '').replace(/[^a-zA-Z0-9]/g, '_') + '_QR.png';

  const outputPath = path.join(folderPath,fileName);

  qrCode.pipe(fs.createWriteStream(outputPath));

  fs.writeFile('URL.txt', url, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 

  console.log(`QR code generated and saved as ${outputPath}`);
}

generateQRCode();

