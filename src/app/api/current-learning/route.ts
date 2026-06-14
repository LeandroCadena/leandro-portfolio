import { NextResponse } from "next/server";
import type { GithubLearningProject } from "@/types/githubLearning";

type GithubRepo = {
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    created_at: string;
    updated_at: string;
    fork: boolean;
};

type GithubReadmeResponse = {
    content: string;
    encoding: string;
};

const username = process.env.GITHUB_USERNAME;

export async function GET() {
    try {
        if (!username) {
            return NextResponse.json(
                { error: "Missing GITHUB_USERNAME env variable" },
                { status: 500 }
            );
        }

        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=created&direction=desc&per_page=10`,
            {
                headers: {
                    Accept: "application/vnd.github+json",
                },
                next: {
                    revalidate: 3600,
                },
            }
        );

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch latest GitHub repository" },
                { status: response.status }
            );
        }

        const repos: GithubRepo[] = await response.json();

        const latestRepo = repos.find((repo) => !repo.fork);

        if (!latestRepo) {
            return NextResponse.json(null);
        }

        const readme = await fetchReadme(latestRepo.name);

        const learningProject: GithubLearningProject = {
            name: latestRepo.name,
            title: formatRepoName(latestRepo.name),
            description:
                latestRepo.description ||
                extractReadmeDescription(readme) ||
                "Latest GitHub project in progress.",
            repoUrl: latestRepo.html_url,
            liveUrl: latestRepo.homepage || null,
            language: latestRepo.language,
            technologies: extractTechnologies(readme, latestRepo.language),
            createdAt: latestRepo.created_at,
            updatedAt: latestRepo.updated_at,
            readme,
        };

        return NextResponse.json(learningProject);
    } catch (error) {
        console.error("Current learning API error:", error);

        return NextResponse.json(
            { error: "Unexpected error fetching current learning project" },
            { status: 500 }
        );
    }
}

function extractTechnologies(readme: string | null, language: string | null) {
    const knownTech = [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "NestJS",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Docker",
        "AWS",
        "Tailwind",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
        "GitHub API",
        "REST API",
    ];

    const source = `${readme || ""} ${language || ""}`.toLowerCase();

    const detected = knownTech.filter((tech) =>
        source.includes(tech.toLowerCase())
    );

    if (language && !detected.includes(language)) {
        detected.unshift(language);
    }

    return Array.from(new Set(detected)).slice(0, 8);
}

async function fetchReadme(repoName: string) {
    try {
        const response = await fetch(
            `https://api.github.com/repos/${username}/${repoName}/readme`,
            {
                headers: {
                    Accept: "application/vnd.github+json",
                },
                next: {
                    revalidate: 3600,
                },
            }
        );

        if (!response.ok) return null;

        const data: GithubReadmeResponse = await response.json();

        if (data.encoding !== "base64") return null;

        return Buffer.from(data.content, "base64").toString("utf-8");
    } catch {
        return null;
    }
}

function extractReadmeDescription(readme: string | null) {
    if (!readme) return null;

    const lines = readme
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

    const description = lines.find(
        (line) =>
            !line.startsWith("#") &&
            !line.startsWith("!") &&
            !line.startsWith("[") &&
            !line.startsWith("-")
    );

    return description || null;
}

function formatRepoName(name: string) {
    return name
        .replaceAll("-", " ")
        .replaceAll("_", " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
}