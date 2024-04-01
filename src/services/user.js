import api from "./axiosClient";

const userdata = [
  {
    "id":1,
    "name": "Sen"
  },
  {
    "id":2,
    "name": "Sam"
  },
  {
    "id":3,
    "name": "Jeff"
  },
  {
    "id":4,
    "name": "Eric"
  },
]

export const user = {
  async getAll() {
    // const { data } = await api.get("/users");
    return userdata;
  },
  async createOne({ name }) {
    const { data } = await api.post("/users", { name });
    return data;
  },
};
