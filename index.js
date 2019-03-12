const cheerio = require("cheerio");
const req = require("request");
const puppeteer = require("puppeteer");

/*req("https://www.instagram.com/coding", (err, resp, body) => {
  if (err) throw err;
  $ = cheerio.load(body);
  let content = $("meta")
    .eq("16")
    .attr("content");
  content = content.replace(/,/g, "");
  let contentSplit = content.split(" ");
  const followers = contentSplit[0];
  const following = contentSplit[2];
  const posts = contentSplit[4];
  // console.log(followers,following,posts,content)
});*/
class Profile {
  constructor(username) {
    this.username = username;
    this.followers = "";
    this.following = "";
    this.noOfPosts = "";
    this.postLinks = [];
    this.postData = {};
  }
  async getMetaData() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.instagram.com/" + this.username);
    let data = await page.evaluate(e => {
      const meta = document.querySelectorAll("meta")[16].content;
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
    this.followers = data.followers;
    this.following = data.following;
    this.noOfPosts = data.noOfPosts;
    this.postLinks = data.links;
    await browser.close();
  }
}

let prof = new Profile("coding");
prof
  .getMetaData()
  .then(() => {
    console.log(prof);
  })
  .catch(err => {
    console.log(err);
  });
