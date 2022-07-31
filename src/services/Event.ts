import {remembranceInstance} from "../shares/axios";
import { Meta, PaginationMeta } from "./Base";

export interface GetEventResponse {
    meta: Meta,
    data: EventData,
}

export interface EventData {
    id: number,
    code: string,
    name: string,
    description: string,
    type: string,
    content: string,
    tags: string[],
}

export interface ListEventRequest {
    page: number,
    page_size: number,
    keyword: string,

}

export interface ListEventResponse {
    meta: PaginationMeta,
    data: ListEventData[],
}

export interface ListEventData {
    id: number,
    code: string,
    name: string,
    description: string,
    type: string,
    content: string,
    tags: string[],
    occurred_at: string,
}

export const getEvent = async (id: number): Promise<GetEventResponse> =>
    (
        await remembranceInstance.get(`remembrance/v1/events/${id}`, {})
    ).data;


export const listEvent = async (req: ListEventRequest): Promise<ListEventResponse> =>
    (
        await remembranceInstance.get(`remembrance/v1/event`, {
            params: {
                page: req.page,
                page_size: req.page_size,
                keyword: req.keyword,
            }
        })
    ).data;

