const Profile = require('./lib/Profile.js');
const express = require('express');
const app = express();

app.get('/api/:username', async (req, res) => {
  let NewProfile = new Profile(req.params.username);
  try {
    let data = await NewProfile.getMetaData();
    return res.json(data).end();
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server error');
  }
});

app.get('/api', (req, res) => {
  res.status(400);
  res.send('Username cannot be empty');
  res.end();
});

app.listen(process.env.PORT || 3000, () => {
  console.log('up and running');
});
