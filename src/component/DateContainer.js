import useDateList from '../hooks/useDateList.js';
import { dateToString } from '../utils/dateUtils.js';

import "../css/Date.css"

const DateItem = ({iscurrent, onClickHandler,date}) => {
    return(
        <div iscurrent={iscurrent} onClick={()=>{onClickHandler({date})}} className='item'>
            {date+"일"}
        </div>)
}

const DateContainer = ({selectedDate, setSelectedDate}) => {
    const dateList = useDateList();

    const handleClick = ({date}) => {
        const currentDate = new Date();
        console.log("date ",date)
        currentDate.setDate(date)
        setSelectedDate(dateToString(currentDate))
    }
    console.log(selectedDate)

    return(
    <div id='dateContainer'>
        {dateList.map((date) => {
            var isCurrent
            (date.toString() === selectedDate ? isCurrent = "true" : isCurrent = "false")
            return <DateItem key={date} iscurrent={isCurrent} onClickHandler={handleClick} date={date}></DateItem>
        }
        )}
    </div>
    );
}

export default DateContainer;