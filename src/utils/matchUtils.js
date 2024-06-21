const toSexString = (sex)=> {
    if(sex == 0){
        return "남녀모두"
    } else if(sex == -1){
        return "여자"
    } else if(sex == 1){
        return "남자"
    } else{
        throw new Error();
    }

}

export {toSexString}