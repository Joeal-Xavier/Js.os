import { connect } from "react-redux";
import { openApp } from "../../../state/actions";
import "./Dock.css";
import { allApps } from "../ApplicationRenderer";
const Dock = (props) => {
  return (
    <div className="dock">
      <div className="nav">{renderContent(props)} </div>
    </div>
  );
};

const renderContent = ({ openApp }) => {
  return allApps.map((element) => {
    return (
      <div
        className="dockitem"
        key={element.appName}
        onClick={() => openApp(element.appName)}
      >
        <img src={element.img} alt={element.appName} className="icon" />
      </div>
    );
  });
};
export default connect(null, { openApp })(Dock);
