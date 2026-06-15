export default function ExperienceBadge({ years }: { years: string }) {
    return (
        <div className="relative flex h-36 w-36 shrink-0 items-center justify-center">
            <div
                className="absolute inset-0"
                style={{
                    clipPath:
                        "polygon(25% 5%,75% 5%,95% 50%,75% 95%,25% 95%,5% 50%)",
                    border: "2px solid rgba(59,130,246,.5)",
                    background:
                        "linear-gradient(to bottom, rgba(59,130,246,.15), rgba(59,130,246,.05))",
                    boxShadow: "0 0 25px rgba(59,130,246,.3)",
                }}
            />

            <div className="z-10 text-center">
                <p className="text-5xl font-bold text-blue-300">{years}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    Years
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Experience
                </p>
            </div>
        </div>
    );
}