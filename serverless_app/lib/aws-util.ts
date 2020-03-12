'use strict'

export module AwsUtil {
    export function generateItemParams(tableName: string, data: any) {
        let params = {};
        let item = {};

        for (let key in data){
            item[key] = data[key].toString();
        }

        params['TableName'] = tableName;
        params['Item'] = item;

        return params;
    }
}