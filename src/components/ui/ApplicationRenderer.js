import React from "react";
import Calculator from "../applications/Apps/Calculator/Calculator";
import Clock from "../applications/Apps/Clock/Clock";
import CLOCK from "../../assets/CLOCK.png";
import CALCULATOR from "../../assets/CALCULATOR.png";
import CALANDER from "../../assets/CALENDAR.png";
import SNAKE from "../../assets/SNAKE.png";
import ABOUT from "../../assets/ABOUT.png";
import Calender from "../applications/Apps/Calender/Calender";
import Board from "../applications/Games/Snake/Board";
import About from "../applications/Apps/About/About";

export const allApps = [
  { appName: "CLOCK", page: Clock, img: CLOCK },
  { appName: "CALCULATOR", page: Calculator, img: CALCULATOR },
  { appName: "SNAKE", page: Board, img: SNAKE },
  { appName: "CALENDAR", page: Calender, img: CALANDER },
  { appName: "ABOUT", page: About, img: ABOUT },
];

export const renderApplication = (component, windowData) => {
  for (let index = 0; index < allApps.length; index++) {
    if (allApps[index].appName === component) {
      return React.createElement(allApps[index].page, windowData);
    }
  }
};
