const express = require("express");
const ytdl = require("ytdl-core");
const cors = require("cors");

const app = express();
app.use(cors());
app.get("/favicon.ico", (req, res) => res.status(204));
app.get("/", (req, res) => {
  res.send("Hello from server");
});
//youtube videos
app.get("/download", async (req, res) => {
  try {
    const url = req.query.url;
    const id = await ytdl.getURLVideoID(url);
    const metaInfo = await ytdl.getInfo(url);
    let video = {
      url: "https://www.youtube.com/embed/" + id,
      info: metaInfo.formats,
    };
    res.send(video);
  } catch (error) {
    console.log(error);
  }
});


app.listen(3000, () => {
  console.log("App is listning on 3000");
});