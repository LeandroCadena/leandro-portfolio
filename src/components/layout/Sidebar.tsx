"use client";

import Image from "next/image";
import { FileText, FolderGit2, Mail, MapPin, User } from "lucide-react";
import {
    FaGithub,
    FaLinkedin,
} from "@/components/shared/icons";
import type { Tab } from "@/types/navigation";
import { profile } from "@/data/profile";
import { useState } from "react";

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
    const [emailCopied, setEmailCopied] = useState(false);

    async function handleCopyEmail() {
        await navigator.clipboard.writeText(profile.email);

        setEmailCopied(true);

        setTimeout(() => {
            setEmailCopied(false);
        }, 1800);
    }
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

            <nav className="space-y-4">
                {tabs.map((tab) => {
                    const Icon = tab.icon;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-2xl px-5 py-4 text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                                ? "border border-blue-400/30 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_0_25px_rgba(37,99,235,0.45)]"
                                : "border border-transparent text-slate-300 hover:border-blue-400/20 hover:bg-blue-500/10 hover:text-white"
                                }`}
                        >
                            {activeTab === tab.id && (
                                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
                            )}

                            <span
                                className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-xl transition ${activeTab === tab.id
                                    ? "bg-white/15 text-white"
                                    : "bg-white/5 text-slate-400 group-hover:bg-blue-500/15 group-hover:text-blue-300"
                                    }`}
                            >
                                <Icon size={17} />
                            </span>

                            <span className="relative z-10">{tab.label}</span>

                            {activeTab === tab.id && (
                                <span className="absolute right-4 h-2 w-2 rounded-full bg-blue-200 shadow-[0_0_12px_rgba(191,219,254,0.9)]" />
                            )}
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
                        aria-label="GitHub"
                        className="rounded-lg bg-white/5 p-3 transition hover:bg-blue-500/20"
                    >
                        <FaGithub size={18} />
                    </a>

                    <a
                        href={profile.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="rounded-lg bg-white/5 p-3 transition hover:bg-blue-500/20"
                    >
                        <FaLinkedin size={18} />
                    </a>

                    <button
                        type="button"
                        onClick={handleCopyEmail}
                        aria-label="Copy email"
                        className={`flex h-11 w-11 items-center justify-center rounded-lg transition ${emailCopied
                            ? "bg-emerald-500/20 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                            : "bg-white/5 hover:bg-blue-500/20"
                            }`}
                    >
                        {emailCopied ? (
                            <span className="text-[10px] font-bold">Copied!</span>
                        ) : (
                            <Mail size={18} />
                        )}
                    </button>
                </div>
            </div>
        </aside>
    );
}