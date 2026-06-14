"use client";

import Image from "next/image";
import { FileText, FolderGit2, Mail, MapPin, User } from "lucide-react";
import {
    FaGithub,
    FaLinkedin,
} from "@/components/shared/icons";
import type { Tab } from "@/types/navigation";
import { profile } from "@/data/profile";

type SidebarProps = {
    activeTab: Tab;
    setActiveTab: (tab: Tab) => void;
};

const tabs = [
    { id: "about" as Tab, label: "About Me", icon: User },
    { id: "resume" as Tab, label: "Resume", icon: FileText },
    { id: "projects" as Tab, label: "Projects", icon: FolderGit2 },
];

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
    return (
        <aside className="w-72 border-r border-blue-500/20 bg-[#020817]/80 p-6 backdrop-blur-xl">
            <div className="mb-8 text-center">
                <div className="relative mx-auto mb-3 h-32 w-32 overflow-hidden rounded-full border border-blue-400/40 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <Image
                        src="/profile.png"
                        alt="Leandro Cadena"
                        fill
                        priority
                        className="object-cover object-[50%_30%]"
                    />
                </div>

                <h1 className="mt-2 text-3xl font-bold">{profile.name}</h1>
                <p className="mt-1 text-base text-blue-400">{profile.title}</p>
            </div>

            <nav className="space-y-3">
                {tabs.map((tab) => {
                    const Icon = tab.icon;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${activeTab === tab.id
                                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/40"
                                : "text-slate-300 hover:bg-blue-500/10 hover:text-white"
                                }`}
                        >
                            <Icon size={18} />
                            {tab.label}
                        </button>
                    );
                })}
            </nav>

            <div className="mt-10 border-t border-blue-500/20 pt-6 text-sm text-slate-300">
                <p className="mb-4 flex items-center gap-2">
                    <Mail size={16} /> {profile.email}
                </p>

                <p className="mb-4 flex items-center gap-2">
                    <MapPin size={16} /> {profile.location}
                </p>

                <div className="mt-6 flex gap-3">
                    <a
                        href={profile.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-white/5 p-3 transition hover:bg-blue-500/20"
                    >
                        <FaGithub size={18} />
                    </a>

                    <a
                        href={profile.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-white/5 p-3 transition hover:bg-blue-500/20"
                    >
                        <FaLinkedin size={18} />
                    </a>

                    <a
                        href={profile.links.email}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-white/5 p-3 transition hover:bg-blue-500/20"
                    >
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </aside>
    );
}