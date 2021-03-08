const fs = require('fs');

fs.mkdir(
    './test-directory/test-subdirectory',
    { recursive: true },
    error => error && console.log(error)
);