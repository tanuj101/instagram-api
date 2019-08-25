const parser = require("jsdom");
const axios = require("axios");
const { JSDOM } = parser;
class Profile {
  constructor(username) {
    this.username = username;
    this.url = `https://www.instagram.com/${username}`;
    this.bio = "";
    this.followers = 0;
    this.following = 0;
    this.totalPosts = 0;
    this.posts = [];
    this.profilePicThumb = "";
    this.profilePicHD = "";
  }
  async getData() {
    if (!this.username) return Promise.reject("Username can't be empty");
    const page = await axios.get(this.url);
    // if()return Promise
    const document = new JSDOM(page.data, { runScripts: "dangerously" });
    // console.log(document.window._sharedData.entry_data);
    const userInfo =
      document.window._sharedData.entry_data.ProfilePage[0].graphql.user;
    this.bio = userInfo.biography;
    this.following = userInfo.edge_follow.count;
    this.followers = userInfo.edge_followed_by.count;
    this.profilePicHD = userInfo.profile_pic_url_hd;
    this.profilePicThumb = userInfo.profile_pic_url;
    const postData = userInfo.edge_owner_to_timeline_media;
    const posts = userInfo.edge_owner_to_timeline_media.edges;
    this.totalPosts = postData.count;
    for (let i = 0; i < posts.length; i++) {
      let post = posts[i].node;
      const data = {
        dimensions: post.dimensions,
        imageURL: post.display_url,
        likes: post.edge_liked_by.count,
        comments: post.edge_media_to_comment.count,
        url: `https://instagram.com/p/${post.shortcode}`,
        imageThumbnail: post.thumbnail_src
      };
      this.posts.push(data);
    }
    return this;
  }
}

module.exports = Profile;
