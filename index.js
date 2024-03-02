const https = require('https');

const url = 'https://dumindu.requestcatcher.com/test';

https.get(url, (res) => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  res.on('end', () => {
    console.log(data);
  });
}).on('error', (err) => {
  console.error(err);
});