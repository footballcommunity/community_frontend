const getCurrentDate = ()=> {
    return new Date().getDate()
}

const dateToString = (date) => {
    return date.toISOString().substr(0,19);
}

const dateToKSTString = (date) =>{
    var inDate = new Date(date)
    inDate.setHours(inDate.getHours()+9);
    const h = inDate.getHours()
    const m = inDate.getMinutes()
    return (h < 10 ? '0' : "") + h + ":" +  (m < 10 ? '0' : '') + m;
}

export {dateToKSTString, dateToString, getCurrentDate}