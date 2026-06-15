import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/resume";

export default function ExperienceTimeline() {
    return (
        <section className="rounded-3xl border border-blue-400/10 bg-slate-950/40 p-6 shadow-[0_0_50px_rgba(59,130,246,0.08)] backdrop-blur-xl">
            <h3 className="mb-8 text-xl font-bold text-blue-300">
                Professional Experience
            </h3>

            <div className="relative space-y-8 border-l border-blue-500/30 pl-8">
                {experience.map((item) => (
                    <article key={item.company} className="relative">
                        <span className="absolute -left-[43px] flex h-7 w-7 items-center justify-center rounded-full border border-blue-400/40 bg-slate-950 text-blue-400 shadow-[0_0_18px_rgba(59,130,246,0.35)]">
                            <BriefcaseBusiness size={14} />
                        </span>

                        <div className="rounded-2xl border border-blue-400/10 bg-blue-500/5 p-5">
                            <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <h4 className="text-xl font-bold text-white">{item.role}</h4>
                                    <p className="text-blue-300">
                                        {item.company}{" "}
                                        <span className="text-slate-400">({item.subtitle})</span>
                                    </p>
                                </div>

                                <span className="w-fit rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                                    {item.period}
                                </span>
                            </div>

                            <div className="mb-4 flex flex-wrap gap-2">
                                {item.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-lg border border-blue-400/15 bg-slate-950/50 px-3 py-1 text-xs text-blue-100"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <ul className="space-y-2 text-sm text-slate-300">
                                {item.highlights.map((highlight) => (
                                    <li key={highlight}>• {highlight}</li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}