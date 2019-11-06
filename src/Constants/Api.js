/* eslint-disable class-methods-use-this */
import axios from "axios";
import { get } from "lodash";

// axios.defaults.baseURL = "http://45.79.214.61/api/v1";
axios.defaults.baseURL = "https://reqres.in/";

class Api {
  
  async login(postData) {
    try {
      const data = await axios.post("/api/login",
      {email:postData[0], password:postData[1]}
      );
      const res = get(data, "data");
      return res;
    } catch (e) {
      const err = get(e, "response"); //while 'Error' response from server is inside e.response
      throw err.data;
    }
  }

  async register(postData) {
    try {
      const data = await axios.post("/api/register",
      {email:postData[0], password:postData[1]}
      );
      const res = get(data, "data");
      return res;
    } catch (e) {
      const err = get(e, "response"); //while 'Error' response from server is inside e.response
      throw err.data;
    }
  }

  
}

export default new Api();
