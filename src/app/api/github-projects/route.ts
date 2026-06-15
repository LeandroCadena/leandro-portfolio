import { NextResponse } from "next/server";
import type { PortfolioProject } from "@/types/project";

type GithubRepo = {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
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

        const reposResponse = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`,
            {
                headers: {
                    Accept: "application/vnd.github+json",
                },
                next: {
                    revalidate: 3600,
                },
            }
        );

        if (!reposResponse.ok) {
            return NextResponse.json(
                { error: "Failed to fetch GitHub repositories" },
                { status: reposResponse.status }
            );
        }

        const excludedRepos = [
            "portfolio",
            "leandrocadena",
            ".github",
        ];

        const repos: GithubRepo[] = await reposResponse.json();

        const projects = await Promise.all(
            repos
                .filter((repo) =>
                    !repo.fork &&
                    !excludedRepos.includes(repo.name.toLowerCase()))
                .map(async (repo): Promise<PortfolioProject> => {
                    const readme = await fetchReadme(repo.name);
                    const imageUrl = await fetchProjectImage(repo.name);
                    return {
                        id: repo.id,
                        name: repo.name,
                        title: formatRepoName(repo.name),
                        description:
                            repo.description || extractReadmeDescription(readme) || "No description available yet.",
                        repoUrl: repo.html_url,
                        liveUrl: repo.homepage || null,
                        language: repo.language,
                        stars: repo.stargazers_count,
                        updatedAt: repo.updated_at,
                        readme,
                        imageUrl,
                    };
                })
        );

        return NextResponse.json(projects);
    } catch (error) {
        console.error("GitHub projects API error:", error);

        return NextResponse.json(
            { error: "Unexpected error fetching GitHub projects" },
            { status: 500 }
        );
    }
}

async function fetchProjectImage(repoName: string) {
    const possiblePaths = [
        "preview.png",
        "preview.jpg",
        "screenshot.png",
        "screenshot.jpg",
        "banner.png",
        "banner.jpg",
        "public/preview.png",
        "public/screenshot.png",
        "assets/preview.png",
        "assets/screenshot.png",
        "docs/preview.png",
        "docs/screenshot.png",
    ];

    for (const path of possiblePaths) {
        const imageUrl = `https://raw.githubusercontent.com/${username}/${repoName}/HEAD/${path}`;

        try {
            const response = await fetch(imageUrl, {
                method: "HEAD",
                next: {
                    revalidate: 3600,
                },
            });

            if (response.ok) {
                return imageUrl;
            }
        } catch {
            continue;
        }
    }

    return null;
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

        if (!response.ok) {
            return null;
        }

        const data: GithubReadmeResponse = await response.json();

        if (data.encoding !== "base64") {
            return null;
        }

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