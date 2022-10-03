import axios from "axios";
const axiosClient = axios.create({
  baseURL: "https://my-portfolio-kle.herokuapp.com/api/v1",
});
axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  function (response) {
    return response.data.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default axiosClient;
