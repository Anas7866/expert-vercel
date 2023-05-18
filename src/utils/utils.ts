import Cookies from "js-cookie";

export const theme = {
  colors: {
    black: "#000",
    grayBlack: "grey",
    white: "#fff",
    redColor: "red",
  },
};

export const getCookie = (key: string) => {
  return Cookies.get(key);
};

export const setCookie = (key: string, value: any) => {
  Cookies.set(key, value);
};

export const removeCookie = (key: string) => {
  Cookies.remove(key);
};
