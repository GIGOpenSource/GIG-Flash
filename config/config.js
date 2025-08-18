const develop = true;

let host = '';
if (develop) host = '111111111';
else '';
console.log = develop ? console.log : () => {};
console.info = develop ? console.info : () => {};

export {
	host
}
