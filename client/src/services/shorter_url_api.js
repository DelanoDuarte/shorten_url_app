import axios from "./client";

export default class UrlShortenerAPI {

    static async shorter_url(urlContent) {
        return await axios.post(`${process.env.REACT_APP_API_URL}/short`, {
            url: urlContent
        })
            .then(response => response.data)
            .catch(error => console.log(error))
    }

}