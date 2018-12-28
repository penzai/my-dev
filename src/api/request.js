import axios from "axios";
import qs from "qs";

const request = axios.create({
  baseURL: "/api",
  timeout: 30000
});

export default {
  get(url) {
    return request({
      url,
      method: "get"
    });
  },
  post(url, params) {
    return request({
      url,
      method: "post",
      data: qs.stringify(params),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      }
    });
  }
};
