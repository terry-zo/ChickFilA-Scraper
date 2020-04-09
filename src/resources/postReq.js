const axios = require('axios').default;
const FormData = require('form-data');

module.exports = async (serial, proxy=null) => {
    if (serial.length == 26) {
        const cookie_list = (await axios.get("https://www.mycfavisit.com/Index.aspx", {headers: {"Cookie": "AspxAutoDetectCookieSupport=1"}})).headers["set-cookie"]
        const cookie_string = cookie_list.map(i => i.split(";")[0]).join("; ")
        console.log("serial: " + serial + ", proxy: " + proxy.toString()) // serial validated
        const serial_list = serial.split("-")

        // creating form-data
        const form = new FormData();
        form.append('JavaScriptEnabled', '1');
        form.append('FIP', "True");
        form.append('CN1', serial_list[0]);
        form.append('CN2', serial_list[1]);
        form.append('CN3', serial_list[2]);
        form.append('CN4', serial_list[3]);
        form.append('CN5', serial_list[4]);
        form.append('NextButton', "Start");
        form.append('AllowCapture', "");

        let options = {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
                "Cookie": cookie_string,
                "Content-Type": form.getHeaders()['content-type']
            },
            timeout: 5000
        };
        if (proxy) {
            options.proxy = {
                host: proxy.ip,
                port: proxy.port,
                auth: {
                    username: proxy.username,
                    password: proxy.password.trim()
                }
            };
        };
        return axios.post("https://www.mycfavisit.com/Survey.aspx", form.getBuffer(), options);
    }
};
