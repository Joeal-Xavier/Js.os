import "./Window.css";
import React from "react";
import { closeApp, foregroundApp } from "../../../state/actions";
import { connect } from "react-redux";
import { renderApplication } from "../ApplicationRenderer.js";
class Window extends React.Component {
  windowProps = {
    maximize: false,
  };
  state = {
    resize: null,
    pos: { left: "50%", top: "50%", transform: "translate(-50%, -50%)" },
  };
  zIndex = this.props.appName === this.props.currentApp ? "activeIndex" : "";
  render() {
    const { foregroundApp, appName, currentApp } = this.props;
    return (
      <div
        className={`wrapper ${appName === currentApp ? "activeIndex" : ""}`}
        style={{ ...this.state.pos }}
        onClick={() => foregroundApp(appName)}
      >
        <div className="window" style={this.state.resize}>
          <div
            className="titlebar"
            onDrag={this.dragWindow}
            onDoubleClick={this.maximize}
          >
            <div className="actions">
              <li className="action">
                <button
                  className="actionBtn close"
                  onClick={() => this.props.closeApp(this.props.appName)}
                ></button>
              </li>
              <li className="action">
                <button
                  className="actionBtn minimize"
                  onClick={this.maximize}
                ></button>
              </li>

              <li className="action">
                <button
                  className="actionBtn maximize"
                  onClick={this.maximize}
                ></button>
              </li>
            </div>
            <div className="title" unselectable="on">
              {this.props.appName}
            </div>
          </div>
          <div className="winContent">
            {renderApplication(this.props.appName, this.windowProps)}
          </div>
        </div>
      </div>
    );
  }
  maximize = () => {
    this.windowProps.maximize = !this.windowProps.maximize;
    if (this.state.resize !== null) {
      this.setState({ resize: null });
    } else {
      for (let index = 0; index < 90; index++) {
        setTimeout(() => {
          this.setState({
            resize: { height: `${index}vh`, width: `${index + 10}vw` },
            pos: {
              left: `0px`,
              top: `0px`,
            },
          });
        }, 50);
      }
    }
  };
  dragWindow = (e) => {
    const { clientX, clientY } = e;
    if (clientX || clientY) {
      if (this.state.resize) {
        this.maximize();
      } else {
        this.setState({
          pos: { left: clientX - clientX / 2, top: clientY - clientY / 2 },
        });
      }
    }
  };
}
const mapStatetoProps = (state) => {
  return { currentApp: state.foreGroundApp };
};
export default connect(mapStatetoProps, { closeApp, foregroundApp })(Window);
