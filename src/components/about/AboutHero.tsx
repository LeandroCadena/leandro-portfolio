import { BriefcaseBusiness, Cpu, Gauge, Workflow } from "lucide-react";
import { profile } from "@/data/profile";
import ExperienceBadge from "@/components/about/ExperienceBadge";
import ExpertiseCard from "@/components/about/ExpertiseCard";

export default function AboutHero() {
    return (
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
                <ExpertiseCard
                    icon={<Cpu />}
                    title="Backend Engineering"
                    description="Building scalable backend services, REST APIs and business logic."
                />

                <ExpertiseCard
                    icon={<Workflow />}
                    title="API Integrations"
                    description="Enterprise integrations between payroll, HR and third-party platforms."
                />

                <ExpertiseCard
                    icon={<BriefcaseBusiness />}
                    title="Payroll Systems"
                    description="Employee lifecycle management, compensation and payroll workflows."
                />

                <ExpertiseCard
                    icon={<Gauge />}
                    title="Performance Optimization"
                    description="Root cause analysis, troubleshooting and system improvements."
                />
            </div>
        </div>
    );
}