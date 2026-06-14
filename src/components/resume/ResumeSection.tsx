import { Download } from "lucide-react";
import PageAnimation from "@/components/shared/PageAnimation";
import Card from "@/components/shared/Card";

export default function ResumeSection() {
    return (
        <PageAnimation>
            <div className="mb-6 flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
          // Resume
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
                <p className="text-slate-300">
                    Resume section coming soon.
                </p>
            </Card>
        </PageAnimation>
    );
}