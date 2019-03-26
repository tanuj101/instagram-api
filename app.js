const Profile = require("./lib/app.js");
const express = require("express");
const app = express();

app.get("/api/:username", (req, res) => {
  let profile = new Profile(req.params.username);
  profile
    .getMetaData()
    .then(() => {
      profile.getPostData().then(() => {
        console.log(profile);
        res.json(profile);
        res.end();
      });
    })
    .catch(err => {
      throw err;
    });
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

