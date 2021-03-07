import "./Board.css";
import React from "react";
class Board extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }
  isGameOver = false;
  isPaused = false;
  turn = {
    x: 1,
    y: 0,
    axis: "y",
    transform: "rotate(0deg)",
  };
  state = {
    snake: [
      { gridRowStart: 10, gridColumnStart: 11 },
      { gridRowStart: 11, gridColumnStart: 11 },
      { gridRowStart: 12, gridColumnStart: 11 },
      { gridRowStart: 13, gridColumnStart: 11 },
    ],
    food: { gridRowStart: 3, gridColumnStart: 3 },
  };
  renderInterval;
  componentDidMount() {
    document.addEventListener("keydown", this._handleKeyDown);
  }
  componentWillUnmount() {
    clearInterval(this.renderInterval);
  }
  moveSnake() {
    var snake = this.state.snake;
    snake.pop();
    var head = this.state.snake[0];
    head = {
      gridRowStart: head.gridRowStart - this.turn.x,
      gridColumnStart: head.gridColumnStart - this.turn.y,
    };
    return [head, ...snake];
  }

  gameOver() {
    //   const { gridRowStart, gridColumnStart } = this.state.snake[0];
    const [{ gridRowStart, gridColumnStart }, ...body] = this.state.snake;
    var modal = false;
    body.forEach((element) => {
      if (
        gridRowStart === element.gridRowStart &&
        gridColumnStart === element.gridColumnStart
      ) {
        clearInterval(this.renderInterval);
        this.isGameOver = true;
        this.renderInterval = null;
        modal = true;
        return;
      }
    });

    if (
      !gridRowStart ||
      !gridColumnStart ||
      gridRowStart > 21 ||
      gridColumnStart > 21
    ) {
      clearInterval(this.renderInterval);
      this.isGameOver = true;
      this.renderInterval = null;
      modal = true;
    }
    return modal ? (
      <div className="gameOver">
        <div className="modal">
          <h2 style={{ textAlign: "center" }}>GameOver!!</h2>
          <button className="btn" onClick={this.tryAgain}>
            Start Again
          </button>
        </div>
      </div>
    ) : (
      ""
    );
  }
  endGame() {}
  tryAgain = () => {
    this.setState({
      snake: [
        { gridRowStart: 10, gridColumnStart: 11 },
        { gridRowStart: 11, gridColumnStart: 11 },
        { gridRowStart: 12, gridColumnStart: 11 },
        { gridRowStart: 13, gridColumnStart: 11 },
      ],
    });
    this.turn = {
      x: 1,
      y: 0,
      axis: "y",
      transform: "rotate(0deg)",
    };
    this.isGameOver = false;
  };
  render() {
    const props = this.props;
    this.renderFood();
    return (
      <div
        className="snakeContainer"
        style={
          props.maximize
            ? { height: " 100%", width: "100%" }
            : { height: " 500px", width: "500px" }
        }
      >
        <div
          className="gameBoard"
          ref={this.ref}
          style={
            props.maximize
              ? { height: "calc(90vmin - 9%)", width: "calc(90vmin - 3%)" }
              : { height: " 500px", width: "500px" }
          }
        >
          <div className="food" style={{ ...this.state.food }}></div>
          {this.renderSnake()}
        </div>
        {this.gameOver()}
      </div>
    );
  }
  renderFood() {
    const { snake, food } = this.state;

    if (
      snake[0].gridRowStart === food.gridRowStart &&
      snake[0].gridColumnStart === food.gridColumnStart
    ) {
      let food = {
        gridRowStart: Math.ceil((Math.random() * 100) % 21),
        gridColumnStart: Math.ceil((Math.random() * 100) % 21),
      };
      this.setState({
        food: { ...food },
        snake: [...snake, food],
      });
      return;
    }
  }
  renderSnake() {
    return this.state.snake.map((element, index) => {
      if (index === 0) {
        return (
          <div
            className="snake"
            style={{ ...element, transform: this.turn.transform }}
          >
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
        );
      }
      return <div className="snake" style={{ ...element }}></div>;
    });
  }
  _handleKeyDown = ({ key }) => {
    if (this.isGameOver) return;
    if (key === "Enter") {
      this.isPaused = true;
      if (this.renderInterval) {
        clearInterval(this.renderInterval);
        this.renderInterval = null;
        return;
      }
      this.isPaused = false;
      this.renderInterval = setInterval(() => {
        this.setState({ snake: this.moveSnake() });
      }, 300);
    }
    if (this.isPaused) return;

    switch (key) {
      case "ArrowUp":
        if (this.turn.axis === "y") return;
        this.turn = {
          x: 1,
          y: 0,
          axis: "y",
          transform: "rotate(0deg)",
        };
        break;
      case "ArrowDown":
        if (this.turn.axis === "y") return;
        this.turn = {
          x: -1,
          y: 0,
          axis: "y",
          transform: "rotate(180deg)",
        };
        break;
      case "ArrowLeft":
        if (this.turn.axis === "x") return;
        this.turn = {
          x: 0,
          y: 1,
          axis: "x",
          transform: "rotate(-90deg)",
        };
        break;
      case "ArrowRight":
        if (this.turn.axis === "x") return;
        this.turn = {
          x: 0,
          y: -1,
          axis: "x",
          transform: "rotate(90deg)",
        };
        break;

      default:
        return;
    }
    // this.update(turn);
  };
}
export default Board;
