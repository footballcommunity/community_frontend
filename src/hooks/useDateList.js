import { useEffect, useState } from 'react';

const useDateList = () => {
    const DURATION= 14
    const [dateList, setDateList] = useState([]);
    useEffect(()=>{
        let list = []
        for(let i = 0; i < DURATION; i++){
            let cur = new Date()
            cur.setDate(cur.getDate() + i)
            list.push(cur.getDate())
        }
        setDateList(list)
    },[]);

    console.log(dateList)
    return dateList
}

export default useDateList;