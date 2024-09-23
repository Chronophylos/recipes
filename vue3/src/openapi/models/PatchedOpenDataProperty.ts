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
import type { OpenDataVersion } from './OpenDataVersion';
import {
    OpenDataVersionFromJSON,
    OpenDataVersionFromJSONTyped,
    OpenDataVersionToJSON,
} from './OpenDataVersion';

/**
 * Moves `UniqueValidator`'s from the validation stage to the save stage.
 * It solves the problem with nested validation for unique fields on update.
 * 
 * If you want more details, you can read related issues and articles:
 * https://github.com/beda-software/drf-writable-nested/issues/1
 * http://www.django-rest-framework.org/api-guide/validators/#updating-nested-serializers
 * 
 * Example of usage:
 * ```
 *     class Child(models.Model):
 *     field = models.CharField(unique=True)
 * 
 * 
 * class Parent(models.Model):
 *     child = models.ForeignKey('Child')
 * 
 * 
 * class ChildSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
 *     class Meta:
 *         model = Child
 * 
 * 
 * class ParentSerializer(NestedUpdateMixin, serializers.ModelSerializer):
 *     child = ChildSerializer()
 * 
 *     class Meta:
 *         model = Parent
 * ```
 * 
 * Note: `UniqueFieldsMixin` must be applied only on the serializer
 * which has unique fields.
 * 
 * Note: When you are using both mixins
 * (`UniqueFieldsMixin` and `NestedCreateMixin` or `NestedUpdateMixin`)
 * you should put `UniqueFieldsMixin` ahead.
 * @export
 * @interface PatchedOpenDataProperty
 */
export interface PatchedOpenDataProperty {
    /**
     * 
     * @type {number}
     * @memberof PatchedOpenDataProperty
     */
    id?: number;
    /**
     * 
     * @type {OpenDataVersion}
     * @memberof PatchedOpenDataProperty
     */
    version?: OpenDataVersion;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataProperty
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataProperty
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataProperty
     */
    unit?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedOpenDataProperty
     */
    fdcId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataProperty
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataProperty
     */
    readonly createdBy?: string;
}

/**
 * Check if a given object implements the PatchedOpenDataProperty interface.
 */
export function instanceOfPatchedOpenDataProperty(value: object): value is PatchedOpenDataProperty {
    return true;
}

export function PatchedOpenDataPropertyFromJSON(json: any): PatchedOpenDataProperty {
    return PatchedOpenDataPropertyFromJSONTyped(json, false);
}

export function PatchedOpenDataPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedOpenDataProperty {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'version': json['version'] == null ? undefined : OpenDataVersionFromJSON(json['version']),
        'slug': json['slug'] == null ? undefined : json['slug'],
        'name': json['name'] == null ? undefined : json['name'],
        'unit': json['unit'] == null ? undefined : json['unit'],
        'fdcId': json['fdc_id'] == null ? undefined : json['fdc_id'],
        'comment': json['comment'] == null ? undefined : json['comment'],
        'createdBy': json['created_by'] == null ? undefined : json['created_by'],
    };
}

export function PatchedOpenDataPropertyToJSON(value?: Omit<PatchedOpenDataProperty, 'created_by'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'version': OpenDataVersionToJSON(value['version']),
        'slug': value['slug'],
        'name': value['name'],
        'unit': value['unit'],
        'fdc_id': value['fdcId'],
        'comment': value['comment'],
    };
}

