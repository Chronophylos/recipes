/* tslint:disable */
/* eslint-disable */
/**
 * Django Recipes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ShoppingListSupermarketCategoryToSupermarketInnerCategory } from './ShoppingListSupermarketCategoryToSupermarketInnerCategory';
import {
    ShoppingListSupermarketCategoryToSupermarketInnerCategoryFromJSON,
    ShoppingListSupermarketCategoryToSupermarketInnerCategoryFromJSONTyped,
    ShoppingListSupermarketCategoryToSupermarketInnerCategoryToJSON,
} from './ShoppingListSupermarketCategoryToSupermarketInnerCategory';

/**
 * 
 * @export
 * @interface ShoppingListSupermarketCategoryToSupermarketInner
 */
export interface ShoppingListSupermarketCategoryToSupermarketInner {
    /**
     * 
     * @type {number}
     * @memberof ShoppingListSupermarketCategoryToSupermarketInner
     */
    readonly id?: number;
    /**
     * 
     * @type {ShoppingListSupermarketCategoryToSupermarketInnerCategory}
     * @memberof ShoppingListSupermarketCategoryToSupermarketInner
     */
    category: ShoppingListSupermarketCategoryToSupermarketInnerCategory;
    /**
     * 
     * @type {number}
     * @memberof ShoppingListSupermarketCategoryToSupermarketInner
     */
    supermarket: number;
    /**
     * 
     * @type {number}
     * @memberof ShoppingListSupermarketCategoryToSupermarketInner
     */
    order?: number;
}

/**
 * Check if a given object implements the ShoppingListSupermarketCategoryToSupermarketInner interface.
 */
export function instanceOfShoppingListSupermarketCategoryToSupermarketInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "supermarket" in value;

    return isInstance;
}

export function ShoppingListSupermarketCategoryToSupermarketInnerFromJSON(json: any): ShoppingListSupermarketCategoryToSupermarketInner {
    return ShoppingListSupermarketCategoryToSupermarketInnerFromJSONTyped(json, false);
}

export function ShoppingListSupermarketCategoryToSupermarketInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShoppingListSupermarketCategoryToSupermarketInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'category': ShoppingListSupermarketCategoryToSupermarketInnerCategoryFromJSON(json['category']),
        'supermarket': json['supermarket'],
        'order': !exists(json, 'order') ? undefined : json['order'],
    };
}

export function ShoppingListSupermarketCategoryToSupermarketInnerToJSON(value?: ShoppingListSupermarketCategoryToSupermarketInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': ShoppingListSupermarketCategoryToSupermarketInnerCategoryToJSON(value.category),
        'supermarket': value.supermarket,
        'order': value.order,
    };
}
