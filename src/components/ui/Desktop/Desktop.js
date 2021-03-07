import React from "react";
import { connect } from "react-redux";
import Window from "../Window/Window";
import { openApp } from "../../../state/actions";
import Dock from "../Dock/Dock";
class Desktop extends React.Component {
  render() {
    return (
      <div>
        {this.renderProcessList()}

        <Dock />
      </div>
    );
  }

  renderProcessList() {
    if (this.props.activeApps.length) {
      var render = [];
      this.props.activeApps.forEach((element) => {
        render.push(<Window appName={element} key={element} />);
      });
      return render;
    }
  }
}
const mapStatetoProps = (state) => {
  return { activeApps: state.runningProcesses };
};
export default connect(mapStatetoProps, { openApp })(Desktop);
