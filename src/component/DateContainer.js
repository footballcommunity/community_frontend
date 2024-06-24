import useDateList from "../hooks/useDateList.js";
import {
  dateToString,
  getDateList,
  getDateFromDateString,
  getDateContainerStringFromDateString,
} from "../utils/dateUtils.js";

import "../css/Date.css";

const DateItem = ({ iscurrent, dateString }) => {
  return (
    <div iscurrent={iscurrent} className="item" datestring={dateString}>
      {getDateContainerStringFromDateString(dateString)}
    </div>
  );
};

const DateContainer = ({ selectedDate, setSelectedDate }) => {
  const dateList = getDateList();

  const onClickHandler = (e) => {
    const dateString = e.target.getAttribute("datestring");
    setSelectedDate(dateString);
  };

  return (
    <div id="dateContainer">
      {dateList.map((date) => {
        var isCurrent;
        getDateFromDateString(date) === getDateFromDateString(selectedDate)
          ? (isCurrent = "true")
          : (isCurrent = "false");
        return (
          <div key={date} onClick={onClickHandler} datestring={selectedDate}>
            <DateItem
              key={date}
              iscurrent={isCurrent}
              dateString={date}
            ></DateItem>
          </div>
        );
      })}
    </div>
  );
};

export default DateContainer;
