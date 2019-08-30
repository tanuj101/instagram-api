import axios from 'axios';
import parser from 'jsdom';
const { JSDOM } = parser;

interface PostData {
  dimensions: any;
  imageURL: any;
  likes: any;
  comments: any;
  url: string;
  imageThumbnail: any;
}

interface UserInfo {
  biography: "Contact : hello@nishkal.in"
  blocked_by_viewer: false
  business_category_name: null
  connected_fb_page: null
  country_block: false
  external_url: "https://nishkal.in/"
  external_url_linkshimmed: "https://l.instagram.com/?u=https%3A%2F%2Fnishkal.in%2F&e=ATOeDZfPIFQE1sBeSL_NaRRm2NB9VLScqdiu3co5QcypLOzUqhoGbiuXjpJX4pp2semNRr_DxgrhMgQeTQ5E6yNkr_UdP5gE"
  followed_by_viewer: false
  follows_viewer: false
  full_name: "Nishkal Kashyap"
  has_blocked_viewer: false
  has_channel: true
  has_requested_viewer: false
  highlight_reel_count: 3
  id: "1286030747"
  is_business_account: false
  is_joined_recently: false
  is_private: false
  is_verified: false
  profile_pic_url: "https://instagram.fslv1-1.fna.fbcdn.net/vp/1329f0d500f08d216adc601c9e227b78/5E0CCB05/t51.2885-19/11375208_152696325064090_809584850_a.jpg?_nc_ht=instagram.fslv1-1.fna.fbcdn.net"
  profile_pic_url_hd: "https://instagram.fslv1-1.fna.fbcdn.net/vp/1329f0d500f08d216adc601c9e227b78/5E0CCB05/t51.2885-19/11375208_152696325064090_809584850_a.jpg?_nc_ht=instagram.fslv1-1.fna.fbcdn.net"
  requested_by_viewer: false
  username: "nishkalkashyap"
}

class Profile {

  url = `https://www.instagram.com/${this.username}`;
  bio = "";
  followers = 0;
  following = 0;
  totalPosts = 0;
  posts = [];
  profilePicThumb = "";
  profilePicHD = "";

  constructor(public username: string) { }

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

export default Profile;