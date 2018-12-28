//Twój kod

const fs = require('fs');
const crypto = require('crypto');


process.argv.forEach((arg, i) => {
    if (i > 1) {
        fs.readFile(arg, 'utf-8', (err, data) => {
            if (err === null) {
                let hash = crypto.createHmac('sha256', data).digest('hex');
                console.log(hash);

            } else {
                console.log('Błąd: ' + err);
            }
        });
    }
});


