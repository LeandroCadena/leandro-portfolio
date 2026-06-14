"use client";

import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import PageAnimation from "@/components/shared/PageAnimation";
import Card from "@/components/shared/Card";

export default function AboutSection() {
    return (
        <PageAnimation>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
        // About Me
            </p>

            <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                <div className="rounded-3xl border border-blue-400/10 bg-slate-950/40 p-8 shadow-[0_0_50px_rgba(59,130,246,0.08)] backdrop-blur-xl">
                    <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 className="mb-3 text-4xl font-bold">
                                Hi, I&apos;m Leandro Cadena
                            </h2>
                            <p className="text-xl text-blue-400">Full Stack Developer</p>
                        </div>

                        <ExperienceBadge />
                    </div>

                    <p className="max-w-3xl text-slate-300">
                        I&apos;m a Full Stack Developer from Argentina with experience
                        building enterprise applications, backend services, APIs and
                        integrations. I enjoy solving complex problems, improving
                        performance and learning new technologies.
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-4">
                        <InfoCard icon={<FaLinkedin />} title="LinkedIn" text="Connect with me" />
                        <InfoCard icon={<FaGithub />} title="GitHub" text="View my code" />
                        <InfoCard icon={<Mail />} title="Email" text="Send a message" />
                        <InfoCard icon={<MapPin />} title="Location" text="Argentina" />
                    </div>
                </div>

                <Card title="// Currently Learning">
                    <LearningItem title="Technology" value="Next.js + Advanced UI" />
                    <LearningItem title="Current Project" value="Personal Portfolio" />
                    <LearningItem title="Progress Time" value="In progress" />
                    <LearningItem title="Course / Resource" value="Self-learning + Practice" />
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
                        {[
                            "Problem Solving",
                            "Fast Learning",
                            "Ownership",
                            "Communication",
                            "Remote Collaboration",
                            "Attention to Detail",
                            "Adaptability",
                            "Teamwork",
                        ].map((skill) => (
                            <div
                                key={skill}
                                className="flex items-center gap-3 rounded-2xl border border-blue-400/10 bg-blue-500/5 p-4 text-sm text-slate-200 transition hover:bg-blue-500/10"
                            >
                                <div className="h-10 w-10 rounded-lg bg-blue-500/10" />
                                {skill}
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </PageAnimation>
    );
}

function ExperienceBadge() {
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
                <p className="text-5xl font-bold text-blue-300">5</p>
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
            <div className="mb-3 text-blue-400">{icon}</div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-xs text-slate-400">{text}</p>
        </div>
    );
}

function LearningItem({
    title,
    value,
}: {
    title: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-4 border-b border-blue-500/10 py-5 last:border-b-0">
            <div className="h-14 w-14 rounded-xl bg-blue-500/10" />
            <div>
                <p className="text-sm text-slate-400">{title}</p>
                <p className="text-lg font-semibold">{value}</p>
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