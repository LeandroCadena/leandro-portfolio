import { Download } from "lucide-react";
import PageAnimation from "@/components/shared/PageAnimation";
import ExperienceTimeline from "@/components/resume/ExperienceTimeline";
import EducationSection from "@/components/resume/EducationSection";
import CertificationsSection from "@/components/resume/CertificationsSection";

export default function ResumeSection() {
    return (
        <PageAnimation>
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                        {"// Resume"}
                    </p>

                    <h2 className="mt-3 text-3xl font-bold text-white">
                        Professional Journey
                    </h2>
                </div>

                <a
                    href="/Leandro_Cadena_Resume.pdf"
                    target="_blank"
                    className="flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-500"
                >
                    <Download size={16} />
                    Download Resume
                </a>
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.35fr_1fr]">
                <ExperienceTimeline />

                <div className="space-y-6">
                    <EducationSection />
                    <CertificationsSection />
                </div>
            </div>
        </PageAnimation>
    );
}