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
import type { OpenDataStoreCategoryRequest } from './OpenDataStoreCategoryRequest';
import {
    OpenDataStoreCategoryRequestFromJSON,
    OpenDataStoreCategoryRequestFromJSONTyped,
    OpenDataStoreCategoryRequestToJSON,
} from './OpenDataStoreCategoryRequest';
import type { OpenDataVersionRequest } from './OpenDataVersionRequest';
import {
    OpenDataVersionRequestFromJSON,
    OpenDataVersionRequestFromJSONTyped,
    OpenDataVersionRequestToJSON,
} from './OpenDataVersionRequest';

/**
 * Adds nested create feature
 * @export
 * @interface PatchedOpenDataStoreRequest
 */
export interface PatchedOpenDataStoreRequest {
    /**
     * 
     * @type {OpenDataVersionRequest}
     * @memberof PatchedOpenDataStoreRequest
     */
    version?: OpenDataVersionRequest;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataStoreRequest
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataStoreRequest
     */
    name?: string;
    /**
     * 
     * @type {Array<OpenDataStoreCategoryRequest>}
     * @memberof PatchedOpenDataStoreRequest
     */
    categoryToStore?: Array<OpenDataStoreCategoryRequest>;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataStoreRequest
     */
    comment?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedOpenDataStoreRequest
     */
    id?: number;
}

/**
 * Check if a given object implements the PatchedOpenDataStoreRequest interface.
 */
export function instanceOfPatchedOpenDataStoreRequest(value: object): boolean {
    return true;
}

export function PatchedOpenDataStoreRequestFromJSON(json: any): PatchedOpenDataStoreRequest {
    return PatchedOpenDataStoreRequestFromJSONTyped(json, false);
}

export function PatchedOpenDataStoreRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedOpenDataStoreRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'version': json['version'] == null ? undefined : OpenDataVersionRequestFromJSON(json['version']),
        'slug': json['slug'] == null ? undefined : json['slug'],
        'name': json['name'] == null ? undefined : json['name'],
        'categoryToStore': json['category_to_store'] == null ? undefined : ((json['category_to_store'] as Array<any>).map(OpenDataStoreCategoryRequestFromJSON)),
        'comment': json['comment'] == null ? undefined : json['comment'],
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function PatchedOpenDataStoreRequestToJSON(value?: PatchedOpenDataStoreRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'version': OpenDataVersionRequestToJSON(value['version']),
        'slug': value['slug'],
        'name': value['name'],
        'category_to_store': value['categoryToStore'] == null ? undefined : ((value['categoryToStore'] as Array<any>).map(OpenDataStoreCategoryRequestToJSON)),
        'comment': value['comment'],
        'id': value['id'],
    };
}

