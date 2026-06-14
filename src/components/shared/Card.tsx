export default function Card({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="rounded-3xl border border-blue-400/10 bg-slate-950/40 p-6 shadow-[0_0_50px_rgba(59,130,246,0.08)] backdrop-blur-xl">
            <h3 className="mb-5 font-semibold text-blue-300">{title}</h3>
            {children}
        </div>
    );
}