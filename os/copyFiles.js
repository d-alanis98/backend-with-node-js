const fs = require('fs');

fs.copyFile('test.txt', 'copy.txt', error => {
    if(error) {
        console.error(error);
        return;
    }
    console.log('File copied successfully');
});