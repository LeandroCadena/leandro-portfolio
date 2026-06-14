export type GithubLearningProject = {
    name: string;
    title: string;
    description: string;
    repoUrl: string;
    liveUrl: string | null;
    language: string | null;
    technologies: string[];
    createdAt: string;
    updatedAt: string;
    readme: string | null;
};