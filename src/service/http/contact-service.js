import BaseHttpService from "./base-http-service";

export default class ContactService extends BaseHttpService {
  all = async (page = 1, count = 1, query = "") => {
    const response = await this._axios.get(
      `/accounts?page=${page}&count=${count}&query=${query}`
    );
    return response.data;
  };

  getById = async id => {
    const response = await this._axios.get(`/accounts/${id}`);
    return response.data;
  };

  create = async data => {
    try {
      const response = await this._axios.post("/accounts", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  update = async data => {
    try {
      const response = await this._axios.put("/accounts", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  uploadPhoto = async form => {
    try {
      const response = await this._axios.post("/accounts/image/upload", form);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
}
