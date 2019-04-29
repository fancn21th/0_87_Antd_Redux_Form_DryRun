import axios from "axios";

const baseUrl = "http://localhost:3004";

export const fetchSuppliers = value => {
  const searchValue = value.trim().length > 0 ? value : "!@#$%^";
  return axios.get(`${baseUrl}/suppliers?q=${searchValue}`);
};
