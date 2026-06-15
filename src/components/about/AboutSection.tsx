"use client";

import {
    Code2,
    FolderGit2,
    Rocket,
    Calendar,
    Brain,
    Zap,
    Target,
    MessageSquare,
    Globe,
    Search,
    RefreshCw,
    Users,
} from "lucide-react";
import { profile } from "@/data/profile";
import { softSkills } from "@/data/skills";
import PageAnimation from "@/components/shared/PageAnimation";
import Card from "@/components/shared/Card";
import { useEffect, useState } from "react";
import type { GithubLearningProject } from "@/types/githubLearning";

export default function AboutSection() {
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

    const softSkillIcons: Record<string, React.ReactNode> = {
        "Problem Solving": <Brain size={20} />,
        "Fast Learning": <Zap size={20} />,
        Ownership: <Target size={20} />,
        Communication: <MessageSquare size={20} />,
        "Remote Collaboration": <Globe size={20} />,
        "Attention to Detail": <Search size={20} />,
        Adaptability: <RefreshCw size={20} />,
        Teamwork: <Users size={20} />,
    };
    return (
        <PageAnimation>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
                {"// About Me"}
            </p>

            <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                <div className="rounded-3xl border border-blue-400/10 bg-slate-950/40 p-8 shadow-[0_0_50px_rgba(59,130,246,0.08)] backdrop-blur-xl">
                    <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 className="mb-3 text-4xl font-bold">
                                Hi, I&apos;m {profile.name}
                            </h2>
                            <p className="text-xl text-blue-400">{profile.title}</p>
                        </div>

                        <ExperienceBadge years={profile.yearsOfExperience} />
                    </div>

                    <p className="max-w-3xl text-slate-300">
                        {profile.description}
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-4">
                        <InfoCard
                            icon={"⚙️"}
                            title="Backend APIs"
                            text="Designing scalable services, REST APIs and business logic."
                        />

                        <InfoCard
                            icon={"🔗"}
                            title="System Integrations"
                            text="Payroll, HRIS and third-party platform integrations."
                        />

                        <InfoCard
                            icon={"☁️"}
                            title="Cloud & DevOps"
                            text="AWS, Docker, CI/CD and production deployments."
                        />

                        <InfoCard
                            icon={"🚀"}
                            title="Performance"
                            text="Profiling, optimization and production troubleshooting."
                        />
                    </div>
                </div>

                <Card title="// Currently Learning">
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
                </Card>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <Card title="// Tech Stack">
                    <div className="space-y-1">
                        <TechGroup
                            title="Strongest"
                            years="5 years"
                            items={["JavaScript", "React", "Node.js", "REST APIs"]}
                        />
                        <TechGroup
                            title="Advanced"
                            years="3+ years"
                            items={["TypeScript", "Express", "PostgreSQL", "Docker"]}
                        />
                        <TechGroup
                            title="Intermediate"
                            years="1-2 years"
                            items={["AWS", "Redis", "NestJS", "MySQL"]}
                        />
                        <TechGroup
                            title="Learning"
                            years="Current"
                            items={["Next.js", "Framer Motion", "System Design"]}
                        />
                    </div>
                </Card>

                <Card title="// Soft Skills">
                    <div className="grid gap-3 md:grid-cols-2">
                        {softSkills.map((skill) => (
                            <div
                                key={skill}
                                className="
                                group
                                flex
                                items-center
                                gap-4
                                rounded-2xl
                                border
                                border-blue-400/10
                                bg-blue-500/5
                                p-4
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-blue-400/20
                                hover:bg-blue-500/10
                                "
                            >
                                <div
                                    className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                bg-blue-500/10
                                text-blue-400
                                transition
                                group-hover:bg-blue-500/20
                                "
                                >
                                    {softSkillIcons[skill]}
                                </div>

                                <span className="font-medium text-slate-200">
                                    {skill}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </PageAnimation>
    );
}

function ExperienceBadge({ years }: { years: number }) {
    return (
        <div className="relative flex h-36 w-36 shrink-0 items-center justify-center">
            <div
                className="absolute inset-0"
                style={{
                    clipPath:
                        "polygon(25% 5%,75% 5%,95% 50%,75% 95%,25% 95%,5% 50%)",
                    border: "2px solid rgba(59,130,246,.5)",
                    background:
                        "linear-gradient(to bottom, rgba(59,130,246,.15), rgba(59,130,246,.05))",
                    boxShadow: "0 0 25px rgba(59,130,246,.3)",
                }}
            />

            <div className="z-10 text-center">
                <p className="text-5xl font-bold text-blue-300">{years}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    Years
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Experience
                </p>
            </div>
        </div>
    );
}

function InfoCard({
    icon,
    title,
    text,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <div className="rounded-2xl border border-blue-500/20 bg-slate-950/50 p-4 transition hover:-translate-y-1 hover:bg-blue-500/10">
            <div className="mb-3 text-2xl text-blue-400">
                {icon}
            </div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-xs text-slate-400">{text}</p>
        </div>
    );
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

function TechGroup({
    title,
    years,
    items,
}: {
    title: string;
    years: string;
    items: string[];
}) {
    return (
        <div className="grid grid-cols-[120px_90px_1fr] items-center gap-4 border-b border-blue-500/10 py-4 last:border-b-0">
            <h4 className="font-semibold text-white">{title}</h4>

            <span className="w-fit rounded-lg bg-blue-500/10 px-3 py-1 text-xs text-blue-300">
                {years}
            </span>

            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                    <span
                        key={item}
                        className="rounded-xl border border-blue-400/15 bg-slate-950/50 px-3 py-2 text-sm text-blue-100"
                    >
                        {item}
                    </span>
                ))}
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