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
import type { FoodRequest } from './FoodRequest';
import {
    FoodRequestFromJSON,
    FoodRequestFromJSONTyped,
    FoodRequestToJSON,
} from './FoodRequest';
import type { UnitRequest } from './UnitRequest';
import {
    UnitRequestFromJSON,
    UnitRequestFromJSONTyped,
    UnitRequestToJSON,
} from './UnitRequest';

/**
 * Adds nested create feature
 * @export
 * @interface IngredientRequest
 */
export interface IngredientRequest {
    /**
     * 
     * @type {FoodRequest}
     * @memberof IngredientRequest
     */
    food: FoodRequest | null;
    /**
     * 
     * @type {UnitRequest}
     * @memberof IngredientRequest
     */
    unit: UnitRequest | null;
    /**
     * 
     * @type {string}
     * @memberof IngredientRequest
     */
    amount: string;
    /**
     * 
     * @type {string}
     * @memberof IngredientRequest
     */
    note?: string;
    /**
     * 
     * @type {number}
     * @memberof IngredientRequest
     */
    order?: number;
    /**
     * 
     * @type {boolean}
     * @memberof IngredientRequest
     */
    isHeader?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IngredientRequest
     */
    noAmount?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IngredientRequest
     */
    originalText?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IngredientRequest
     */
    alwaysUsePluralUnit?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IngredientRequest
     */
    alwaysUsePluralFood?: boolean;
    /**
     * 
     * @type {number}
     * @memberof IngredientRequest
     */
    id?: number;
}

/**
 * Check if a given object implements the IngredientRequest interface.
 */
export function instanceOfIngredientRequest(value: object): boolean {
    if (!('food' in value)) return false;
    if (!('unit' in value)) return false;
    if (!('amount' in value)) return false;
    return true;
}

export function IngredientRequestFromJSON(json: any): IngredientRequest {
    return IngredientRequestFromJSONTyped(json, false);
}

export function IngredientRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IngredientRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'food': FoodRequestFromJSON(json['food']),
        'unit': UnitRequestFromJSON(json['unit']),
        'amount': json['amount'],
        'note': json['note'] == null ? undefined : json['note'],
        'order': json['order'] == null ? undefined : json['order'],
        'isHeader': json['is_header'] == null ? undefined : json['is_header'],
        'noAmount': json['no_amount'] == null ? undefined : json['no_amount'],
        'originalText': json['original_text'] == null ? undefined : json['original_text'],
        'alwaysUsePluralUnit': json['always_use_plural_unit'] == null ? undefined : json['always_use_plural_unit'],
        'alwaysUsePluralFood': json['always_use_plural_food'] == null ? undefined : json['always_use_plural_food'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function IngredientRequestToJSON(value?: IngredientRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'food': FoodRequestToJSON(value['food']),
        'unit': UnitRequestToJSON(value['unit']),
        'amount': value['amount'],
        'note': value['note'],
        'order': value['order'],
        'is_header': value['isHeader'],
        'no_amount': value['noAmount'],
        'original_text': value['originalText'],
        'always_use_plural_unit': value['alwaysUsePluralUnit'],
        'always_use_plural_food': value['alwaysUsePluralFood'],
        'id': value['id'],
    };
}

