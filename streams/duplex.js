const { Duplex } = require('stream');

const duplexStream = new Duplex({
    write(chunk, encoding, callback) {
        console.log(chunk.toString());
        callback();
    },
    read(size) {
        setTimeout(() => {
            if(this.currentCharCode > 90)
                this.push(null);
            else this.push(String.fromCharCode(this.currentCharCode++));
        }, 100);
    }
});

duplexStream.currentCharCode = 65;

duplexStream.pipe(process.stdout);