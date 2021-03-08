const fs = require('fs');

try {
    const file = process.argv[2];
    //Synchronous file read
    const content = fs.readFileSync(file).toString();
    //We get the lines
    const lines = content.split('\n').length;
    console.log(`Total lines = ${lines}`);

} catch(error) {
    console.error(error)
}
