// 开发中？
const develop = true;

let host = '';
if (develop) host = 'http://192.168.0.109:8080/collide-all/api/v1';
else '';
console.log = develop ? console.log : () => {};
console.info = develop ? console.info : () => {};

export {
	host
}