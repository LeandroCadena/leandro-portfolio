import { Download, ExternalLink } from "lucide-react";
import PageAnimation from "@/components/shared/PageAnimation";
import Card from "@/components/shared/Card";
import { experience } from "@/data/experience";

export default function ResumeSection() {
    return (
        <PageAnimation>
            <div className="mb-6 flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                    {"// Resume"}
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
                <div className="space-y-5">
                    {experience.map((item) => (
                        <div
                            key={`${item.company}-${item.role}`}
                            className="rounded-2xl border border-blue-400/10 bg-blue-500/5 p-5"
                        >
                            <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <h3 className="text-xl font-bold">{item.role}</h3>

                                    <a
                                        href={item.companyUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-1 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                                    >
                                        {item.company}
                                        <ExternalLink size={14} />
                                    </a>
                                </div>

                                <span className="rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-300">
                                    {item.period}
                                </span>
                            </div>

                            <p className="mb-4 text-sm text-slate-300">
                                {item.description}
                            </p>

                            <ul className="space-y-2 text-sm text-slate-400">
                                {item.highlights.map((highlight) => (
                                    <li key={highlight}>• {highlight}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Card>
        </PageAnimation>
    );
}