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
/**
 * 
 * @export
 * @interface PatchedExportLogRequest
 */
export interface PatchedExportLogRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedExportLogRequest
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedExportLogRequest
     */
    msg?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedExportLogRequest
     */
    running?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PatchedExportLogRequest
     */
    totalRecipes?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedExportLogRequest
     */
    exportedRecipes?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedExportLogRequest
     */
    cacheDuration?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedExportLogRequest
     */
    possiblyNotExpired?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PatchedExportLogRequest
     */
    id?: number;
}

/**
 * Check if a given object implements the PatchedExportLogRequest interface.
 */
export function instanceOfPatchedExportLogRequest(value: object): boolean {
    return true;
}

export function PatchedExportLogRequestFromJSON(json: any): PatchedExportLogRequest {
    return PatchedExportLogRequestFromJSONTyped(json, false);
}

export function PatchedExportLogRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedExportLogRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : json['type'],
        'msg': json['msg'] == null ? undefined : json['msg'],
        'running': json['running'] == null ? undefined : json['running'],
        'totalRecipes': json['total_recipes'] == null ? undefined : json['total_recipes'],
        'exportedRecipes': json['exported_recipes'] == null ? undefined : json['exported_recipes'],
        'cacheDuration': json['cache_duration'] == null ? undefined : json['cache_duration'],
        'possiblyNotExpired': json['possibly_not_expired'] == null ? undefined : json['possibly_not_expired'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function PatchedExportLogRequestToJSON(value?: PatchedExportLogRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': value['type'],
        'msg': value['msg'],
        'running': value['running'],
        'total_recipes': value['totalRecipes'],
        'exported_recipes': value['exportedRecipes'],
        'cache_duration': value['cacheDuration'],
        'possibly_not_expired': value['possiblyNotExpired'],
        'id': value['id'],
    };
}

