//get our libs that we need
const path = require('path');
const fs = require('fs');
const solc = require('solc');

//get the path to the contract. __dirname is the root of our project
const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
//read in the file contents to pass to the compiler
const source = fs.readFileSync(lotteryPath,'utf8');

//compile it and only get the bytecode and interface properties
module.exports = solc.compile(source,1).contracts[':Lottery'];
//console.log(module.exports);
