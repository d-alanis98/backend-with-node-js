const fs = require('fs');

fs.readdir(__dirname, (error, files) => {
    if(error)
        return console.log(error);
    console.log(files);
})