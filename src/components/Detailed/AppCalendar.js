import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function AppCalendar() {
  return (
    <div style={{ display: "flex-center" }}>
      <h2>캘린더</h2>
      <Calendar />
    </div>
  );
}

export default AppCalendar;
