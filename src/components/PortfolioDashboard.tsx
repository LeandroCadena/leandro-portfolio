"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import {
    User,
    FileText,
    FolderGit2,
    Mail,
    MapPin,
    Download,
    ExternalLink,
} from "lucide-react";

type Tab = "about" | "resume" | "projects";

export default function PortfolioDashboard() {
    const [activeTab, setActiveTab] = useState<Tab>("about");

    const tabs = [
        { id: "about" as Tab, label: "About Me", icon: User },
        { id: "resume" as Tab, label: "Resume", icon: FileText },
        { id: "projects" as Tab, label: "Projects", icon: FolderGit2 },
    ];

    return (
        <main className="min-h-screen text-white">
            <div className="aurora" />
            <div className="flex min-h-screen">
                <aside className="w-72 border-r border-blue-500/20 bg-[#020817] p-6">
                    <div className="mb-10 text-center">
                        <div className="relative mx-auto mb-3 h-32 w-32 overflow-hidden rounded-full border border-blue-400/40 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                            <Image
                                src="/profile.png"
                                alt="Leandro Cadena"
                                fill
                                priority
                                className="object-cover object-[50%_25%]"
                            />

                            <div className="absolute inset-0 rounded-full ring-2 ring-blue-500/20" />

                            <div className="absolute -bottom-2 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-blue-500 blur-xl" />
                        </div>
                        <h1 className="mt-2 text-3xl font-bold">Leandro Cadena</h1>
                        <p className="mt-1 text-base text-blue-400">Full Stack Developer</p>
                    </div>

                    <nav className="space-y-3">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;

                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${activeTab === tab.id
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                                        : "text-slate-300 hover:bg-blue-500/10 hover:text-white"
                                        }`}
                                >
                                    <Icon size={18} />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </nav>

                    <div className="mt-10 border-t border-blue-500/20 pt-6 text-sm text-slate-300">
                        <p className="mb-4 flex items-center gap-2">
                            <Mail size={16} /> leandro.cadena.dev@gmail.com
                        </p>
                        <p className="mb-4 flex items-center gap-2">
                            <MapPin size={16} /> Argentina
                        </p>

                        <div className="mt-6 flex gap-3">
                            <a className="rounded-lg bg-white/5 p-3 hover:bg-blue-500/20">
                                <FaGithub size={18} />
                            </a>
                            <a className="rounded-lg bg-white/5 p-3 hover:bg-blue-500/20">
                                <FaLinkedin size={18} />
                            </a>
                            <a className="rounded-lg bg-white/5 p-3 hover:bg-blue-500/20">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                </aside>

                <section className="flex-1 overflow-hidden p-8">
                    <AnimatePresence mode="wait">
                        {activeTab === "about" && <AboutSection />}
                        {activeTab === "resume" && <ResumeSection />}
                        {activeTab === "projects" && <ProjectsSection />}
                    </AnimatePresence>
                </section>
            </div>
        </main>
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
        <div className="flex items-center gap-4 border-b border-blue-500/10 py-5">
            <div className="h-14 w-14 rounded-xl bg-blue-500/10" />

            <div>
                <p className="text-sm text-slate-400">
                    {title}
                </p>

                <p className="text-xl font-semibold">
                    {value}
                </p>
            </div>
        </div>
    );
}

function PageAnimation({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="h-full"
        >
            {children}
        </motion.div>
    );
}

function AboutSection() {
    return (
        <PageAnimation>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
        // About Me
            </p>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                {/* Main intro */}
                <div className="rounded-3xl border border-blue-400/10 bg-slate-950/40 p-8 shadow-[0_0_50px_rgba(59,130,246,0.08)] backdrop-blur-xl">
                    <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                        <div>
                            <h2 className="mb-3 text-4xl font-bold">
                                Hi, I&apos;m Leandro Cadena
                            </h2>

                            <p className="text-xl text-blue-400">
                                Full Stack Developer
                            </p>
                        </div>

                        <div className="relative flex h-40 w-40 items-center justify-center">
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
                                <p className="text-5xl font-bold text-blue-300">
                                    5
                                </p>

                                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                                    Years
                                </p>

                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                    Experience
                                </p>
                            </div>
                        </div>
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

                {/* Currently learning */}
                <div className="rounded-3xl border border-blue-400/10 bg-slate-950/40 p-8 shadow-[0_0_50px_rgba(59,130,246,0.08)] backdrop-blur-xl">
                    <h3 className="mb-5 text-lg font-semibold text-blue-300">
            // Currently Learning
                    </h3>

                    <LearningItem
                        title="Technology"
                        value="Next.js + Advanced UI"
                    />

                    <LearningItem
                        title="Current Project"
                        value="Personal Portfolio"
                    />

                    <LearningItem
                        title="Progress Time"
                        value="In progress"
                    />

                    <LearningItem
                        title="Course / Resource"
                        value="Self-learning + Practice"
                    />
                </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {/* Tech Stack */}
                <Card title="// Tech Stack">
                    <div className="space-y-6">
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
                            title="Learning / Improving"
                            years="Currently"
                            items={["Next.js", "Framer Motion", "System Design", "Cloud Architecture"]}
                        />
                    </div>
                </Card>

                {/* Soft Skills */}
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
                                className="
flex
items-center
gap-3
rounded-2xl
border
border-blue-400/10
bg-blue-500/5
p-4
hover:bg-blue-500/10
transition
border border-blue-400 /10 bg - blue - 500 / 10 px - 4 py - 3 text - sm text - slate - 200"
                            >
                                <div className="h-10 w-10 rounded-lg bg-blue-500/10" />{skill}
                            </div>
                        ))}
                    </div>
                </Card>
            </div >
        </PageAnimation >
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
        <div className="grid grid-cols-[140px_100px_1fr] items-center gap-4 border-b border-blue-500/10 py-4 last:border-b-0">
            <h4 className="font-semibold text-white">{title}</h4>

            <span className="w-fit rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                {years}
            </span>

            <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                    <span
                        key={item}
                        className="rounded-xl border border-blue-400/15 bg-slate-950/50 px-4 py-2 text-sm text-blue-100"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ResumeSection() {
    return (
        <PageAnimation>
            <div className="mb-6 flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          // Resume
                </p>

                <a
                    href="/cv.pdf"
                    target="_blank"
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-500"
                >
                    <Download size={16} />
                    Download Resume
                </a>
            </div>

            <Card title="Professional Experience">
                <div className="space-y-6">
                    <ExperienceItem
                        role="Senior Full Stack Developer"
                        company="ITBA"
                        date="Jan 2023 - Present"
                        description="Develop and maintain scalable applications and APIs. Work with backend integrations, cloud services and enterprise systems."
                    />

                    <ExperienceItem
                        role="Full Stack Developer"
                        company="Nubiral"
                        date="Jun 2021 - Dec 2022"
                        description="Built web applications using React, Node.js and PostgreSQL. Improved performance and implemented new features."
                    />

                    <ExperienceItem
                        role="Web Developer"
                        company="Freelance"
                        date="Jan 2020 - May 2021"
                        description="Created custom websites and applications for clients using modern frontend and backend technologies."
                    />
                </div>
            </Card>
        </PageAnimation>
    );
}

function ProjectsSection() {
    const projects = [
        {
            title: "Task Manager App",
            description:
                "Full stack task management application with authentication, real-time updates and drag & drop.",
            stack: ["React", "Node.js", "MongoDB"],
        },
        {
            title: "E-commerce API",
            description:
                "RESTful API with authentication, payments, order management and PostgreSQL persistence.",
            stack: ["Node.js", "Express", "PostgreSQL"],
        },
    ];

    return (
        <PageAnimation>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-blue-400">
        // Projects
            </p>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        whileHover={{
                            y: -10,
                            scale: 1.03,
                            rotateX: 2,
                            rotateY: 2,
                        }}
                        className="rounded-3xl
border border-blue-400/10
bg-slate-950/40
backdrop-blur-xl
shadow-[0_0_50px_rgba(59,130,246,0.08)] bg-white/[0.03] p-6 shadow-xl shadow-blue-950/30"
                    >
                        <div className="mb-5 h-40 rounded-2xl border border-blue-400/20 bg-blue-500/10" />

                        <h3 className="mb-3 text-xl font-bold">{project.title}</h3>

                        <p className="mb-5 text-sm text-slate-300">{project.description}</p>

                        <div className="mb-5 flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-lg bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 text-sm text-blue-300">
                            <a className="flex items-center gap-1 hover:text-blue-100">
                                Live Demo <ExternalLink size={14} />
                            </a>
                            <a className="flex items-center gap-1 hover:text-blue-100">
                                GitHub <FaGithub size={14} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </PageAnimation>
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
        <motion.div
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-blue-500/20 bg-slate-950/50 p-4"
        >
            <div className="mb-3 text-blue-400">{icon}</div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-xs text-slate-400">{text}</p>
        </motion.div>
    );
}

function Card({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="rounded-3xl
border border-blue-400/10
bg-slate-950/40
backdrop-blur-xl
shadow-[0_0_50px_rgba(59,130,246,0.08)] bg-white/[0.03] p-6 shadow-xl shadow-blue-950/30">
            <h3 className="mb-5 font-semibold text-blue-300">{title}</h3>
            {children}
        </div>
    );
}

function ExperienceItem({
    role,
    company,
    date,
    description,
}: {
    role: string;
    company: string;
    date: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border border-blue-500/20 bg-slate-950/40 p-5">
            <div className="mb-2 flex justify-between gap-4">
                <div>
                    <h3 className="font-bold">{role}</h3>
                    <p className="text-blue-400">{company}</p>
                </div>
                <p className="text-sm text-slate-400">{date}</p>
            </div>

            <p className="text-sm text-slate-300">{description}</p>
        </div>
    );
}