import { FolderGit2 } from "lucide-react";
import { personalProjects } from "@/data/resume";

export default function PersonalProjectsSection() {
    return (
        <section className="mt-6 rounded-3xl border border-blue-400/10 bg-slate-950/40 p-6 shadow-[0_0_50px_rgba(59,130,246,0.08)] backdrop-blur-xl">
            <h3 className="mb-6 text-xl font-bold text-blue-300">Personal Projects</h3>

            <div className="grid gap-5 lg:grid-cols-3">
                {personalProjects.map((project) => (
                    <article
                        key={project.name}
                        className="rounded-2xl border border-blue-400/10 bg-blue-500/5 p-5"
                    >
                        <div className="mb-4 flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                <FolderGit2 size={19} />
                            </div>

                            <div className="min-w-0">
                                <h4 className="font-bold text-white">{project.name}</h4>
                                <p className="text-sm text-blue-300">{project.subtitle}</p>
                                <p className="mt-1 text-xs text-slate-400">{project.status}</p>
                            </div>
                        </div>

                        {project.technologies.length > 0 && (
                            <div className="mb-4 flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-lg border border-blue-400/15 bg-slate-950/50 px-2.5 py-1 text-xs text-blue-100"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        )}

                        <ul className="space-y-2 text-sm text-slate-300">
                            {project.highlights.map((highlight) => (
                                <li key={highlight} className="flex gap-2">
                                    <span className="shrink-0 text-blue-400">•</span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}