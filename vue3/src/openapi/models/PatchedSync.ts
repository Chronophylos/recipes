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
 * @interface PatchedSync
 */
export interface PatchedSync {
    /**
     * 
     * @type {number}
     * @memberof PatchedSync
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedSync
     */
    storage?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedSync
     */
    path?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedSync
     */
    active?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof PatchedSync
     */
    lastChecked?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PatchedSync
     */
    readonly createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PatchedSync
     */
    readonly updatedAt?: Date;
}

/**
 * Check if a given object implements the PatchedSync interface.
 */
export function instanceOfPatchedSync(value: object): boolean {
    return true;
}

export function PatchedSyncFromJSON(json: any): PatchedSync {
    return PatchedSyncFromJSONTyped(json, false);
}

export function PatchedSyncFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedSync {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'storage': json['storage'] == null ? undefined : json['storage'],
        'path': json['path'] == null ? undefined : json['path'],
        'active': json['active'] == null ? undefined : json['active'],
        'lastChecked': json['last_checked'] == null ? undefined : (new Date(json['last_checked'])),
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'updatedAt': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
    };
}

export function PatchedSyncToJSON(value?: PatchedSync | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'storage': value['storage'],
        'path': value['path'],
        'active': value['active'],
        'last_checked': value['lastChecked'] == null ? undefined : ((value['lastChecked'] as any).toISOString()),
    };
}
