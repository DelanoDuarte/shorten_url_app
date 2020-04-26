import axios from "./client";

export default class UrlShortenerAPI {

    static async shorter_url(url) {
        return await axios.get(`${process.env.REACT_APP_API_URL}/shortener/short?url=${url}`)
            .then(response => response.data)
            .catch(error => console.log(error))
    }

}