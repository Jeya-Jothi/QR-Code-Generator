import express from "express";
import path from "path";

const app = express();
const PORT = 5500;

app.use(express.static(path.join(process.cwd(), "public"))); // allows to render public files

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
