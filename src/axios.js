import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-8cfa0/us-central1/api", //api url
});

export default instance;
