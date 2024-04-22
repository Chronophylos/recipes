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
 * Adds nested create feature
 * @export
 * @interface PatchedUserRequest
 */
export interface PatchedUserRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedUserRequest
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedUserRequest
     */
    lastName?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedUserRequest
     */
    id?: number;
}

/**
 * Check if a given object implements the PatchedUserRequest interface.
 */
export function instanceOfPatchedUserRequest(value: object): boolean {
    return true;
}

export function PatchedUserRequestFromJSON(json: any): PatchedUserRequest {
    return PatchedUserRequestFromJSONTyped(json, false);
}

export function PatchedUserRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedUserRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'firstName': json['first_name'] == null ? undefined : json['first_name'],
        'lastName': json['last_name'] == null ? undefined : json['last_name'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function PatchedUserRequestToJSON(value?: PatchedUserRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'first_name': value['firstName'],
        'last_name': value['lastName'],
        'id': value['id'],
    };
}

