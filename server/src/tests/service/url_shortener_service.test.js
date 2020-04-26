const shortenerUrlService = require("../../services/url_shortener_service")

describe("short url service test", () => {

    beforeAll(async () => {
        const ShortModel = require("./../../config/repository").ShortUrl
        return await ShortModel.sync({ force: true });
    });

    it("should add a new short url on database", () => {
        const encoded_url = shortenerUrlService.encode("https://www.google.com".length)
        return shortenerUrlService.short("https://www.google.com")
            .then(data => {
                const result = {
                    short_url: encoded_url,
                    long_url: "https://www.google.com"
                }
                expect({ "short_url": data.short_url, "long_url": data.long_url }).toStrictEqual(result)
            })
    })

    it("should find a short url by the short code", () => {
        const encoded_url = shortenerUrlService.encode("https://www.google.com".length)
        shortenerUrlService.short("https://www.google.com").then(data => { })

        return shortenerUrlService.find_by_short_url(encoded_url)
            .then(data => {
                const result = {
                    short_url: encoded_url,
                    long_url: "https://www.google.com"
                }
                expect({ "short_url": data.short_url, "long_url": data.long_url }).toStrictEqual(result)
            })
    })

})