import { Request } from "express";

export interface listVagasRequest extends Request {
    query: {
        type: "Criancas" | "Idosos",
        minRewardPoints: string,
        page: string,
        limit: string
    }
}

export interface listLeaderboardRequest extends Request {
    query: {
        page: string,
        limit: string
    }
}

