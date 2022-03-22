import axios from "axios";

const apiUrl = "https://6231af9e05f5f4d40d80deb1.mockapi.io";

const axiosInstance = () => axios.create({ baseURL: apiUrl });

export default axiosInstance;
