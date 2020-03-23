const request = require('request');
const fs = require('fs')
const url = process.argv[2]
//console.log(url)
const index = process.argv[3]
//console.log(index)

request(url, (error, response, body) => {
  console.log('error', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body', body);

  fs.appendFile(index, body, function(err){
    let stats = fs.statSync(index)
    let fileSizeInBytes = stats["size"]
    if(err) throw err;
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${index} `)
  })
});