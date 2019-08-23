const Profile = require("./lib/Profile.js");
const express = require("express");
const app = express();

app.get("/api/meta/:username", async (req, res) => {
  let NewProfile = new Profile(req.params.username);
  try {
    await NewProfile.getMetaData();
    return res.json(NewProfile).end();
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
});
app.get("/api/full/:username", async (req, res) => {
  let NewProfile = new Profile(req.params.username);
  try {
    await NewProfile.getMetaData();
    await NewProfile.getPostData();
    return res.json(NewProfile).end();
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("up and running");
});
