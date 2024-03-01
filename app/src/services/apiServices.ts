import axiosClient from "./axiosClient";

export const postShortenUrl = async (url: string) => {
  try {
    const response = await axiosClient.post<{
      originalUrl: string;
      shortenedUrl: string;
      counter: number;
      createdAt: string;
    }>("/shorten", { originalUrl: url });
    return response.data;
  } catch (error) {
    throw error;
  }
};
