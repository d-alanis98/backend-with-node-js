const os = require('os');

//Get CPU info
console.log('CPU info: ', os.cpus());
//Get network interface info
console.log('Network interfaces: ', os.networkInterfaces());
//Get free memory
console.log('Free memory: ', os.freemem());
//Platform type
console.log('OS: ', os.type());
//OS version
console.log('OS version: ', os.release());
//User info
console.log('User info: ', os.userInfo());