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
import type { Food } from './Food';
import {
    FoodFromJSON,
    FoodFromJSONTyped,
    FoodToJSON,
} from './Food';

/**
 * 
 * @export
 * @interface PaginatedFoodList
 */
export interface PaginatedFoodList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedFoodList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedFoodList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedFoodList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Food>}
     * @memberof PaginatedFoodList
     */
    results: Array<Food>;
}

/**
 * Check if a given object implements the PaginatedFoodList interface.
 */
export function instanceOfPaginatedFoodList(value: object): value is PaginatedFoodList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedFoodListFromJSON(json: any): PaginatedFoodList {
    return PaginatedFoodListFromJSONTyped(json, false);
}

export function PaginatedFoodListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedFoodList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(FoodFromJSON)),
    };
}

export function PaginatedFoodListToJSON(value?: PaginatedFoodList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(FoodToJSON)),
    };
}

