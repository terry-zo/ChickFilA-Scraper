const worker = require("./worker.js")


async function hello() {
    while (true) {
        try {
            let results = await Promise.all([worker(), worker(), worker(), worker(), worker(), worker(), worker(), worker(), worker(), worker()]);
            console.log(results)
        } catch (err) {
            console.log(err)
        }
    }
}

hello()