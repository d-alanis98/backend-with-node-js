const fs = require('fs');

const file = process.argv[2];

if(!file) {
    throw new Error('File not specified');
}

//Synchronous file read
fs.readFile(file, (error, data) => {
    if(error) {
        console.error(error);
        return;
    }
    //We get the lines
    const lines = data.toString().split('\n').length;
    console.log(`Total lines = ${lines}`);
});

