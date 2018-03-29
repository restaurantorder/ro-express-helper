
class APIController {
    log(responseStatusCode, requestMethod, requestPath, errorType, errorMsg) {
        let date = new Date()
        let obj = {
            HTTPStatusCode:statusCode,
            errorType:errorType,
            errorMsg:errorMsg,
            logDate:date
        }
        console.info(JSON.stringify(obj));
    }
    error(responseStatusCode, requestMethod, requestPath, error) {
        var msg
        var type
        if(error) {
            if(error.type) {
                type = error.type
            }
            if(error.msg) {
                msg = error.msg
            }
        }
        this.log(responseStatusCode, requestMethod, requestPath, type, msg);
    }
}
module.exports = Logger;