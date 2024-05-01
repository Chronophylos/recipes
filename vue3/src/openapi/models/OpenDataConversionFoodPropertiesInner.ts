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
import type { OpenDataConversionFoodPropertiesInnerProperty } from './OpenDataConversionFoodPropertiesInnerProperty';
import {
    OpenDataConversionFoodPropertiesInnerPropertyFromJSON,
    OpenDataConversionFoodPropertiesInnerPropertyFromJSONTyped,
    OpenDataConversionFoodPropertiesInnerPropertyToJSON,
} from './OpenDataConversionFoodPropertiesInnerProperty';

/**
 * 
 * @export
 * @interface OpenDataConversionFoodPropertiesInner
 */
export interface OpenDataConversionFoodPropertiesInner {
    /**
     * 
     * @type {number}
     * @memberof OpenDataConversionFoodPropertiesInner
     */
    readonly id?: number;
    /**
     * 
     * @type {OpenDataConversionFoodPropertiesInnerProperty}
     * @memberof OpenDataConversionFoodPropertiesInner
     */
    property: OpenDataConversionFoodPropertiesInnerProperty;
    /**
     * 
     * @type {string}
     * @memberof OpenDataConversionFoodPropertiesInner
     */
    propertyAmount: string;
}

/**
 * Check if a given object implements the OpenDataConversionFoodPropertiesInner interface.
 */
export function instanceOfOpenDataConversionFoodPropertiesInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "property" in value;
    isInstance = isInstance && "propertyAmount" in value;

    return isInstance;
}

export function OpenDataConversionFoodPropertiesInnerFromJSON(json: any): OpenDataConversionFoodPropertiesInner {
    return OpenDataConversionFoodPropertiesInnerFromJSONTyped(json, false);
}

export function OpenDataConversionFoodPropertiesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpenDataConversionFoodPropertiesInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'property': OpenDataConversionFoodPropertiesInnerPropertyFromJSON(json['property']),
        'propertyAmount': json['property_amount'],
    };
}

export function OpenDataConversionFoodPropertiesInnerToJSON(value?: OpenDataConversionFoodPropertiesInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'property': OpenDataConversionFoodPropertiesInnerPropertyToJSON(value.property),
        'property_amount': value.propertyAmount,
    };
}
