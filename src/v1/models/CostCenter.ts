/* tslint:disable */
/* eslint-disable */
/**
 * Visma eAccounting API V1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CostCenterItem,
    CostCenterItemFromJSON,
    CostCenterItemFromJSONTyped,
    CostCenterItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface CostCenter
 */
export interface CostCenter {
    /**
     * 
     * @type {string}
     * @memberof CostCenter
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof CostCenter
     */
    number?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CostCenter
     */
    isActive?: boolean;
    /**
     * 
     * @type {Array<CostCenterItem>}
     * @memberof CostCenter
     */
    items?: Array<CostCenterItem>;
    /**
     * 
     * @type {string}
     * @memberof CostCenter
     */
    costCenterId?: string;
}

export function CostCenterFromJSON(json: any): CostCenter {
    return CostCenterFromJSONTyped(json, false);
}

export function CostCenterFromJSONTyped(json: any, ignoreDiscriminator: boolean): CostCenter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'Name') ? undefined : json['Name'],
        'number': !exists(json, 'Number') ? undefined : json['Number'],
        'isActive': !exists(json, 'IsActive') ? undefined : json['IsActive'],
        'items': !exists(json, 'Items') ? undefined : ((json['Items'] as Array<any>).map(CostCenterItemFromJSON)),
        'costCenterId': !exists(json, 'CostCenterId') ? undefined : json['CostCenterId'],
    };
}

export function CostCenterToJSON(value?: CostCenter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.name,
        'Number': value.number,
        'IsActive': value.isActive,
        'Items': value.items === undefined ? undefined : ((value.items as Array<any>).map(CostCenterItemToJSON)),
        'CostCenterId': value.costCenterId,
    };
}


