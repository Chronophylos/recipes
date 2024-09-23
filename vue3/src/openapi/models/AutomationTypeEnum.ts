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


/**
 * * `FOOD_ALIAS` - Food Alias
 * * `UNIT_ALIAS` - Unit Alias
 * * `KEYWORD_ALIAS` - Keyword Alias
 * * `DESCRIPTION_REPLACE` - Description Replace
 * * `INSTRUCTION_REPLACE` - Instruction Replace
 * * `NEVER_UNIT` - Never Unit
 * * `TRANSPOSE_WORDS` - Transpose Words
 * * `FOOD_REPLACE` - Food Replace
 * * `UNIT_REPLACE` - Unit Replace
 * * `NAME_REPLACE` - Name Replace
 * @export
 */
export const AutomationTypeEnum = {
    FoodAlias: 'FOOD_ALIAS',
    UnitAlias: 'UNIT_ALIAS',
    KeywordAlias: 'KEYWORD_ALIAS',
    DescriptionReplace: 'DESCRIPTION_REPLACE',
    InstructionReplace: 'INSTRUCTION_REPLACE',
    NeverUnit: 'NEVER_UNIT',
    TransposeWords: 'TRANSPOSE_WORDS',
    FoodReplace: 'FOOD_REPLACE',
    UnitReplace: 'UNIT_REPLACE',
    NameReplace: 'NAME_REPLACE'
} as const;
export type AutomationTypeEnum = typeof AutomationTypeEnum[keyof typeof AutomationTypeEnum];


export function instanceOfAutomationTypeEnum(value: any): boolean {
    for (const key in AutomationTypeEnum) {
        if (Object.prototype.hasOwnProperty.call(AutomationTypeEnum, key)) {
            if (AutomationTypeEnum[key as keyof typeof AutomationTypeEnum] === value) {
                return true;
            }
        }
    }
    return false;
}

export function AutomationTypeEnumFromJSON(json: any): AutomationTypeEnum {
    return AutomationTypeEnumFromJSONTyped(json, false);
}

export function AutomationTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutomationTypeEnum {
    return json as AutomationTypeEnum;
}

export function AutomationTypeEnumToJSON(value?: AutomationTypeEnum | null): any {
    return value as any;
}

