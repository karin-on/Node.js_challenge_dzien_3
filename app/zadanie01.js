//Twój kod

const crypto = require('crypto');

const myHash = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';
const algorithms = ['sha256', 'sha512', 'md5', 'rmd160', 'aes192'];
const passwords = ['??TegoHasła', 'CodersLab', 'Node.js Szyfruje Pliki', 'Zaźółć Gęślą Jaźń', 'Moje Haslo 1@3!', '111#$((@)n', 'Dzisiaj Szyfruje 83'];

let algorithm = '';
let password = '';

algorithms.forEach(alg => {
    passwords.forEach(pass => {
        let hash = crypto.createHmac(alg, pass).digest('hex');
        if (hash === myHash) {
            algorithm = alg;
            password = pass;
        }
    })
});

console.log(algorithm);
console.log(password);
