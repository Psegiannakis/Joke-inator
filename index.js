import express, { application } from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    res.render("index.ejs", {
      jokes: result.data.joke,
    });
    console.log(jokes);
  } catch (error) {
    res.status(404).send(error.result);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
