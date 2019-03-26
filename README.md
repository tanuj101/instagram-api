
# instagram-api

  

> A simple Promise based Instagram scrapper


<br>

###  Try it out now

```
https://mighty-depths-56624.herokuapp.com/api/[username]
```

## Use it in your command-line !
Clone the repo then,
```sh
./instagram [username]
```

## Installation
```sh
$ npm install instagram-api --save
```
 
## Usage

  ```js
  const myScrapper = require('instagram-api')
  ```
  #### To get information of 10 latest posts of a user
  ```js
  myScrapper.getPostData("salenagomez").then(data=>{
console.log(data)
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
  myScrapper.MetaDataScrapper("selenagomez").then(data=>{
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

  #### Feel free to contribute or raise issues !
  
## License
GPL-V2 © [Tanuj Nagpal](www.github.com/Tanuj69)