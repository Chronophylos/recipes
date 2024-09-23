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
import type { OpenDataUnit } from './OpenDataUnit';
import {
    OpenDataUnitFromJSON,
    OpenDataUnitFromJSONTyped,
    OpenDataUnitToJSON,
} from './OpenDataUnit';
import type { OpenDataFood } from './OpenDataFood';
import {
    OpenDataFoodFromJSON,
    OpenDataFoodFromJSONTyped,
    OpenDataFoodToJSON,
} from './OpenDataFood';
import type { OpenDataVersion } from './OpenDataVersion';
import {
    OpenDataVersionFromJSON,
    OpenDataVersionFromJSONTyped,
    OpenDataVersionToJSON,
} from './OpenDataVersion';

/**
 * Adds nested create feature
 * @export
 * @interface OpenDataConversion
 */
export interface OpenDataConversion {
    /**
     * 
     * @type {number}
     * @memberof OpenDataConversion
     */
    id?: number;
    /**
     * 
     * @type {OpenDataVersion}
     * @memberof OpenDataConversion
     */
    version: OpenDataVersion;
    /**
     * 
     * @type {string}
     * @memberof OpenDataConversion
     */
    slug: string;
    /**
     * 
     * @type {OpenDataFood}
     * @memberof OpenDataConversion
     */
    food: OpenDataFood;
    /**
     * 
     * @type {number}
     * @memberof OpenDataConversion
     */
    baseAmount: number;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof OpenDataConversion
     */
    baseUnit: OpenDataUnit;
    /**
     * 
     * @type {number}
     * @memberof OpenDataConversion
     */
    convertedAmount: number;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof OpenDataConversion
     */
    convertedUnit: OpenDataUnit;
    /**
     * 
     * @type {string}
     * @memberof OpenDataConversion
     */
    source: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataConversion
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataConversion
     */
    readonly createdBy: string;
}

/**
 * Check if a given object implements the OpenDataConversion interface.
 */
export function instanceOfOpenDataConversion(value: object): value is OpenDataConversion {
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    if (!('food' in value) || value['food'] === undefined) return false;
    if (!('baseAmount' in value) || value['baseAmount'] === undefined) return false;
    if (!('baseUnit' in value) || value['baseUnit'] === undefined) return false;
    if (!('convertedAmount' in value) || value['convertedAmount'] === undefined) return false;
    if (!('convertedUnit' in value) || value['convertedUnit'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    if (!('createdBy' in value) || value['createdBy'] === undefined) return false;
    return true;
}

export function OpenDataConversionFromJSON(json: any): OpenDataConversion {
    return OpenDataConversionFromJSONTyped(json, false);
}

export function OpenDataConversionFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpenDataConversion {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'version': OpenDataVersionFromJSON(json['version']),
        'slug': json['slug'],
        'food': OpenDataFoodFromJSON(json['food']),
        'baseAmount': json['base_amount'],
        'baseUnit': OpenDataUnitFromJSON(json['base_unit']),
        'convertedAmount': json['converted_amount'],
        'convertedUnit': OpenDataUnitFromJSON(json['converted_unit']),
        'source': json['source'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'createdBy': json['created_by'],
    };
}

export function OpenDataConversionToJSON(value?: Omit<OpenDataConversion, 'created_by'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'version': OpenDataVersionToJSON(value['version']),
        'slug': value['slug'],
        'food': OpenDataFoodToJSON(value['food']),
        'base_amount': value['baseAmount'],
        'base_unit': OpenDataUnitToJSON(value['baseUnit']),
        'converted_amount': value['convertedAmount'],
        'converted_unit': OpenDataUnitToJSON(value['convertedUnit']),
        'source': value['source'],
        'comment': value['comment'],
    };
}

