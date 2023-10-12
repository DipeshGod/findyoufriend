import axios from "../axios";

export const getUsersApi = () => {
  return axios.get("/users");
};
