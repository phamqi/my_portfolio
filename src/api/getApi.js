import { dataClient, dataContact, HOST } from "../contants/data";
import axiosClient from "./axiosClient";

const getApi = {
  async getProfiles() {
    let data;
    try {
      data = await axiosClient.get("/get-profiles");
    } catch (error) {}
    return { data };
  },
  async getProject() {
    let data;
    try {
      data = await axiosClient.get("/get-project");
    } catch (error) {}
    return { data };
  },
  async getContact() {
    let host;
    let data;
    try {
      data = await axiosClient.get("/get-contact");
      host = HOST;
    } catch (error) {
      data = dataContact;
      host = "";
    }
    return { data, host };
  },
  async getKnowledge() {
    let dataKnow;
    try {
      dataKnow = await axiosClient.get("/get-knowledge");
    } catch (error) {
      dataKnow = dataClient;
    }
    return { dataKnow };
  },
  async postMessage(params) {
    await axiosClient.post("/post-message", params);
  },
  async getData() {
    let data;
    let host;
    try {
      host = HOST;
      data = await axiosClient.get("/get-data");
    } catch (error) {
      data = dataClient;
      host = "";
    }
    return { data, host };
  },
};

export default getApi;
