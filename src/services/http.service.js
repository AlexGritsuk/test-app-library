import axios from "axios";


axios.defaults.baseURL = "localhost:8080/books";

const httpService = {
	get: axios.get,
};

export default httpService;
