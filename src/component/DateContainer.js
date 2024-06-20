import useDateList from '../hooks/useDateList.js';

import "../css/Date.css"

const Date = ({date}) => {
    return(
        <div className='item'>
            {date+"일"}
        </div>)
    
}

const DateContainer = () => {
    const dateList = useDateList();
    return(
    <div id='dateContainer'>
        {dateList.map((date) => 
            <Date key={date} date={date}></Date>
        )}
    </div>
    );
}

export default DateContainer;