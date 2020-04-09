const ProxyManager = require('proxy-manager');
const proxyManager = new ProxyManager('proxies.txt');
const postReq = require("./postReq.js");
const gen = require("./serial.js");
const fs = require('fs').promises;

module.exports = () => {
    return new Promise(async (resolve, reject) => {
        // const serial = "7380202-03042-1327-0407-04";
        const serial = gen();
        const randomProxy = proxyManager.getRandomProxy();
        try {
            const response = (await postReq(serial, randomProxy)).data;
            const valid_serial = response.includes("Chick-fil-A Customer Experience Survey (US) - Questions")
            if (valid_serial) {
                await fs.writeFile("serials.txt", serial + "\n");
                resolve("Found valid serial code: " + serial)
            }
        } catch (err) {
            resolve(err.response.status)
        };
    });
}









