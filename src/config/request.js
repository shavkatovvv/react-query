import axios from "axios";

const request = axios.create({ baseURL: "http://localhost:3600" });

export { request };
