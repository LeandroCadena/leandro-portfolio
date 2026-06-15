import { Brain, MessageSquare, Target, Zap } from "lucide-react";
import Card from "../shared/Card";

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

export default function SoftSkillsCard() {
    return (
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
    )
}