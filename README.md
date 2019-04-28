-> # Instagram-public-api
[![npm version](https://badge.fury.io/js/instagram-public-api.svg)](https://badge.fury.io/js/instagram-public-api)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![npm downloads](https://img.shields.io/npm/dy/instagram-public-api.svg)]
> A simple Instagram module to get a user's :- <-
* No. of followers
* No. of following
* No. of posts
* No. of likes and comments on latest 10 posts


###  Try it out now

```
https://mighty-depths-56624.herokuapp.com/api/[username]
```

## Use it in your command-line !
Clone the repo then,
```sh
npm install
```

```sh
./instagram [username]
```

## Installation
```sh
$ npm install instagram-public-api --save
```
 
## Usage

  ```js
  const myApi = require('instagram-public-api')
  ```
  
#### To get information of 10 latest posts of a user

  ```js
  myApi.getPostData("selenagomez").then(data=>{
		---Do your stuff---
})
  ```
#### Output
```
{username: 'selenagomez',
  followers: 147800000,
  following: 59,
  noOfPosts: 1478,
  postLinks:
   [ 'https://www.instagram.com/p/BvSAdFYAEau/',
     'https://www.instagram.com/p/Bu6um0bg4c2/',
     'https://www.instagram.com/p/BuuOdfrgu3t/',
     'https://www.instagram.com/p/BucOYdPAttg/',
     'https://www.instagram.com/p/Bubv5TggD0v/',
     'https://www.instagram.com/p/Bt35UNMAhm7/',
     'https://www.instagram.com/p/BtxEL1EgbYa/',
     'https://www.instagram.com/p/BtBuE0Hg-6j/',
     'https://www.instagram.com/p/Bsqa7_GgJif/',
     'https://www.instagram.com/p/BsoZalUA8HZ/',
     'https://www.instagram.com/p/BoFlrM7gwnK/',
     'https://www.instagram.com/p/BoBdx-Ng9JC/' ],
  postData:
   { 'https://www.instagram.com/p/BvSAdFYAEau/': { likes: 5800000, comments: 52700 },
     'https://www.instagram.com/p/Bu6um0bg4c2/': { likes: 5400000, comments: 43800 },
     'https://www.instagram.com/p/BuuOdfrgu3t/': { likes: 3900000, comments: 34600 },
     'https://www.instagram.com/p/BucOYdPAttg/': { likes: 1900000, comments: 30600 },
     'https://www.instagram.com/p/Bubv5TggD0v/': { likes: 9000000, comments: 94200 },
     'https://www.instagram.com/p/Bt35UNMAhm7/': { likes: 6100000, comments: 68700 },
     'https://www.instagram.com/p/BtxEL1EgbYa/': { likes: 14200000, comments: 138300 },
     'https://www.instagram.com/p/BtBuE0Hg-6j/': { likes: 10100000, comments: 94200 },
     'https://www.instagram.com/p/Bsqa7_GgJif/': { likes: 7600000, comments: 85300 },
     'https://www.instagram.com/p/BsoZalUA8HZ/': { likes: 9000000, comments: 178400 } 
   } 
 }
```
#### To get Meta data 
 
  ```js
  myScrapper.getMetaData("selenagomez").then(data=>{
	console.log(data)
	})
  ```

#### Output
  ```
  {
  username: 'selenagomez',
  followers: 147800000,
  following: 59,
  noOfPosts: 1478,
  postLinks:
   [ 'https://www.instagram.com/p/BvSAdFYAEau/',
     'https://www.instagram.com/p/Bu6um0bg4c2/',
     'https://www.instagram.com/p/BuuOdfrgu3t/',
     'https://www.instagram.com/p/BucOYdPAttg/',
     'https://www.instagram.com/p/Bubv5TggD0v/',
     'https://www.instagram.com/p/Bt35UNMAhm7/',
     'https://www.instagram.com/p/BtxEL1EgbYa/',
     'https://www.instagram.com/p/BtBuE0Hg-6j/',
     'https://www.instagram.com/p/Bsqa7_GgJif/',
     'https://www.instagram.com/p/BsoZalUA8HZ/',
     'https://www.instagram.com/p/BoFlrM7gwnK/',
     'https://www.instagram.com/p/BoBdx-Ng9JC/' ],
  postData: {} }
  ```
  
### If you're working with this API on a Ubuntu server
```sh
sudo apt-get install -yq gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

####  Feel free to contribute or raise issues !
  
  
## License
GPL-V2 © [Tanuj Nagpal](www.github.com/Tanuj69)
