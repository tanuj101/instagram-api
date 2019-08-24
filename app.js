const Profile = require("./lib/Profile.js");
const express = require("express");
const app = express();
app.get("/api/:username", async (req, res) => {
  let NewProfile = new Profile(req.params.username);
  try {
    let d = await NewProfile.getData();
    return res.json(d).end();
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
});
app.get("/api/", (req, res) => {
  res.status(400).send("Username can't be empty");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("up and running");
});
