import axios from "axios";

const fetchUrl = "/api/v1/issues";
const getUrl = id => `${fetchUrl}/${id}`;

const index = () => axios.get(fetchUrl);
const get = id => axios.get(getUrl(id));

export { index, get };
