const getCurrentDate = ()=> {
    return new Date().getDate()
}

// 표준시로 변환
const dateToString = (date) => {
    return date.toISOString().substr(0,19);
}
// 한국 표준시로 변환 후 일만 반환
const getKSTDay = (date) =>{
    const inDate = new Date(date)
    inDate.setHours(inDate.getHours()+9)
    return inDate.getDate()
}

const dateToKSTString = (date) =>{
    var inDate = new Date(date)
    inDate.setHours(inDate.getHours()+9);
    const h = inDate.getHours()
    const m = inDate.getMinutes()
    return (h < 10 ? '0' : "") + h + ":" +  (m < 10 ? '0' : '') + m;
}

const getDateList = () =>{
    const DURATION= 14
    var list = []
    for(let i = 0; i < DURATION; i++){
        var cur = new Date()
        cur.setDate(cur.getDate() + i)
        list.push(cur.getDate())
    }
    
    return list
}

export {dateToKSTString, dateToString, getCurrentDate, getDateList, getKSTDay}