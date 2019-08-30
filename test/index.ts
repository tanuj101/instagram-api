import Profile from './../index';

const profile = new Profile('joerogan');
profile.getData()
    .then((data) => {
        console.log(data.bio, data.followers);
    })
    .catch(console.error);