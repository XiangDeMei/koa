const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');

exports.getUser = async (ctx, next) => {
    if(ctx.query.id != 1) {
        throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
    }
    ctx.body = {
        username: '龙凡·炎',
        id: 0331
    }
    
}

exports.registerUser = async (ctx, next) => {
    console.log('registerUser', ctx.request.body);
}