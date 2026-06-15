"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import PageAnimation from "@/components/shared/PageAnimation";
import type { PortfolioProject } from "@/types/project";
import Image from "next/image";

export default function ProjectsSection() {
    const [projects, setProjects] = useState<PortfolioProject[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch("/api/github-projects");

                if (!response.ok) {
                    throw new Error("Failed to fetch projects");
                }

                const data: PortfolioProject[] = await response.json();
                setProjects(data);
            } catch (error) {
                console.error("Error loading projects:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    return (
        <PageAnimation>
            <div className="mb-6 flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                    {"// Projects"}
                </p>

                <a
                    href="https://github.com/LeandroCadena"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-500"
                >
                    <FaGithub size={16} />
                    GitHub Profile
                </a>
            </div>

            {loading ? (
                <div className="flex min-h-[400px] items-center justify-center rounded-3xl border border-blue-400/10 bg-slate-950/40">
                    <Loader2 className="animate-spin text-blue-400" size={32} />
                </div>
            ) : projects.length === 0 ? (
                <div className="rounded-3xl border border-blue-400/10 bg-slate-950/40 p-8 text-slate-300">
                    No projects found yet.
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </PageAnimation>
    );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
    return (
        <div className="group rounded-3xl border border-blue-400/10 bg-slate-950/40 p-6 shadow-[0_0_50px_rgba(59,130,246,0.08)] backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-400/30 hover:bg-blue-500/5">
            <div className="relative mb-5 h-40 overflow-hidden rounded-2xl border border-blue-400/10 bg-blue-500/10">
                {project.imageUrl ? (
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <FaGithub
                            className="text-blue-400/60 transition group-hover:scale-110"
                            size={56}
                        />
                    </div>
                )}
            </div>

            <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold">{project.title}</h3>
            </div>

            <p className="mb-5 min-h-[70px] text-sm text-slate-300">
                {project.description}
            </p>

            {project.readme && (
                <div className="mb-5 rounded-2xl border border-blue-400/10 bg-slate-950/60 p-4">
                    <p className="mb-2 text-xs uppercase tracking-widest text-blue-400">
                        README Preview
                    </p>

                    <p className="line-clamp-4 text-sm text-slate-400">
                        {cleanReadmePreview(project.readme)}
                    </p>
                </div>
            )}

            <div className="mb-5 flex flex-wrap gap-2">
                {project.language && (
                    <span className="rounded-lg border border-blue-400/15 bg-slate-950/50 px-3 py-1 text-xs text-blue-100">
                        {project.language}
                    </span>
                )}

                <span className="rounded-lg border border-blue-400/15 bg-slate-950/50 px-3 py-1 text-xs text-blue-100">
                    Updated {formatDate(project.updatedAt)}
                </span>
            </div>

            <div className="flex gap-4 text-sm text-blue-300">
                <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-blue-100"
                >
                    Repository <FaGithub size={14} />
                </a>

                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 hover:text-blue-100"
                    >
                        Live Demo <ExternalLink size={14} />
                    </a>
                )}
            </div>
        </div>
    );
}

function cleanReadmePreview(readme: string) {
    return readme
        .replace(/#/g, "")
        .replace(/!\[.*?\]\(.*?\)/g, "")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/`/g, "")
        .trim()
        .slice(0, 260);
}

function formatDate(date: string) {
    return new Intl.DateTimeFormat("en", {
        month: "short",
        year: "numeric",
    }).format(new Date(date));
}