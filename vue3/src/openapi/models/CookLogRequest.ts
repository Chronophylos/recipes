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
 * @interface CookLogRequest
 */
export interface CookLogRequest {
    /**
     * 
     * @type {number}
     * @memberof CookLogRequest
     */
    recipe: number;
    /**
     * 
     * @type {number}
     * @memberof CookLogRequest
     */
    servings?: number;
    /**
     * 
     * @type {number}
     * @memberof CookLogRequest
     */
    rating?: number;
    /**
     * 
     * @type {string}
     * @memberof CookLogRequest
     */
    comment?: string;
    /**
     * 
     * @type {Date}
     * @memberof CookLogRequest
     */
    createdAt?: Date;
}

/**
 * Check if a given object implements the CookLogRequest interface.
 */
export function instanceOfCookLogRequest(value: object): boolean {
    if (!('recipe' in value)) return false;
    return true;
}

export function CookLogRequestFromJSON(json: any): CookLogRequest {
    return CookLogRequestFromJSONTyped(json, false);
}

export function CookLogRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CookLogRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'recipe': json['recipe'],
        'servings': json['servings'] == null ? undefined : json['servings'],
        'rating': json['rating'] == null ? undefined : json['rating'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
    };
}

export function CookLogRequestToJSON(value?: CookLogRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'recipe': value['recipe'],
        'servings': value['servings'],
        'rating': value['rating'],
        'comment': value['comment'],
        'created_at': value['createdAt'] == null ? undefined : ((value['createdAt']).toISOString()),
    };
}
