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
    Cloud,
    Cpu,
    Workflow,
    BriefcaseBusiness,
    Gauge,
} from "lucide-react";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiGo,
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiRedis,
    SiDocker,
    SiGit,
    SiPostman,
} from "react-icons/si";
import { profile } from "@/data/profile";
import { softSkills } from "@/data/skills";
import PageAnimation from "@/components/shared/PageAnimation";
import Card from "@/components/shared/Card";
import { useEffect, useState } from "react";
import type { GithubLearningProject } from "@/types/githubLearning";

const techCategories = [
    {
        title: "Frontend",
        items: [
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "React", icon: <SiReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "Node.js", icon: <SiNodedotjs /> },
            { name: "Express", icon: <SiExpress /> },
            { name: "Go", icon: <SiGo /> },
            { name: "REST APIs", icon: "API" },
        ],
    },
    {
        title: "Databases",
        items: [
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "Redis", icon: <SiRedis /> },
        ],
    },
    {
        title: "Cloud & Tools",
        items: [
            { name: "Docker", icon: <SiDocker /> },
            { name: "AWS", icon: <Cloud size={18} /> },
            { name: "Git", icon: <SiGit /> },
            { name: "Postman", icon: <SiPostman /> },
        ],
    },
];

const coreStack = [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Docker", icon: <SiDocker /> },
];

const softSkillsDetailed = [
    {
        title: "Problem Solving",
        description: "Breaking down complex issues and finding practical solutions.",
        icon: <Brain size={20} />,
    },
    {
        title: "Fast Learning",
        description: "Quickly adapting to new tools, domains and technical challenges.",
        icon: <Zap size={20} />,
    },
    {
        title: "Ownership",
        description: "Taking responsibility from analysis to delivery.",
        icon: <Target size={20} />,
    },
    {
        title: "Communication",
        description: "Clear collaboration with remote and international teams.",
        icon: <MessageSquare size={20} />,
    },
];

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

            <div className="grid gap-6 xl:grid-cols-[1.75fr_0.75fr]">
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

                    <div className="mt-5 flex flex-wrap gap-3">
                        {profile.badges.map((badge) => (
                            <span
                                key={badge}
                                className="rounded-full border border-blue-400/15 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-200"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {profile.impactMetrics.map((metric) => (
                            <div
                                key={metric.label}
                                className="rounded-2xl border border-blue-400/10 bg-blue-500/5 p-4"
                            >
                                <p className="text-2xl font-bold text-blue-300">
                                    {metric.value}
                                </p>

                                <p className="mt-1 text-sm font-semibold text-white">
                                    {metric.label}
                                </p>

                                <p className="mt-1 text-xs text-slate-400">
                                    {metric.detail}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-4">
                        <InfoCard
                            icon={<Cpu />}
                            title="Backend Engineering"
                            description="Building scalable backend services, REST APIs and business logic."
                        />

                        <InfoCard
                            icon={<Workflow />}
                            title="API Integrations"
                            description="Enterprise integrations between payroll, HR and third-party platforms."
                        />

                        <InfoCard
                            icon={<BriefcaseBusiness />}
                            title="Payroll Systems"
                            description="Employee lifecycle management, compensation and payroll workflows."
                        />

                        <InfoCard
                            icon={<Gauge />}
                            title="Performance Optimization"
                            description="Root cause analysis, troubleshooting and system improvements."
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

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.75fr_0.75fr]">
                <Card title="// Tech Stack">
                    <div className="mb-6">
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-300">
                            Core Stack
                        </h4>

                        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                            {coreStack.map((tech) => (
                                <TechIconCard
                                    key={tech.name}
                                    name={tech.name}
                                    icon={tech.icon}
                                    featured
                                />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-5">
                        {techCategories.map((category) => (
                            <div key={category.title}>
                                <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-300">
                                    {category.title}
                                </h4>

                                <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-4">
                                    {category.items.map((tech) => (
                                        <TechIconCard
                                            key={tech.name}
                                            name={tech.name}
                                            icon={tech.icon}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card title="// Soft Skills">
                    <div className="grid gap-4">
                        {softSkillsDetailed.map((skill) => (
                            <div
                                key={skill.title}
                                className="group flex items-start gap-4 rounded-2xl border border-blue-400/10 bg-blue-500/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-blue-500/10"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20 group-hover:text-blue-300">
                                    {skill.icon}
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white">{skill.title}</h4>
                                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                                        {skill.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </PageAnimation>
    );
}

function TechIconCard({
    name,
    icon,
    featured = false,
}: {
    name: string;
    icon: React.ReactNode;
    featured?: boolean;
}) {
    return (
        <div
            className={`group flex min-w-0 items-center gap-3 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 ${featured
                ? "border-blue-400/25 bg-blue-500/10 shadow-[0_0_22px_rgba(59,130,246,0.12)]"
                : "border-blue-400/10 bg-blue-500/5 hover:border-blue-400/30 hover:bg-blue-500/10"
                }`}
        >
            <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl transition ${featured
                    ? "bg-blue-500/20 text-blue-300"
                    : "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300"
                    }`}
            >
                {icon}
            </div>

            <span className="min-w-0 truncate text-sm font-medium text-slate-200">
                {name}
            </span>
        </div>
    );
}

function ExperienceBadge({ years }: { years: string }) {
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
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border border-blue-500/20 bg-slate-950/50 p-4 transition hover:-translate-y-1 hover:bg-blue-500/10">
            <div className="mb-3 text-2xl text-blue-400">
                {icon}
            </div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-xs text-slate-400">{description}</p>
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