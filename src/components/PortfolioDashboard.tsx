"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import AboutSection from "@/components/about/AboutSection";
import ResumeSection from "@/components/resume/ResumeSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import type { Tab } from "@/types/navigation";

export default function PortfolioDashboard() {
    const [activeTab, setActiveTab] = useState<Tab>("about");

    return (
        <main className="min-h-screen text-white">
            <div className="aurora" />

            <div className="flex min-h-screen flex-col lg:flex-row">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

                <section className="flex-1 overflow-hidden p-4 sm:p-6 lg:p-8">
                    {activeTab === "about" && <AboutSection />}
                    {activeTab === "resume" && <ResumeSection />}
                    {activeTab === "projects" && <ProjectsSection />}
                </section>
            </div>
        </main>
    );
}