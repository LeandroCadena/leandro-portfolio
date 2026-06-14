import PageAnimation from "@/components/shared/PageAnimation";
import Card from "@/components/shared/Card";

export default function ProjectsSection() {
    return (
        <PageAnimation>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-blue-400">
        // Projects
            </p>

            <Card title="GitHub Projects">
                <p className="text-slate-300">
                    GitHub integration coming soon.
                </p>
            </Card>
        </PageAnimation>
    );
}