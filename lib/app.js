const Profile = require('./Profile');

module.exports.getData = async uname => {
  let NewProfile = new Profile(uname);
  await NewProfile.getMetaData();
  await NewProfile.getPostData();
  return NewProfile;
};

module.exports.getMetaData = async uname => {
  let NewProfile = new Profile(uname);
  await NewProfile.getMetaData();
  return NewProfile;
};
