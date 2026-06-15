export default function ExpertiseCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border border-blue-500/20 bg-slate-950/50 p-4 transition hover:-translate-y-1 hover:bg-blue-500/10">
            <div className="mb-3 text-2xl text-blue-400">{icon}</div>

            <div className="mb-2 flex flex-wrap items-center gap-2">
                <h3 className="font-semibold">{title}</h3>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
                {description}
            </p>
        </div>
    );
}