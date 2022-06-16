import axios from "../shares/axios";
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
    content: string
}

export interface ListEventRequest {
    page: number,
    page_size: number,
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
    content: string
}

export const getEvent = async (id: number): Promise<GetEventResponse> =>
    (
        await axios.get(`ddanthanhh/v1/events/${id}`, {})
    ).data;


export const listEvent = async (req: ListEventRequest): Promise<ListEventResponse> =>
    (
        await axios.post(`ddanthanhh/v1/events`, {
            page: req.page,
            page_size: req.page_size,
        })
    ).data;
