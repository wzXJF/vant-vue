// 此js文件主要是管理
import Cookies from "js-cookie";

const TokenKey = "Admin-Token";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  let minute = 48 * 60;
  let expires = new Date(new Date() * 1 + minute * 60 * 1000);
  return Cookies.set(TokenKey, token, { expires: expires });
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
