import { GraduationCap } from "lucide-react";
import { education } from "@/data/resume";

export default function EducationSection() {
    return (
        <section className="rounded-3xl border border-blue-400/10 bg-slate-950/40 p-6 shadow-[0_0_50px_rgba(59,130,246,0.08)] backdrop-blur-xl">
            <h3 className="mb-6 text-xl font-bold text-blue-300">Education</h3>

            <div className="space-y-5">
                {education.map((item) => (
                    <article
                        key={item.institution}
                        className="rounded-2xl border border-blue-400/10 bg-blue-500/5 p-5"
                    >
                        <div className="mb-3 flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                <GraduationCap size={20} />
                            </div>

                            <div>
                                <h4 className="font-bold text-white">{item.institution}</h4>
                                <p className="text-sm text-blue-300">{item.degree}</p>
                                <p className="text-xs text-slate-400">{item.period}</p>
                            </div>
                        </div>

                        <ul className="space-y-2 text-sm text-slate-300">
                            {item.highlights.map((highlight) => (
                                <li key={highlight}>• {highlight}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}