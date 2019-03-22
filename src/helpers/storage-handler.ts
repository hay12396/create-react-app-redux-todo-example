import throttle from "lodash/throttle";

export const loadState = () => {
  try {
    let state = localStorage.getItem("state");
    if (state) {
      return JSON.parse(state);
    }
  } catch (e) {
    return undefined;
  }
};

export const saveState = throttle((state: any) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (e) {}
}, 1000);

export const getJwt = () => {
  try {
    return localStorage.getItem("jwt");
  } catch (e) {
    return "";
  }
};
