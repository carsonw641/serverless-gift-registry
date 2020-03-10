'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var AwsUtil;
(function (AwsUtil) {
    function generateItemParams(tableName, data) {
        let params = {};
        let item = {};
        for (let key in data) {
            item[key] = data[key].toString();
        }
        params['TableName'] = tableName;
        params['Item'] = item;
        return params;
    }
    AwsUtil.generateItemParams = generateItemParams;
})(AwsUtil = exports.AwsUtil || (exports.AwsUtil = {}));
