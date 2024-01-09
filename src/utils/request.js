import axios from "axios";

// http://architechproj-001-site1.anytempurl.com/api/User/LogIn

const request = axios.create({
  baseURL: "http://architechproj-001-site1.anytempurl.com/api",
});

export const loginRequest = axios.create({
  baseURL: "http://architechproj-001-site1.anytempurl.com/api/User",
});

export default request;
