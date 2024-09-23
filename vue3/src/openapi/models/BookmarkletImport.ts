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
 * @interface BookmarkletImport
 */
export interface BookmarkletImport {
    /**
     * 
     * @type {number}
     * @memberof BookmarkletImport
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof BookmarkletImport
     */
    url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BookmarkletImport
     */
    html: string;
    /**
     * 
     * @type {number}
     * @memberof BookmarkletImport
     */
    readonly createdBy: number;
    /**
     * 
     * @type {Date}
     * @memberof BookmarkletImport
     */
    readonly createdAt: Date;
}

/**
 * Check if a given object implements the BookmarkletImport interface.
 */
export function instanceOfBookmarkletImport(value: object): value is BookmarkletImport {
    if (!('html' in value) || value['html'] === undefined) return false;
    if (!('createdBy' in value) || value['createdBy'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    return true;
}

export function BookmarkletImportFromJSON(json: any): BookmarkletImport {
    return BookmarkletImportFromJSONTyped(json, false);
}

export function BookmarkletImportFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookmarkletImport {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'url': json['url'] == null ? undefined : json['url'],
        'html': json['html'],
        'createdBy': json['created_by'],
        'createdAt': (new Date(json['created_at'])),
    };
}

export function BookmarkletImportToJSON(value?: Omit<BookmarkletImport, 'created_by'|'created_at'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'url': value['url'],
        'html': value['html'],
    };
}

