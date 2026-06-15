import { SiDocker, SiExpress, SiGit, SiGo, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPostman, SiReact, SiRedis, SiTypescript } from "react-icons/si";
import Card from "../shared/Card";
import { Cloud } from "lucide-react";

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

export default function TechStackCard() {
    return (
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
    )
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