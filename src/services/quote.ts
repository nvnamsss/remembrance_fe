import { remembranceInstance } from "../shares/axios";
import { Meta } from "./Base";

interface LikeResponse {
  meta: Meta,
  data: LikeData,
}

interface LikeData {
  like: number;
}

interface GetQuotesResponse {
  meta: Meta,
  data: Quotes,
}

interface Quotes {
  id: number;
  content: string;
  author: string;
  like: number;
}

export const getDailyQuote = async (): Promise<GetQuotesResponse> =>
  (
    await remembranceInstance.get("famous-quotes/v1/quotes", {})
  ).data;


export const sendLikeRequest = async (id: number, status: boolean): Promise<LikeResponse> =>
  (
    await remembranceInstance.post(`famous-quotes/v1/quotes/like/${id}`, {
      negative: status,
    })
  ).data;
