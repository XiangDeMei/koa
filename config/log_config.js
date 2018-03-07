var path = require('path');

//日志根目录
var baseLogPath = path.resolve(__dirname, '../logs');

//错误日志目录
var errorPath = "/error";

//错误日志文件名
var errorFileName = "error";

//错误日志输出完整路径
var errorLogPath = baseLogPath + errorPath + "/" + errorFileName;
// var errorLogPath = path.resolve(__dirname, "../logs/error/error");

//响应日志目录
var responsePath = "/response";
//响应日志文件名
var responseFileName = "response";
//响应日志输出完整路径
var responseLogPath = baseLogPath + responsePath + "/" + responseFileName;
// var responseLogPath = path.resolve(__dirname, "../logs/response/response");

module.exports = {
    appenders: {
        // 错误日志
        "error": {
            "category":"errorLogger",             //logger名称
            "type": "dateFile",                   //日志类型
            "filename": errorLogPath,             //日志输出位置
            "alwaysIncludePattern":true,          //是否总是有后缀名
            "pattern": "-yyyy-MM-dd-hh.log"       //后缀，每小时创建一个新的日志文件
        },
        //响应日志
        "response": {
            "category":"responseLogger",          //logger名称
            "type": "dateFile",                   //日志类型
            "filename": responseLogPath,          //日志输出位置
            "alwaysIncludePattern":true,          //是否总是有后缀名
            "pattern": "-yyyy-MM-dd-hh.log"       //后缀，每小时创建一个新的日志文件
        }
    },
    categories: {
        default: {appenders: ['response'], level: 'info'},
        error: {appenders: ['error'], level: 'info'},
        response: {appenders: ['response'], level: 'info'}
    },
    "baseLogPath": baseLogPath                     //logs根目录
}