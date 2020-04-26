const shortenerUrlService = require("../../services/url_shortener_service")

describe("short url service test", () => {

    beforeAll(async () => {
        const ShortModel = require("./../../config/repository").ShortUrl
        return await ShortModel.sync({ force: true });
    });

    it("should add a new short url on database", async () => {
        return await shortenerUrlService.short("https://www.google.com")
            .then(data => {
                expect(data).toHaveProperty("short_url")
            })
    })

    it("should find a short url by the short code", () => {
        shortenerUrlService.short("https://www.google.com")
            .then(data => {
                return shortenerUrlService.find_by_short_url(data.short_url)
                    .then(data => {
                        expect(data).toHaveProperty("short_url")
                        expect(data).toHaveProperty("long_url")
                    })
            })

    })

})