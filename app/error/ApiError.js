/**
 * 自定义Api异常
*/

// 引入封装的API异常处理信息
const ApiErrorNames = require('./ApiErrorNames');

class ApiError extends Error {
    // 构造方法
    constructor(error_name, error_code, error_message) {
        super();

        var error_info = ApiErrorNames.getErrorInfo(error_name);

        this.name = error_name;
        this.code = error_code || error_info.code;
        this.message = error_message || error_info.message;
    }
}
module.exports = ApiError;
