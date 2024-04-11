/* tslint:disable */
/* eslint-disable */
/**
 * Tandoor
 * Tandoor API Docs
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { MethodEnum } from './MethodEnum';
import {
    MethodEnumFromJSON,
    MethodEnumFromJSONTyped,
    MethodEnumToJSON,
} from './MethodEnum';

/**
 * 
 * @export
 * @interface Storage
 */
export interface Storage {
    /**
     * 
     * @type {number}
     * @memberof Storage
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Storage
     */
    name: string;
    /**
     * 
     * @type {MethodEnum}
     * @memberof Storage
     */
    method?: MethodEnum;
    /**
     * 
     * @type {string}
     * @memberof Storage
     */
    username?: string;
    /**
     * 
     * @type {number}
     * @memberof Storage
     */
    readonly createdBy: number;
}

/**
 * Check if a given object implements the Storage interface.
 */
export function instanceOfStorage(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('createdBy' in value)) return false;
    return true;
}

export function StorageFromJSON(json: any): Storage {
    return StorageFromJSONTyped(json, false);
}

export function StorageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Storage {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'method': json['method'] == null ? undefined : MethodEnumFromJSON(json['method']),
        'username': json['username'] == null ? undefined : json['username'],
        'createdBy': json['created_by'],
    };
}

export function StorageToJSON(value?: Storage | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'method': MethodEnumToJSON(value['method']),
        'username': value['username'],
    };
}
