const EventEmitter = require('events');


class Logger extends EventEmitter {
    execute = cb => {
        this.emit('start');
        cb();
        this.emit('finish');
    }
}   

const logger = new Logger();


logger.on('start', () => console.log('Starting'));

logger.on('finish', () => console.log('Finishing'));


logger.execute(() => console.log('Hello world'));