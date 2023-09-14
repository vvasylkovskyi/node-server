import cors from "cors";
import express from "express";
import fs from "fs";
import https from "https";
import path from "path";

const app: express.Application = express();
const PORT = 4443;

app.use(express.json());

app.use(cors());

app.use("/shaka-player", async (req, res) => {
  const filePath = path.join(__dirname, "../shaka-player.compiled.js");
  console.log("FIle: ", filePath);

  fs.readFile(filePath, (error, data) => {
    res.setHeader("Content-Type", "application/javascript");
    res.writeHead(200);
    res.write(data);
    res.end();
  });
});

https
  .createServer(
    {
      key: fs.readFileSync(
        path.resolve(__dirname, "../certs/clients_dev_ott_showmax_com.key")
      ),
      cert: fs.readFileSync(
        path.resolve(__dirname, "../certs/clients_dev_ott_showmax_com.pem")
      ),
    },
    app
  )
  .listen(PORT, function () {
    console.info(`Fake License Server is listening on port on port ${PORT}`);
  });
