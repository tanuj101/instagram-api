#!/usr/bin/env node
"use strict";
const download = require("image-downloader");
const prof = require("./lib/Profile.js");
const os = require("os");
const dns = require("dns");
const ora = require("ora");
const chalk = require("chalk");
const logUpdate = require("log-update");
const spinner = ora();
const end = process.exit;
const arg = process.argv[2];
const fse = require("fs-extra");
const user = process.argv[3];
const pos = chalk.red.bold("›");
const dir = `${os.homedir()}/Instagram`;
fse.ensureDir(dir, err => {
  if (err) {
    logUpdate();
    console.log(err.message, "\n");
    throwIssue();
    end(1);
  }
});
const throwIssue = () => {
  console.log(
    "Please raise a issue here https://github.com/Tanuj69/instagram-api/issues if this is unexpected"
  );
};
const dim = foll => {
  return chalk.dim(foll);
};
const checkConnection = () => {
  dns.lookup("instagram.com", err => {
    if (err) {
      logUpdate(`\n${pos} ${dim("Please check your internet connection!")}\n`);
      throwIssue();
      end(1);
    }
    logUpdate();
    spinner.text = "Checking";
    spinner.start();
  });
};

const noUserArg = () => {
  if (!user) {
    logUpdate(`\n${pos} ${dim("<username/link> required\n")}`);
    throwIssue();
    end(1);
  }
};

const returnBase = () => {
  noUserArg();
  checkConnection();
};

const errorMessage = () => {
  logUpdate(`\n${pos} ${user} ${dim("is not an Instagram user!")}\n`);
  throwIssue();
  spinner.stop();
  end(1);
};

const fetchProfile = () => {
  logUpdate();
  spinner.text = "Fetching Profile";
};
const argArray = ["-m", "--meta", "-D", "--download"];
if (!arg || arg === "-h" || arg === "--help" || argArray.indexOf(arg) === -1) {
  console.log(`
 ${chalk.cyan("Usage")} : instaget ${chalk.cyan("[command]")} ${chalk.white(
    "<username>"
  )}
 ${chalk.cyan("Command")} :
  -m, ${dim(
    "--meta"
  )}  Get info like number of following,followers,Profile picture link etc.
  -D, ${dim(
    "--download"
  )}  Download all available media (Profile picture, latest 12 posts ) \n
 ${chalk.cyan("Example")} : instaget -m selenagomez
           instaget -D selenagomez
  `);
  end(1);
}
logUpdate();
spinner.text = "Please Wait!";
spinner.start();
if (arg == "-D" || arg == "--download") {
  fetchProfile();
  returnBase();
  const pro = new prof(user);
  pro
    .getData()
    .then(async data => {
      delete data.bio;
      delete data.url;
      let str = JSON.stringify(data);
      const u = require("get-urls");
      let URLArr = Array.from(u(str));
      spinner.text = `Downloading to ${dir}`;
      logUpdate();
      URLArr = URLArr.filter(e => e.length > 45);
      let flag = false;
      for (let i = 0; i < URLArr.length; i++) {
        let link = URLArr[i];
        await download.image({
          url: link,
          dest: `${dir}/`
        });
        if (i == URLArr.length - 2) flag = true;
        if (flag) {
          spinner.text = "Downloaded";
          logUpdate();
          console.log("Downloading complete");
          process.exit(1);
        }
      }
    })
    .catch(e => {
      logUpdate();
      console.log(e.message, "\n");
      throwIssue();
      process.exit(1);
    });
}
if (arg == "-m" || arg == "--meta") {
  fetchProfile();
  returnBase();
  const pro = new prof(user);
  pro
    .getData()
    .then(data => {
      logUpdate(`
    ${chalk.blue.bold("Username")}: ${data.username}
    ${chalk.blue.bold("Biography")}: ${data.bio}
    ${chalk.blue.bold("Followers")}: ${data.followers}
    ${chalk.blue.bold("Following")}: ${data.following}
    ${chalk.blue.bold("Total Posts")}: ${data.totalPosts}
    ${chalk.blue.bold("Profile URL")}: ${data.url}
    ${chalk.blue.bold("Profile Picture")}: ${data.profilePicHD}
    `);
      spinner.stop();
      // console.log(data);
    })
    .catch(err => {
      console.log(err);
      errorMessage();
    });
}
if (arg == "-m" || arg == "--meta") {
  returnBase();
}
