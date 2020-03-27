'use strict'

export module AwsUtil {
    export function putItemParams(tableName: string, data: any) {
        let params = {};
        let item = {};

        for (let key in data){
            item[key] = data[key].toString();
        }

        params['TableName'] = tableName;
        params['Item'] = item;

        return params;
    }

    export function getItemParams(tableName: string, id: string){
        let params = {
            "TableName": tableName,
            "Key": id
        };

        return params;
    }

    export function deleteItemParams
}