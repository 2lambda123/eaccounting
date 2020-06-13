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


import * as runtime from '../runtime';
import {
    FiscalYear,
    FiscalYearFromJSON,
    FiscalYearToJSON,
} from '../models';

export interface FiscalYearsGetRequest {
    id: string;
}

/**
 * 
 */
export class FiscalYearsApi extends runtime.BaseAPI {

    /**
     * Get a FiscalYear item by Id.<p>Requires any of the following scopes: <br><b>ea:sales, ea:sales_readonly, ea:accounting, ea:accounting_readonly</b></p><p>Available in any of the following variants: <br><b>Pro, Standard, Invoicing, Bookkeeping, Solo</b></p>
     * Get a fiscal year
     */
    async fiscalYearsGetRaw(requestParameters: FiscalYearsGetRequest): Promise<runtime.ApiResponse<FiscalYear>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling fiscalYearsGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fiscalyears/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => FiscalYearFromJSON(jsonValue));
    }

    /**
     * Get a FiscalYear item by Id.<p>Requires any of the following scopes: <br><b>ea:sales, ea:sales_readonly, ea:accounting, ea:accounting_readonly</b></p><p>Available in any of the following variants: <br><b>Pro, Standard, Invoicing, Bookkeeping, Solo</b></p>
     * Get a fiscal year
     */
    async fiscalYearsGet(requestParameters: FiscalYearsGetRequest): Promise<FiscalYear> {
        const response = await this.fiscalYearsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get a list of FiscalYear items.<p>Requires any of the following scopes: <br><b>ea:sales, ea:sales_readonly, ea:accounting, ea:accounting_readonly</b></p><p>Available in any of the following variants: <br><b>Pro, Standard, Invoicing, Bookkeeping, Solo</b></p>
     * Get a list of fiscal years
     */
    async fiscalYearsListRaw(): Promise<runtime.ApiResponse<Array<FiscalYear>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/fiscalyears`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FiscalYearFromJSON));
    }

    /**
     * Get a list of FiscalYear items.<p>Requires any of the following scopes: <br><b>ea:sales, ea:sales_readonly, ea:accounting, ea:accounting_readonly</b></p><p>Available in any of the following variants: <br><b>Pro, Standard, Invoicing, Bookkeeping, Solo</b></p>
     * Get a list of fiscal years
     */
    async fiscalYearsList(): Promise<Array<FiscalYear>> {
        const response = await this.fiscalYearsListRaw();
        return await response.value();
    }

}