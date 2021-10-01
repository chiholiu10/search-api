interface Suggestions {
    searchTerm: string;
    nrResults: number;
}

type GetData = {
    type: string;
    data: Suggestions[];
}

export type DispatchType = (args: GetData) => GetData;