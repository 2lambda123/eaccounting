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
    Attachment,
    AttachmentFromJSON,
    AttachmentToJSON,
    AttachmentResult,
    AttachmentResultFromJSON,
    AttachmentResultToJSON,
} from '../models';

export interface AttachmentsGetRequest {
    attachmentId: string;
}

export interface AttachmentsPostRequest {
    postedAttachment: Attachment;
}

/**
 * 
 */
export class AttachmentsApi extends runtime.BaseAPI {

    /**
     * <p>Requires any of the following scopes: <br><b>ea:purchase, ea:purchase_readonly, ea:accounting, ea:accounting_readonly</b></p><p>Available in any of the following variants: <br><b>Pro, Standard, Invoicing, Bookkeeping, Solo</b></p>
     * Get a specific attachment.
     */
    async attachmentsGetRaw(requestParameters: AttachmentsGetRequest): Promise<runtime.ApiResponse<Attachment>> {
        if (requestParameters.attachmentId === null || requestParameters.attachmentId === undefined) {
            throw new runtime.RequiredError('attachmentId','Required parameter requestParameters.attachmentId was null or undefined when calling attachmentsGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/attachments/{attachmentId}`.replace(`{${"attachmentId"}}`, encodeURIComponent(String(requestParameters.attachmentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentFromJSON(jsonValue));
    }

    /**
     * <p>Requires any of the following scopes: <br><b>ea:purchase, ea:purchase_readonly, ea:accounting, ea:accounting_readonly</b></p><p>Available in any of the following variants: <br><b>Pro, Standard, Invoicing, Bookkeeping, Solo</b></p>
     * Get a specific attachment.
     */
    async attachmentsGet(requestParameters: AttachmentsGetRequest): Promise<Attachment> {
        const response = await this.attachmentsGetRaw(requestParameters);
        return await response.value();
    }

    /**
     * <p>Requires any of the following scopes: <br><b>ea:purchase, ea:accounting</b></p><p>Available in any of the following variants: <br><b>Pro, Standard, Invoicing, Bookkeeping, Solo</b></p>
     * Create a new attachment.
     */
    async attachmentsPostRaw(requestParameters: AttachmentsPostRequest): Promise<runtime.ApiResponse<AttachmentResult>> {
        if (requestParameters.postedAttachment === null || requestParameters.postedAttachment === undefined) {
            throw new runtime.RequiredError('postedAttachment','Required parameter requestParameters.postedAttachment was null or undefined when calling attachmentsPost.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/attachments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AttachmentToJSON(requestParameters.postedAttachment),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AttachmentResultFromJSON(jsonValue));
    }

    /**
     * <p>Requires any of the following scopes: <br><b>ea:purchase, ea:accounting</b></p><p>Available in any of the following variants: <br><b>Pro, Standard, Invoicing, Bookkeeping, Solo</b></p>
     * Create a new attachment.
     */
    async attachmentsPost(requestParameters: AttachmentsPostRequest): Promise<AttachmentResult> {
        const response = await this.attachmentsPostRaw(requestParameters);
        return await response.value();
    }

}
