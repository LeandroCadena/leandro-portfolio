import { Award, Gamepad2 } from "lucide-react";
import { certifications, creativeTraining } from "@/data/resume";

export default function CertificationsSection() {
    return (
        <div className="space-y-6">
            <section className="rounded-3xl border border-blue-400/10 bg-slate-950/40 p-6 shadow-[0_0_50px_rgba(59,130,246,0.08)] backdrop-blur-xl">
                <h3 className="mb-6 text-xl font-bold text-blue-300">
                    Courses & Certifications
                </h3>

                <div className="grid gap-3">
                    {certifications.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-start gap-3 rounded-2xl border border-blue-400/10 bg-blue-500/5 p-4"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                <Award size={18} />
                            </div>

                            <div>
                                <h4 className="font-semibold text-white">{item.name}</h4>
                                <p className="text-sm text-slate-400">
                                    {item.provider} · {item.status}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-3xl border border-blue-400/10 bg-slate-950/40 p-6 shadow-[0_0_50px_rgba(59,130,246,0.08)] backdrop-blur-xl">
                <h3 className="mb-6 text-xl font-bold text-blue-300">
                    Game Development & 3D Design
                </h3>

                <div className="grid gap-3">
                    {creativeTraining.map((item) => (
                        <div
                            key={item}
                            className="flex items-center gap-3 rounded-2xl border border-blue-400/10 bg-blue-500/5 p-4"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                <Gamepad2 size={18} />
                            </div>

                            <span className="text-sm text-slate-200">{item}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}