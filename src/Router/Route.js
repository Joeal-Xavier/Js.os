import { Route, Router, Switch } from "react-router-dom";

import Clock from "../components/applications/Apps/Clock/Clock";
import Dock from "../components/ui/Dock/Dock";
import history from "./history";

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/apps/clock" exact component={Clock} />
      </Switch>
      <Dock />
    </Router>
  );
};
export default AppRouter;
