const Profile = require("./lib/app.js");
const express = require("express");
const app = express();

app.get("/api/:username", async (req, res) => {
  let profile = new Profile(req.params.username);
  let data = await profile.getMetaData();
  res.json(data).end();
});
app.get("/api", (req, res) => {
  res.status(400);
  res.send("Username cannot be empty");
  res.end();
});
// config buildpacks
app.listen(process.env.PORT || 3000, () => {
  console.log("up and running");
});
