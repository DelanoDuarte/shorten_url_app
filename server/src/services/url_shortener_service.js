const { ShortUrl } = require("../config/repository")

const ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const BASE = ALPHABET.length;

module.exports = {

    async short(url) {
        const new_short_url = await ShortUrl.create({
            long_url: url,
            short_url: this.encode(url.length)
        })
        return new_short_url
    },

    async find_by_short_url(short_url_param) {
        const short_url = await ShortUrl.findOne({
            where: {
                short_url: short_url_param
            }
        })
        return short_url
    },

    encode(num) {
        let s = ""
        while (num > 0) {
            s += ALPHABET[num % BASE] + Math.floor(10 + Math.random() * 90)
            num = parseInt(num / BASE, 10)
        }
        return s.split("").reverse().join("");
    }
}
