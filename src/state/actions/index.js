export const openApp = (appName) => {
  return {
    type: "OPEN_APP",
    payload: appName,
  };
};
export const closeApp = (appName) => {
  return {
    type: "CLOSE_APP",
    payload: appName,
  };
};
export const foregroundApp = (appName) => {
  return {
    type: "FOREGROUND_APP",
    payload: appName,
  };
};
