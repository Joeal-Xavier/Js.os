import "./Clock.css";
import React from "react";
class Clock extends React.Component {
  state = {
    date: new Date(),
  };
  data = {
    seconds: new Date().getSeconds() * 6,
    minutes: new Date().getMinutes() * 6,
    hour: new Date().getHours() * 30 + new Date().getMinutes() / 2,
  };
  componentDidMount() {
    this.getTime();
    const runInterval = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);

    this.getTime();
  }
  componentWillUnmount() {
    clearInterval(this.runInterval);
  }

  render() {
    const { hour, minutes, seconds } = this.data;
    this.getTime();
    return (
      <div className="clockContainer">
        <div className="clock">
          <div className="hand hour" style={{ "--rotate": hour }}></div>
          <div className="hand minute" style={{ "--rotate": minutes }}></div>
          <div className="hand second" style={{ "--rotate": seconds }}></div>
          {this.renderContent()}
        </div>
      </div>
    );
  }
  getTime = () => {
    const time = new Date();
    const seconds = time.getSeconds() * 6;
    const minutes = time.getMinutes() * 6;
    const hour = time.getHours() * 30 + time.getMinutes() / 2;
    this.data = { ...this.data, seconds, minutes, hour };
  };
  renderContent() {
    const arr = [];
    for (let index = 0; index < 60; index++) {
      var straws = index % 5 === 0 ? <div className="prime"></div> : `|`;
      arr.push(
        <div
          className="time mins"
          style={{ transform: `rotate(${index * 6}deg)` }}
          key={Date.now() + index}
        >
          {straws}
        </div>
      );
    }
    for (let index = 1; index < 13; index++) {
      let styleVar = index * 30;
      arr.push(
        <div
          className={`time`}
          style={{ transform: ` rotate(${styleVar}deg)` }}
          key={styleVar + index}
        >
          <p style={{ transform: ` rotate(${-styleVar}deg)` }}>{index}</p>
        </div>
      );
    }
    return arr.map((element) => {
      return element;
    });
  }
}
export default Clock;
