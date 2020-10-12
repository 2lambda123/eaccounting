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
    OrderListItem,
    OrderListItemFromJSON,
    OrderListItemToJSON,
} from '../models';

export interface OrderListItemsGetRequest {
    customerId: string;
}

export interface OrderListItemsListRequest {
    includeShipped?: boolean;
}

/**
 * 
 */
export class OrderListItemsApi extends runtime.BaseAPI {

    /**
     * <p>Requires any of the following scopes: <br><b>ea:sales, ea:sales_readonly</b></p><p>Requires any of the following modules: <br><b>order_standard</b></p><p>Available in any of the following variants: <br><b>Pro, Standard, Invoicing</b></p>
     * Gets a list of order list items for a specific customer.
     */
    async orderListItemsGetRaw(requestParameters: OrderListItemsGetRequest): Promise<runtime.ApiResponse<Array<OrderListItem>>> {
        if (requestParameters.customerId === null || requestParameters.customerId === undefined) {
            throw new runtime.RequiredError('customerId','Required parameter requestParameters.customerId was null or undefined when calling orderListItemsGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/orderlistitems/{customerId}`.replace(`{${"customerId"}}`, encodeURIComponent(String(requestParameters.customerId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OrderListItemFromJSON));
    }

    /**
     * <p>Requires any of the following scopes: <br><b>ea:sales, ea:sales_readonly</b></p><p>Requires any of the following modules: <br><b>order_standard</b></p><p>Available in any of the following variants: <br><b>Pro, Standard, Invoicing</b></p>
     * Gets a list of order list items for a specific customer.
     */
    async orderListItemsGet(requestParameters: OrderListItemsGetRequest): Promise<Array<OrderListItem>> {
        const response = await this.orderListItemsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * <p>Requires any of the following scopes: <br><b>ea:sales, ea:sales_readonly</b></p><p>Requires any of the following modules: <br><b>order_standard</b></p><p>Available in any of the following variants: <br><b>Pro, Standard, Invoicing</b></p>
     * Gets a list of order list items. Exclude shipped orders by setting includeShipped to false.
     */
    async orderListItemsListRaw(requestParameters: OrderListItemsListRequest): Promise<runtime.ApiResponse<Array<OrderListItem>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.includeShipped !== undefined) {
            queryParameters['includeShipped'] = requestParameters.includeShipped;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/orderlistitems`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OrderListItemFromJSON));
    }

    /**
     * <p>Requires any of the following scopes: <br><b>ea:sales, ea:sales_readonly</b></p><p>Requires any of the following modules: <br><b>order_standard</b></p><p>Available in any of the following variants: <br><b>Pro, Standard, Invoicing</b></p>
     * Gets a list of order list items. Exclude shipped orders by setting includeShipped to false.
     */
    async orderListItemsList(requestParameters: OrderListItemsListRequest): Promise<Array<OrderListItem>> {
        const response = await this.orderListItemsListRaw(requestParameters);
        return await response.value();
    }

}
