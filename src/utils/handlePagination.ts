interface PaginationResult {
  pageNumber: number;
  limitNumber: number;
  skip: number;
}

export function handlePagination(page: string, limit: string): PaginationResult {


    const pageNumber = parseInt(page as string, 10) 
    let limitNumber = parseInt(limit as string, 10)

    const skip = (pageNumber - 1) * limitNumber;

    return {
        pageNumber,
        limitNumber,
        skip
    }
}