const runningApps = (state = [], action) => {
  switch (action.type) {
    case "OPEN_APP":
      if (state.includes(action.payload)) {
        return state;
      }
      return [...state, action.payload];
    case "CLOSE_APP":
      return state.filter((element) => element !== action.payload);
    default:
      return state;
  }
};
export default runningApps;
