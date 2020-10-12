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
 * @interface SupplierInvoiceDraftRow
 */
export interface SupplierInvoiceDraftRow {
    /**
     * Purpose: Unique Id provided by eAccounting
     * @type {string}
     * @memberof SupplierInvoiceDraftRow
     */
    readonly id?: string;
    /**
     * 
     * @type {number}
     * @memberof SupplierInvoiceDraftRow
     */
    accountNumber?: number;
    /**
     * Purpose: Returns the Vat code id from the provided account number
     * @type {string}
     * @memberof SupplierInvoiceDraftRow
     */
    vatCodeId?: string;
    /**
     * Source: Get from /v1/costcenters
     * @type {string}
     * @memberof SupplierInvoiceDraftRow
     */
    costCenterItemId1?: string;
    /**
     * Source: Get from /v1/costcenters
     * @type {string}
     * @memberof SupplierInvoiceDraftRow
     */
    costCenterItemId2?: string;
    /**
     * Source: Get from /v1/costcenters
     * @type {string}
     * @memberof SupplierInvoiceDraftRow
     */
    costCenterItemId3?: string;
    /**
     * 
     * @type {string}
     * @memberof SupplierInvoiceDraftRow
     */
    projectId?: string;
    /**
     * Format: Max 2 decimals
     * Purpose: This feature is for dutch companies only which enabled agriculture support
     * @type {number}
     * @memberof SupplierInvoiceDraftRow
     */
    quantity?: number;
    /**
     * Format: Max 2 decimals
     * Purpose: This feature is for dutch companies only which enabled agriculture support
     * @type {number}
     * @memberof SupplierInvoiceDraftRow
     */
    weight?: number;
    /**
     * Format: YYYY-MM-DD
     * Purpose: This feature is for dutch companies only which enabled agriculture support
     * @type {Date}
     * @memberof SupplierInvoiceDraftRow
     */
    deliveryDate?: Date;
    /**
     * Purpose: This feature is for dutch companies only which enabled agriculture support
     * @type {number}
     * @memberof SupplierInvoiceDraftRow
     */
    harvestYear?: number;
    /**
     * Format: Max 2 decimals
     * @type {number}
     * @memberof SupplierInvoiceDraftRow
     */
    debetAmount?: number;
    /**
     * Format: Max 2 decimals
     * @type {number}
     * @memberof SupplierInvoiceDraftRow
     */
    creditAmount?: number;
    /**
     * Default: 1
     * @type {number}
     * @memberof SupplierInvoiceDraftRow
     */
    lineNumber?: number;
    /**
     * Max length: 100 characters
     * @type {string}
     * @memberof SupplierInvoiceDraftRow
     */
    transactionText?: string;
}

export function SupplierInvoiceDraftRowFromJSON(json: any): SupplierInvoiceDraftRow {
    return SupplierInvoiceDraftRowFromJSONTyped(json, false);
}

export function SupplierInvoiceDraftRowFromJSONTyped(json: any, ignoreDiscriminator: boolean): SupplierInvoiceDraftRow {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'Id') ? undefined : json['Id'],
        'accountNumber': !exists(json, 'AccountNumber') ? undefined : json['AccountNumber'],
        'vatCodeId': !exists(json, 'VatCodeId') ? undefined : json['VatCodeId'],
        'costCenterItemId1': !exists(json, 'CostCenterItemId1') ? undefined : json['CostCenterItemId1'],
        'costCenterItemId2': !exists(json, 'CostCenterItemId2') ? undefined : json['CostCenterItemId2'],
        'costCenterItemId3': !exists(json, 'CostCenterItemId3') ? undefined : json['CostCenterItemId3'],
        'projectId': !exists(json, 'ProjectId') ? undefined : json['ProjectId'],
        'quantity': !exists(json, 'Quantity') ? undefined : json['Quantity'],
        'weight': !exists(json, 'Weight') ? undefined : json['Weight'],
        'deliveryDate': !exists(json, 'DeliveryDate') ? undefined : (new Date(json['DeliveryDate'])),
        'harvestYear': !exists(json, 'HarvestYear') ? undefined : json['HarvestYear'],
        'debetAmount': !exists(json, 'DebetAmount') ? undefined : json['DebetAmount'],
        'creditAmount': !exists(json, 'CreditAmount') ? undefined : json['CreditAmount'],
        'lineNumber': !exists(json, 'LineNumber') ? undefined : json['LineNumber'],
        'transactionText': !exists(json, 'TransactionText') ? undefined : json['TransactionText'],
    };
}

export function SupplierInvoiceDraftRowToJSON(value?: SupplierInvoiceDraftRow | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'AccountNumber': value.accountNumber,
        'VatCodeId': value.vatCodeId,
        'CostCenterItemId1': value.costCenterItemId1,
        'CostCenterItemId2': value.costCenterItemId2,
        'CostCenterItemId3': value.costCenterItemId3,
        'ProjectId': value.projectId,
        'Quantity': value.quantity,
        'Weight': value.weight,
        'DeliveryDate': value.deliveryDate === undefined ? undefined : (value.deliveryDate.toISOString()),
        'HarvestYear': value.harvestYear,
        'DebetAmount': value.debetAmount,
        'CreditAmount': value.creditAmount,
        'LineNumber': value.lineNumber,
        'TransactionText': value.transactionText,
    };
}


