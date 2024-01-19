const express = require("express");
const ytdl = require("ytdl-core");
const cors = require("cors");
const instagramDl = require("@sasmeee/igdl");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT

app.get("/favicon.ico", (req, res) => res.status(204));
app.get("/", (req, res) => {
  res.send("Hello from server");
});

//youtube videos
app.get("/download", async (req, res) => {
  try {
    res.send('Yt video downloader...')
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

//Insta reels
app.get("/insta-reel-download", async (req, res) => {
  try {
    const url = req.query.url;
    res.send("insta reel downloader...");
    if (!url) {
      throw new Error("URL is required");
    }

    const dataList = await instagramDl(url);
    res.json({ message: "Success", data: dataList });
  } catch (error) {
    console.error("Error occurred", error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`App is listning on ${PORT}`);
});
