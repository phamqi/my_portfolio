import axiosClient from "./axiosClient";

const categoryApi = {
  async getAll() {
    const categoryList = await axiosClient.get("/get-profiles");
    return categoryList;
  },
};

export default categoryApi;
