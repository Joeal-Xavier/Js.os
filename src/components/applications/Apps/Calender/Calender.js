import "./Calender.css";
const Calender = () => {
  return (
    <div className="calender">
      <div className="month">Work in Progress...</div>
      <div className="weeks">
        {renderWeek()}
        {renderDays()}
      </div>
    </div>
  );
};
const renderWeek = () => {
  return ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((element) => {
    return <div className="days">{element}</div>;
  });
};

const renderDays = () => {
  const days = [];
  for (let index = 1; index < 43; index++) {
    days.push(<div className="days">{index}</div>);
  }
  return days;
};

export default Calender;
