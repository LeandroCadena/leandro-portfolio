"use client";

import PageAnimation from "@/components/shared/PageAnimation";
import AboutHero from "./AboutHero";
import CurrentLearningCard from "./CurrentLearningCard";
import TechStackCard from "./TechStackCard";
import SoftSkillsCard from "./SoftSkillsCard";

export default function AboutSection() {
    return (
        <PageAnimation>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
                {"// About Me"}
            </p>

            <div className="grid gap-6 xl:grid-cols-[1.75fr_0.75fr]">
                <AboutHero />
                <CurrentLearningCard />
            </div>

            <div className="mt-6 grid gap-6 xl:grid-cols-[1.75fr_0.75fr]">
                <TechStackCard />
                <SoftSkillsCard />
            </div>
        </PageAnimation>
    );
}