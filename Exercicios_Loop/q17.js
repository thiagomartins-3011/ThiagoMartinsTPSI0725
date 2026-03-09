const prompt = require("prompt-sync")();

for (let i = 1; i <= 1000; i++) {

    if (i % 5 === 0 && i % 3 !== 0) {
        console.log(i);
    }

}