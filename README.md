
<h1> Instagram Api for Public profiles <sup>v2</sup></h1>

  

![npm version](https://img.shields.io/npm/v/instagram-public-api.svg) ![open source <3](https://badges.frapsoft.com/os/v1/open-source.svg?v=102) ![No. of downloads](https://img.shields.io/npm/dt/instagram-public-api.svg) ![License](https://img.shields.io/github/license/tanuj69/instagram-api.svg)

  
> A simple Instagram module to get a user's :-


1. Biography

2. Number of Followers

3. Number of Followings

4. Profile Picture thumbnail URL

5. Profile Picture HD URL

6. Each post object will contain

	1. Dimensions of Image

	2. Image's URL in HD

	3. Image's thumbnail URL

	4. Number of Likes

	5. Number of Comments

	6. URL of the POST

  

## Installation

  

```sh

npm install instagram-public-api

```

  

## Test it online!

https://npm.runkit.com/instagram-public-api

![enter image description here](https://i.imgur.com/uBTIpe3.png)


## Usage

  

```js

const  Profile  =  require("instagram-public-api");

const  user  =  new  Profile("selenagomez");

user.getData().then(data=>{

---Do  your  Stuff---

})

```

  

## Output

  

```js

{

"username": "selenagomez",

"url": "https://www.instagram.com/selenagomez",

"bio": "Light, space, zest -that’s God. With him on my side I’m FEARLESS, afraid of no one and nothing. A21 global anti human trafficking organization A21.org",

"followers": 155698399,

"following": 61,

"totalPosts": 1506,

"posts": [

{

"dimensions": {

"height":  1080,

"width":  1080

},

"imageURL":  "https://instagram.fdel1-1.fna.fbcdn.net/vp/e522acfad3fd3c4091ea88a5b8479888/5E0C70E1/t51.2885-15/e35/s1080x1080/66656269_1648697008594563_8361695703211281609_n.jpg?_nc_ht=instagram.fdel1-1.fna.fbcdn.net",

"likes":  3956372,

"comments":  24986,

"url":  "https://instagram.com/p/B1WxkKfDpQy",

"imageThumbnail":  "https://instagram.fdel1-1.fna.fbcdn.net/vp/c72416cc9678de364449ab8f37793a0d/5DDDA525/t51.2885-15/sh0.08/e35/s640x640/66656269_1648697008594563_8361695703211281609_n.jpg?_nc_ht=instagram.fdel1-1.fna.fbcdn.net"

}

],

"profilePicThumb": "https://instagram.fdel1-1.fna.fbcdn.net/vp/b104c292ae8e59d902586c2107a39a72/5DF2E637/t51.2885-19/s150x150/52780205_395221154575465_269834356913078272_n.jpg?_nc_ht=instagram.fdel1-1.fna.fbcdn.net",

"profilePicHD": "https://instagram.fdel1-1.fna.fbcdn.net/vp/073c225007a67fa0563350a2441f0053/5DFDDF3A/t51.2885-19/s320x320/52780205_395221154575465_269834356913078272_n.jpg?_nc_ht=instagram.fdel1-1.fna.fbcdn.net"

}

```

  

See full output [here](https://pastebin.com/7GT98pNa)

  

#### Feel free to contribute or raising issues.

  

## License

  

GPL-V2 © [Tanuj Nagpal](www.github.com/Tanuj69)