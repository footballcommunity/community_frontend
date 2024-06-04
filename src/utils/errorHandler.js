
class ErrorResponse{
    constructor(status, data){
        this.status = status;
        this.data = data;
    }
}

const errorHandler = (error) => {
    console.log(error);
    if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return new ErrorResponse(error.response.data.errorCode, error.response.data)
    
    }
    else if (error.request) {
        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
        console.log(error.request);
        return new ErrorResponse(error.request.status, error.request.response)
    }
    else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
        console.log('Error', error.message);
        return new ErrorResponse("600",error.message)
    }
}

export default errorHandler