const fs = require('fs');

const readableStream = fs.createReadStream('./stream/input.txt', {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream('./stream/output.txt');

readableStream.on('readable', () => {
    try {
        //process.stdout.write(`[${readableStream.read()}]`);
        writableStream.write(`[${readableStream.read()}]`);
    } catch(error) {

    }
});

readableStream.on('end', () => {
    console.log('Done');
});

//writableStream.write('${readableStream.read()}\n');
//writableStream.end('Akhir dari writable stream!');