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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * Adds nested create feature
 * @export
 * @interface CustomFilter
 */
export interface CustomFilter {
    /**
     * 
     * @type {number}
     * @memberof CustomFilter
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomFilter
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CustomFilter
     */
    search: string;
    /**
     * 
     * @type {Array<User>}
     * @memberof CustomFilter
     */
    shared?: Array<User>;
    /**
     * 
     * @type {number}
     * @memberof CustomFilter
     */
    readonly createdBy: number;
}

/**
 * Check if a given object implements the CustomFilter interface.
 */
export function instanceOfCustomFilter(value: object): value is CustomFilter {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('search' in value) || value['search'] === undefined) return false;
    if (!('createdBy' in value) || value['createdBy'] === undefined) return false;
    return true;
}

export function CustomFilterFromJSON(json: any): CustomFilter {
    return CustomFilterFromJSONTyped(json, false);
}

export function CustomFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomFilter {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'search': json['search'],
        'shared': json['shared'] == null ? undefined : ((json['shared'] as Array<any>).map(UserFromJSON)),
        'createdBy': json['created_by'],
    };
}

export function CustomFilterToJSON(value?: Omit<CustomFilter, 'created_by'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'search': value['search'],
        'shared': value['shared'] == null ? undefined : ((value['shared'] as Array<any>).map(UserToJSON)),
    };
}

