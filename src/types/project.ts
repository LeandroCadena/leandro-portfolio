export type PortfolioProject = {
    id: number;
    name: string;
    title: string;
    description: string;
    repoUrl: string;
    liveUrl: string | null;
    language: string | null;
    technologies: string[];
    highlights: string[];
    updatedAt: string;
    readme: string | null;
    imageUrl: string | null;
};