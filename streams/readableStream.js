const  { Readable } = require('stream');

const readableStream = new Readable();

readableStream.push(`${Math.floor(Math.random() * 11)} `.repeat(10));
readableStream.push(null);

readableStream.pipe(process.stdout);