const request = require("supertest")
const app = require("../../../app")

const service = require("../../services/url_shortener_service")

describe('short url api tests', () => {

    beforeAll(async () => {
        const ShortModel = require("./../../config/repository").ShortUrl
        return await ShortModel.sync({ force: true });
    });

    it("should short a url by url param", async () => {
        const URL = 'https://www.runtime-revolution.com/'

        const res = await request(app)
            .post(`/shortener/short`)
            .send({ url: URL })

        expect(res.status).toEqual(201)
        expect(res.body).toHaveProperty("short_url")
    })

    it("should find a short url in database and redirect", async () => {

        const URL = 'https://www.runtime-revolution.com/'

        const res_save = await request(app)
            .post(`/shortener/short`)
            .send({ "url": URL })

        const ENCODED_KEY = await res_save.body.short_url.substring(res_save.body.short_url.lastIndexOf('/') + 1)

        const res = await request(app)
            .get(`/shortener/${ENCODED_KEY}`)

        expect(res.status).toEqual(301)
    })
})
