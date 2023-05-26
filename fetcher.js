const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];
let count = 0;

request(url, (error, _, body) => {
  if (error) {
    console.log(error);
  } else {
    for (const c of body) {
      count++;
    }
    fs.writeFile(filePath, body, err => {
      if (err) {
        console.error(err);
      } else {
        console.log(`Downloaded and saved ${count} bytes to ./index.html`);
      }
    })
  }
});