import axios from "axios";

const baseUrl = "http://localhost:3004";

export const fetchSuppliers = value => {
  return axios.get(`${baseUrl}/suppliers?q=${value}`);
};
