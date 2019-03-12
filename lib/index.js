const puppeteer = require("puppeteer");
const stringEvaluater = require("./evalString");
module.exports = class Profile {
  constructor(username) {
    this.username = username;
    this.followers = "";
    this.following = "";
    this.noOfPosts = "";
    this.postLinks = [];
    this.postData = {};
  }
  async getPostData() {
    if (this.postLinks.length >= 1) {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setRequestInterception(true);
      page.on("request", req => {
        if (
          req.resourceType() == "stylesheet" ||
          req.resourceType() == "font" ||
          req.resourceType() == "image"
        ) {
          req.abort();
        } else {
          req.continue();
        }
      });
      for (const url of this.postLinks.slice(0, 10)) {
        await page.goto(url);
        let data = await page.evaluate(() => {
          let postContent = document.querySelectorAll("meta")[6].content;
          postContent = postContent.replace(/,/g, "");
          let postSplit = postContent.split(" ");
          return {
            likes: postSplit[0],
            comments: postSplit[2]
          };
        });
        this.postData[url] = {
          likes: stringEvaluater(data.likes),
          comments: stringEvaluater(data.comments)
        };
      }
    } else {
      console.log("no posts");
    }
  }
  async getMetaData() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on("request", req => {
      if (
        req.resourceType() == "stylesheet" ||
        req.resourceType() == "font" ||
        req.resourceType() == "image"
      ) {
        req.abort();
      } else {
        req.continue();
      }
    });
    await page.goto("https://www.instagram.com/" + this.username);
    let data = await page.evaluate(() => {
      let meta = document.querySelectorAll("meta")[16]
        ? document.querySelectorAll("meta")[16].content
        : "";
      meta = meta.replace(/,/g, "");
      const postLinks = document.querySelectorAll(".kIKUG a");
      const linkArray = [];
      Array.from(postLinks).forEach(link => {
        linkArray.push(link.href);
      });
      const contentSplit = meta.split(" ");
      return {
        followers: contentSplit[0],
        following: contentSplit[2],
        noOfPosts: contentSplit[4],
        links: linkArray
      };
    });
    this.followers = stringEvaluater(data.followers);
    this.following = stringEvaluater(data.following);
    this.noOfPosts = stringEvaluater(data.noOfPosts);
    this.postLinks = data.links;
    await browser.close();
  }
};
/*
let prof = new Profile("selenagomez");
prof
  .getMetaData()
  .then(() => {
    prof.getPostData().then(() => {
      console.log(prof);
    });
  })
  .catch(err => {
    console.log(err);
  });*/
