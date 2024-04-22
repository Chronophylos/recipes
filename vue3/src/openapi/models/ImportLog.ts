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
import type { Keyword } from './Keyword';
import {
    KeywordFromJSON,
    KeywordFromJSONTyped,
    KeywordToJSON,
} from './Keyword';

/**
 * 
 * @export
 * @interface ImportLog
 */
export interface ImportLog {
    /**
     * 
     * @type {number}
     * @memberof ImportLog
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof ImportLog
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof ImportLog
     */
    msg?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ImportLog
     */
    running?: boolean;
    /**
     * 
     * @type {Keyword}
     * @memberof ImportLog
     */
    readonly keyword: Keyword;
    /**
     * 
     * @type {number}
     * @memberof ImportLog
     */
    totalRecipes?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportLog
     */
    importedRecipes?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportLog
     */
    readonly createdBy: number;
    /**
     * 
     * @type {Date}
     * @memberof ImportLog
     */
    readonly createdAt: Date;
}

/**
 * Check if a given object implements the ImportLog interface.
 */
export function instanceOfImportLog(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('type' in value)) return false;
    if (!('keyword' in value)) return false;
    if (!('createdBy' in value)) return false;
    if (!('createdAt' in value)) return false;
    return true;
}

export function ImportLogFromJSON(json: any): ImportLog {
    return ImportLogFromJSONTyped(json, false);
}

export function ImportLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportLog {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
        'msg': json['msg'] == null ? undefined : json['msg'],
        'running': json['running'] == null ? undefined : json['running'],
        'keyword': KeywordFromJSON(json['keyword']),
        'totalRecipes': json['total_recipes'] == null ? undefined : json['total_recipes'],
        'importedRecipes': json['imported_recipes'] == null ? undefined : json['imported_recipes'],
        'createdBy': json['created_by'],
        'createdAt': (new Date(json['created_at'])),
    };
}

export function ImportLogToJSON(value?: ImportLog | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'msg': value['msg'],
        'running': value['running'],
        'total_recipes': value['totalRecipes'],
        'imported_recipes': value['importedRecipes'],
    };
}

