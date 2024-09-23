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
import type { AutomationTypeEnum } from './AutomationTypeEnum';
import {
    AutomationTypeEnumFromJSON,
    AutomationTypeEnumFromJSONTyped,
    AutomationTypeEnumToJSON,
} from './AutomationTypeEnum';

/**
 * 
 * @export
 * @interface PatchedAutomation
 */
export interface PatchedAutomation {
    /**
     * 
     * @type {number}
     * @memberof PatchedAutomation
     */
    id?: number;
    /**
     * 
     * @type {AutomationTypeEnum}
     * @memberof PatchedAutomation
     */
    type?: AutomationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PatchedAutomation
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedAutomation
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedAutomation
     */
    param1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedAutomation
     */
    param2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedAutomation
     */
    param3?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedAutomation
     */
    order?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedAutomation
     */
    disabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PatchedAutomation
     */
    readonly createdBy?: number;
}



/**
 * Check if a given object implements the PatchedAutomation interface.
 */
export function instanceOfPatchedAutomation(value: object): value is PatchedAutomation {
    return true;
}

export function PatchedAutomationFromJSON(json: any): PatchedAutomation {
    return PatchedAutomationFromJSONTyped(json, false);
}

export function PatchedAutomationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedAutomation {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'type': json['type'] == null ? undefined : AutomationTypeEnumFromJSON(json['type']),
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'param1': json['param_1'] == null ? undefined : json['param_1'],
        'param2': json['param_2'] == null ? undefined : json['param_2'],
        'param3': json['param_3'] == null ? undefined : json['param_3'],
        'order': json['order'] == null ? undefined : json['order'],
        'disabled': json['disabled'] == null ? undefined : json['disabled'],
        'createdBy': json['created_by'] == null ? undefined : json['created_by'],
    };
}

export function PatchedAutomationToJSON(value?: Omit<PatchedAutomation, 'created_by'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'type': AutomationTypeEnumToJSON(value['type']),
        'name': value['name'],
        'description': value['description'],
        'param_1': value['param1'],
        'param_2': value['param2'],
        'param_3': value['param3'],
        'order': value['order'],
        'disabled': value['disabled'],
    };
}

