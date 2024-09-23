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
import type { PropertyType } from './PropertyType';
import {
    PropertyTypeFromJSON,
    PropertyTypeFromJSONTyped,
    PropertyTypeToJSON,
} from './PropertyType';

/**
 * 
 * @export
 * @interface PaginatedPropertyTypeList
 */
export interface PaginatedPropertyTypeList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedPropertyTypeList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPropertyTypeList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedPropertyTypeList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<PropertyType>}
     * @memberof PaginatedPropertyTypeList
     */
    results: Array<PropertyType>;
}

/**
 * Check if a given object implements the PaginatedPropertyTypeList interface.
 */
export function instanceOfPaginatedPropertyTypeList(value: object): value is PaginatedPropertyTypeList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedPropertyTypeListFromJSON(json: any): PaginatedPropertyTypeList {
    return PaginatedPropertyTypeListFromJSONTyped(json, false);
}

export function PaginatedPropertyTypeListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedPropertyTypeList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(PropertyTypeFromJSON)),
    };
}

export function PaginatedPropertyTypeListToJSON(value?: PaginatedPropertyTypeList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(PropertyTypeToJSON)),
    };
}

