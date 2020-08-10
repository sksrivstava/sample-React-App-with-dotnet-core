import axios from "axios";

const baseurl = "http://localhost:53677/api/";
export default {
  dEmployee(url = baseurl + "employee/") {
    return {
      fetchall: () => axios.get(url + "getemployee"),
      fetchByid: (id) => axios.get(url + id),
      create: (newRecord) => axios.post(url + "AddEmployee", newRecord),
      update: (id, updateRecord) => axios.post(url + id, updateRecord),
      delete: (id) => axios.delete(url + id),
    };
  },
};
