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
 * @interface ShoppingListRecipeRequest
 */
export interface ShoppingListRecipeRequest {
    /**
     * 
     * @type {number}
     * @memberof ShoppingListRecipeRequest
     */
    recipe?: number;
    /**
     * 
     * @type {number}
     * @memberof ShoppingListRecipeRequest
     */
    mealplan?: number;
    /**
     * 
     * @type {string}
     * @memberof ShoppingListRecipeRequest
     */
    servings: string;
    /**
     * 
     * @type {number}
     * @memberof ShoppingListRecipeRequest
     */
    id?: number;
}

/**
 * Check if a given object implements the ShoppingListRecipeRequest interface.
 */
export function instanceOfShoppingListRecipeRequest(value: object): boolean {
    if (!('servings' in value)) return false;
    return true;
}

export function ShoppingListRecipeRequestFromJSON(json: any): ShoppingListRecipeRequest {
    return ShoppingListRecipeRequestFromJSONTyped(json, false);
}

export function ShoppingListRecipeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShoppingListRecipeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'recipe': json['recipe'] == null ? undefined : json['recipe'],
        'mealplan': json['mealplan'] == null ? undefined : json['mealplan'],
        'servings': json['servings'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function ShoppingListRecipeRequestToJSON(value?: ShoppingListRecipeRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'recipe': value['recipe'],
        'mealplan': value['mealplan'],
        'servings': value['servings'],
        'id': value['id'],
    };
}

