import axios from "axios";

const baseURL = process.env.NODE_ENV === "production" ? "/api" : "";

// 创建axios实例
const service = axios.create({
  baseURL,
  timeout: 5000 // 请求超时时间
});

export default service;
