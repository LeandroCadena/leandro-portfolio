import { useEffect, useState } from "react";
import Card from "../shared/Card";
import { GithubLearningProject } from "@/types/githubLearning";
import { Calendar, Code2, FolderGit2, Rocket } from "lucide-react";

export default function CurrentLearningCard() {
    const [learningProject, setLearningProject] =
        useState<GithubLearningProject | null>(null);

    useEffect(() => {
        async function fetchLearningProject() {
            try {
                const response = await fetch("/api/current-learning");

                if (!response.ok) return;

                const data: GithubLearningProject | null = await response.json();

                setLearningProject(data);
            } catch (error) {
                console.error("Error loading current learning project:", error);
            }
        }

        fetchLearningProject();
    }, []);

    return (<Card title="// Currently Learning">
        <LearningItem
            icon={<FolderGit2 size={24} />}
            title="Latest Project"
            value={learningProject?.title || "Loading latest project..."}
        />

        <LearningTechItem
            icon={<Code2 size={24} />}
            title="Tech Stack"
            technologies={learningProject?.technologies || []}
        />

        <LearningItem
            icon={<Rocket size={24} />}
            title="Project Focus"
            value={learningProject?.description || "Reading project description..."}
            scrollable
        />

        <LearningItem
            icon={<Calendar size={24} />}
            title="Started"
            value={learningProject ? formatDate(learningProject.createdAt) : "Loading..."}
        />
    </Card>)
}

function LearningItem({
    icon,
    title,
    value,
    scrollable = false,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
    scrollable?: boolean;
}) {
    return (
        <div className="flex items-start gap-4 border-b border-blue-500/10 py-5 last:border-b-0">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                {icon}
            </div>

            <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-400">{title}</p>

                <p
                    className={`text-lg font-semibold text-white ${scrollable
                        ? "max-h-24 overflow-y-auto pr-2 leading-relaxed modern-scroll"
                        : ""
                        }`}
                >
                    {value}
                </p>
            </div>
        </div>
    );
}

function LearningTechItem({
    icon,
    title,
    technologies,
}: {
    icon: React.ReactNode;
    title: string;
    technologies: string[];
}) {
    return (
        <div className="flex items-start gap-4 border-b border-blue-500/10 py-5 last:border-b-0">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                {icon}
            </div>

            <div className="min-w-0 flex-1">
                <p className="mb-2 text-sm text-slate-400">{title}</p>

                <div className="modern-scroll flex max-h-24 flex-wrap gap-2 overflow-y-auto pr-2">
                    {technologies.length > 0 ? (
                        technologies.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-lg border border-blue-400/15 bg-slate-950/50 px-3 py-1 text-xs text-blue-100"
                            >
                                {tech}
                            </span>
                        ))
                    ) : (
                        <span className="text-lg font-semibold text-white">
                            Detecting stack...
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

function formatDate(date: string) {
    return new Intl.DateTimeFormat("en", {
        month: "short",
        year: "numeric",
    }).format(new Date(date));
}