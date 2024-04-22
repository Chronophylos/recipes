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
 * @interface PatchedAutomationRequest
 */
export interface PatchedAutomationRequest {
    /**
     * 
     * @type {AutomationTypeEnum}
     * @memberof PatchedAutomationRequest
     */
    type?: AutomationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PatchedAutomationRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedAutomationRequest
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedAutomationRequest
     */
    param1?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedAutomationRequest
     */
    param2?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedAutomationRequest
     */
    param3?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedAutomationRequest
     */
    order?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedAutomationRequest
     */
    disabled?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PatchedAutomationRequest
     */
    id?: number;
}

/**
 * Check if a given object implements the PatchedAutomationRequest interface.
 */
export function instanceOfPatchedAutomationRequest(value: object): boolean {
    return true;
}

export function PatchedAutomationRequestFromJSON(json: any): PatchedAutomationRequest {
    return PatchedAutomationRequestFromJSONTyped(json, false);
}

export function PatchedAutomationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedAutomationRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'] == null ? undefined : AutomationTypeEnumFromJSON(json['type']),
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'param1': json['param_1'] == null ? undefined : json['param_1'],
        'param2': json['param_2'] == null ? undefined : json['param_2'],
        'param3': json['param_3'] == null ? undefined : json['param_3'],
        'order': json['order'] == null ? undefined : json['order'],
        'disabled': json['disabled'] == null ? undefined : json['disabled'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function PatchedAutomationRequestToJSON(value?: PatchedAutomationRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'type': AutomationTypeEnumToJSON(value['type']),
        'name': value['name'],
        'description': value['description'],
        'param_1': value['param1'],
        'param_2': value['param2'],
        'param_3': value['param3'],
        'order': value['order'],
        'disabled': value['disabled'],
        'id': value['id'],
    };
}

