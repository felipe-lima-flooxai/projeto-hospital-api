import { Request } from "express";

export interface listVagasRequest extends Request {
    query: {
        type: "Criancas" | "Idosos",
        minRewardPoints: string,
        page: string,
        limit: string
    }
}

