export type PortfolioProject = {
    id: number;
    name: string;
    title: string;
    description: string;
    repoUrl: string;
    liveUrl: string | null;
    language: string | null;
    stars: number;
    updatedAt: string;
    readme: string | null;
    imageUrl: string | null;
};