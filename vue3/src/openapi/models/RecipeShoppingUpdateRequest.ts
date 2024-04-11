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
 * @interface RecipeShoppingUpdateRequest
 */
export interface RecipeShoppingUpdateRequest {
    /**
     * Existing shopping list to update
     * @type {number}
     * @memberof RecipeShoppingUpdateRequest
     */
    listRecipe?: number;
    /**
     * List of ingredient IDs from the recipe to add, if not provided all ingredients will be added.
     * @type {number}
     * @memberof RecipeShoppingUpdateRequest
     */
    ingredients?: number;
    /**
     * Providing a list_recipe ID and servings of 0 will delete that shopping list.
     * @type {number}
     * @memberof RecipeShoppingUpdateRequest
     */
    servings?: number;
}

/**
 * Check if a given object implements the RecipeShoppingUpdateRequest interface.
 */
export function instanceOfRecipeShoppingUpdateRequest(value: object): boolean {
    return true;
}

export function RecipeShoppingUpdateRequestFromJSON(json: any): RecipeShoppingUpdateRequest {
    return RecipeShoppingUpdateRequestFromJSONTyped(json, false);
}

export function RecipeShoppingUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipeShoppingUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'listRecipe': json['list_recipe'] == null ? undefined : json['list_recipe'],
        'ingredients': json['ingredients'] == null ? undefined : json['ingredients'],
        'servings': json['servings'] == null ? undefined : json['servings'],
    };
}

export function RecipeShoppingUpdateRequestToJSON(value?: RecipeShoppingUpdateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'list_recipe': value['listRecipe'],
        'ingredients': value['ingredients'],
        'servings': value['servings'],
    };
}
