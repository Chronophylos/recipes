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
 * @interface Keyword
 */
export interface Keyword {
    /**
     * 
     * @type {number}
     * @memberof Keyword
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Keyword
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Keyword
     */
    readonly label: string;
    /**
     * 
     * @type {string}
     * @memberof Keyword
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof Keyword
     */
    readonly parent: number;
    /**
     * 
     * @type {number}
     * @memberof Keyword
     */
    readonly numchild: number;
    /**
     * 
     * @type {Date}
     * @memberof Keyword
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Keyword
     */
    readonly updatedAt: Date;
    /**
     * Returns a string representation of a tree node and it's ancestors,
     * e.g. 'Cuisine > Asian > Chinese > Catonese'.
     * @type {string}
     * @memberof Keyword
     */
    readonly fullName: string;
}

/**
 * Check if a given object implements the Keyword interface.
 */
export function instanceOfKeyword(value: object): value is Keyword {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('parent' in value) || value['parent'] === undefined) return false;
    if (!('numchild' in value) || value['numchild'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('fullName' in value) || value['fullName'] === undefined) return false;
    return true;
}

export function KeywordFromJSON(json: any): Keyword {
    return KeywordFromJSONTyped(json, false);
}

export function KeywordFromJSONTyped(json: any, ignoreDiscriminator: boolean): Keyword {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'label': json['label'],
        'description': json['description'] == null ? undefined : json['description'],
        'parent': json['parent'],
        'numchild': json['numchild'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
        'fullName': json['full_name'],
    };
}

export function KeywordToJSON(value?: Omit<Keyword, 'label'|'parent'|'numchild'|'created_at'|'updated_at'|'full_name'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'description': value['description'],
    };
}

