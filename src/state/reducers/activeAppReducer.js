const activeAppReducer = (activeApp = "", action) => {
  switch (action.type) {
    case "FOREGROUND_APP":
      return action.payload;

    default:
      return activeApp;
  }
};
export default activeAppReducer;
