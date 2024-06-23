import useDateList from '../hooks/useDateList.js';
import { dateToString, getDateList } from '../utils/dateUtils.js';

import "../css/Date.css"

const DateItem = ({iscurrent, onClickHandler,date}) => {
    return(
        <div iscurrent={iscurrent} onClick={()=>{onClickHandler({date})}} className='item'>
            {date+"일"}
        </div>)
}

const DateContainer = ({selectedDateDay, setSelectedDate}) => {
    const dateList = getDateList();
    
    const handleClick = ({date}) => {
        const currentDate = new Date();
        if(currentDate.getDate() === date){
            console.log(currentDate)
        } else {

            if(currentDate.getDate() > date){
                currentDate.setMonth(currentDate.getMonth() + 1)
            }
            currentDate.setDate(date)
            currentDate.setHours(0)
            currentDate.setMinutes(0)
            currentDate.setSeconds(0)
        }
        setSelectedDate(dateToString(currentDate))
    }
    console.log(selectedDateDay)
    return(
    <div id='dateContainer'>
        {dateList.map((date) => {
            var isCurrent
            (date === (selectedDateDay) ? isCurrent = "true" : isCurrent = "false")
            return <DateItem key={date} iscurrent={isCurrent} onClickHandler={handleClick} date={date}></DateItem>
        }
        )}
    </div>
    );
}

export default DateContainer;