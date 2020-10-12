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
/**
 * 
 * @export
 * @interface PartnerResourceLink
 */
export interface PartnerResourceLink {
    /**
     * Purpose: Id provided by eAccounting
     * @type {string}
     * @memberof PartnerResourceLink
     */
    readonly id?: string;
    /**
     * Purpose: Link to the resource in eAccounting
     * @type {string}
     * @memberof PartnerResourceLink
     */
    resourceId: string;
    /**
     * 
     * @type {number}
     * @memberof PartnerResourceLink
     */
    resourceType: PartnerResourceLinkResourceTypeEnum;
    /**
     * Link to the third party solution page
     * @type {string}
     * @memberof PartnerResourceLink
     */
    href: string;
    /**
     * 
     * @type {string}
     * @memberof PartnerResourceLink
     */
    partnerCompanyName: string;
    /**
     * 
     * @type {string}
     * @memberof PartnerResourceLink
     */
    partnerSystemName: string;
}

export function PartnerResourceLinkFromJSON(json: any): PartnerResourceLink {
    return PartnerResourceLinkFromJSONTyped(json, false);
}

export function PartnerResourceLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartnerResourceLink {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'Id') ? undefined : json['Id'],
        'resourceId': json['ResourceId'],
        'resourceType': json['ResourceType'],
        'href': json['Href'],
        'partnerCompanyName': json['PartnerCompanyName'],
        'partnerSystemName': json['PartnerSystemName'],
    };
}

export function PartnerResourceLinkToJSON(value?: PartnerResourceLink | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResourceId': value.resourceId,
        'ResourceType': value.resourceType,
        'Href': value.href,
        'PartnerCompanyName': value.partnerCompanyName,
        'PartnerSystemName': value.partnerSystemName,
    };
}

/**
* @export
* @enum {string}
*/
export enum PartnerResourceLinkResourceTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6
}


