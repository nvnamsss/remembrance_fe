import { remembranceInstance } from "../shares/axios";
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

export interface SearchEventRequest {
    page: number,
    page_size: number,
    keyword: string,
    type: string,
}   

export interface SearchEventResponse {
    meta: PaginationMeta,
    data: SearchEventData[],
}

export interface SearchEventData {
    id: number,
    code: string,
    name: string,
    description: string,
    type: string,
    content: string,
    tags: string[],
    occurred_at: string,
    comments: SearchEventComment[],
}

export interface SearchEventComment {
    event_id: number,
    user_id: number,
    comment: string,
    commented_by: string,
    created_at: string,
}

export interface CommentRequest {
    event_id: number,
    user_id: number,
    comment: string,
    commented_by: string,
}

export interface CommentResponse {
    meta: Meta,
}

export interface CreateEventRequest {
    code: string,
    name: string,
    description: string,
    type: string,
    content: string,
    occurred_at: string,
    tags: string[],
}

export interface CreateEventResponse {
    meta: Meta,
}

export interface UpdateEventRequest {
    id: number,
    name: string,
    description: string,
    content: string,
    occurred_at: string,
    tags: string[],
}

export interface UpdateEventResponse {
    meta: Meta,
}


export const getEvent = async (id: number): Promise<GetEventResponse> =>
    (
        await remembranceInstance.get(`remembrance/v1/events/${id}`, {})
    ).data;


export const searchEvent = async (req: SearchEventRequest): Promise<SearchEventResponse> =>
    (
        await remembranceInstance.get(`remembrance/v1/event`, {
            params: {
                page: req.page,
                page_size: req.page_size,
                keyword: req.keyword,
                type: req.type
            }
        })
    ).data;

export const comment = async (req: CommentRequest): Promise<CommentResponse> => (
    await remembranceInstance.post(`remembrance/v1/event/${req.event_id}/comment`, req)
).data;


export const createEvent = async(req: CreateEventRequest): Promise<CreateEventResponse> =>     (
    await remembranceInstance.post(`remembrance/v1/event`, req)
).data;

export const updateEvent = async(req: UpdateEventRequest): Promise<UpdateEventResponse> =>     (
    await remembranceInstance.put(`remembrance/v1/event/${req.id}`, req)
).data;
