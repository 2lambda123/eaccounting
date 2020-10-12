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
 * @interface OrderListItem
 */
export interface OrderListItem {
    /**
     * 
     * @type {string}
     * @memberof OrderListItem
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderListItem
     */
    number?: number;
    /**
     * 
     * @type {string}
     * @memberof OrderListItem
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderListItem
     */
    customerNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof OrderListItem
     */
    amount?: number;
    /**
     * 
     * @type {Date}
     * @memberof OrderListItem
     */
    orderDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof OrderListItem
     */
    deliveryDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof OrderListItem
     */
    status?: OrderListItemStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof OrderListItem
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderListItem
     */
    href?: string;
}

export function OrderListItemFromJSON(json: any): OrderListItem {
    return OrderListItemFromJSONTyped(json, false);
}

export function OrderListItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderListItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'Id') ? undefined : json['Id'],
        'number': !exists(json, 'Number') ? undefined : json['Number'],
        'customerName': !exists(json, 'CustomerName') ? undefined : json['CustomerName'],
        'customerNumber': !exists(json, 'CustomerNumber') ? undefined : json['CustomerNumber'],
        'amount': !exists(json, 'Amount') ? undefined : json['Amount'],
        'orderDate': !exists(json, 'OrderDate') ? undefined : (new Date(json['OrderDate'])),
        'deliveryDate': !exists(json, 'DeliveryDate') ? undefined : (new Date(json['DeliveryDate'])),
        'status': !exists(json, 'Status') ? undefined : json['Status'],
        'currencyCode': !exists(json, 'CurrencyCode') ? undefined : json['CurrencyCode'],
        'href': !exists(json, 'Href') ? undefined : json['Href'],
    };
}

export function OrderListItemToJSON(value?: OrderListItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Id': value.id,
        'Number': value.number,
        'CustomerName': value.customerName,
        'CustomerNumber': value.customerNumber,
        'Amount': value.amount,
        'OrderDate': value.orderDate === undefined ? undefined : (value.orderDate.toISOString()),
        'DeliveryDate': value.deliveryDate === undefined ? undefined : (value.deliveryDate.toISOString()),
        'Status': value.status,
        'CurrencyCode': value.currencyCode,
        'Href': value.href,
    };
}

/**
* @export
* @enum {string}
*/
export enum OrderListItemStatusEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}


