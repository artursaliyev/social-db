import axios from "axios";
import { NotificationManager } from "react-notifications";

export default class BaseHttpService {
  _config = {
    baseURL: "http://192.168.233.53:1000/api",
    timeout: 5000,
    headers: { "Content-Type": "application/json" }
  };
  constructor() {
    this._axios = this._createAxios(this._config);
  }

  _createAxios(config) {
    const instanse = axios.create(config);
    // Add a request interceptor
    instanse.interceptors.request.use(
      function(config) {
        // Do something before request is sent
        return config;
      },
      function(error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // Add a response interceptor
    instanse.interceptors.response.use(
      function(response) {
        if (response && response.status !== 200) {
          NotificationManager.success(`${"OK"}`, "Успешно!");
        }
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      function(error) {
        NotificationManager.error(`${error.response.data.message}`, "Ошибка!");
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );

    return instanse;
  }

  socialNetworks = async () => {
    const response = await this._axios.get("/refs/sntypes");
    return response.data;
  };
}
