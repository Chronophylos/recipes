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
 * * `G` - g
 * * `KG` - kg
 * * `ML` - ml
 * * `L` - l
 * * `OUNCE` - ounce
 * * `POUND` - pound
 * * `FLUID_OUNCE` - fluid_ounce
 * * `TSP` - tsp
 * * `TBSP` - tbsp
 * * `CUP` - cup
 * * `PINT` - pint
 * * `QUART` - quart
 * * `GALLON` - gallon
 * * `IMPERIAL_FLUID_OUNCE` - imperial fluid ounce
 * * `IMPERIAL_PINT` - imperial pint
 * * `IMPERIAL_QUART` - imperial quart
 * * `IMPERIAL_GALLON` - imperial gallon
 * @export
 */
export const BaseUnitEnum = {
    G: 'G',
    Kg: 'KG',
    Ml: 'ML',
    L: 'L',
    Ounce: 'OUNCE',
    Pound: 'POUND',
    FluidOunce: 'FLUID_OUNCE',
    Tsp: 'TSP',
    Tbsp: 'TBSP',
    Cup: 'CUP',
    Pint: 'PINT',
    Quart: 'QUART',
    Gallon: 'GALLON',
    ImperialFluidOunce: 'IMPERIAL_FLUID_OUNCE',
    ImperialPint: 'IMPERIAL_PINT',
    ImperialQuart: 'IMPERIAL_QUART',
    ImperialGallon: 'IMPERIAL_GALLON'
} as const;
export type BaseUnitEnum = typeof BaseUnitEnum[keyof typeof BaseUnitEnum];


export function instanceOfBaseUnitEnum(value: any): boolean {
    for (const key in BaseUnitEnum) {
        if (Object.prototype.hasOwnProperty.call(BaseUnitEnum, key)) {
            if (BaseUnitEnum[key as keyof typeof BaseUnitEnum] === value) {
                return true;
            }
        }
    }
    return false;
}

export function BaseUnitEnumFromJSON(json: any): BaseUnitEnum {
    return BaseUnitEnumFromJSONTyped(json, false);
}

export function BaseUnitEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseUnitEnum {
    return json as BaseUnitEnum;
}

export function BaseUnitEnumToJSON(value?: BaseUnitEnum | null): any {
    return value as any;
}

