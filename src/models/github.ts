export type GitHub = {
    username: string;
    sortBy: string;
    limit: number;
    exclude: {
        forks: boolean;
        projects: string[];
    }
};
