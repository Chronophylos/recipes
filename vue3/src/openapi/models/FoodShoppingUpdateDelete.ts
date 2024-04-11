/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { BlankEnum } from './BlankEnum';
import {
    instanceOfBlankEnum,
    BlankEnumFromJSON,
    BlankEnumFromJSONTyped,
    BlankEnumToJSON,
} from './BlankEnum';
import type { DeleteEnum } from './DeleteEnum';
import {
    instanceOfDeleteEnum,
    DeleteEnumFromJSON,
    DeleteEnumFromJSONTyped,
    DeleteEnumToJSON,
} from './DeleteEnum';

/**
 * @type FoodShoppingUpdateDelete
 * When set to true will delete all food from active shopping lists.
 * 
 * * `true` - true
 * @export
 */
export type FoodShoppingUpdateDelete = BlankEnum | DeleteEnum;

export function FoodShoppingUpdateDeleteFromJSON(json: any): FoodShoppingUpdateDelete {
    return FoodShoppingUpdateDeleteFromJSONTyped(json, false);
}

export function FoodShoppingUpdateDeleteFromJSONTyped(json: any, ignoreDiscriminator: boolean): FoodShoppingUpdateDelete {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...BlankEnumFromJSONTyped(json, true), ...DeleteEnumFromJSONTyped(json, true) };
}

export function FoodShoppingUpdateDeleteToJSON(value?: FoodShoppingUpdateDelete | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfBlankEnum(value)) {
        return BlankEnumToJSON(value as BlankEnum);
    }
    if (instanceOfDeleteEnum(value)) {
        return DeleteEnumToJSON(value as DeleteEnum);
    }

    return {};
}
