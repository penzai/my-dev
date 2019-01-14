import request from "@/utils/request";

export function api1(params) {
  return request({
    url: "/login",
    method: "post",
    params
  });
}
