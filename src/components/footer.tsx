"use client";

import { Footer } from "nextra-theme-docs";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Anchor } from "nextra/components";
import React, { useState, useEffect } from "react";

export default function CustomFooter() {
    const year = new Date().getFullYear();
    const github = "https://github.com/dipakrathod-tech";
    const linkedin = "https://www.linkedin.com/in/dipakrathod-tech";
    const email = "diapkrathod.tech@gmail.com";
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        let t: ReturnType<typeof setTimeout> | undefined;
        if (copied) t = setTimeout(() => setCopied(false), 2000);
        return () => t && clearTimeout(t);
    }, [copied]);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
        } catch (e) {
            // fallback: select and prompt (rare in modern browsers)
            console.error("Copy failed", e);
        }
    };

    return (
        <Footer>
            <div className="w-full flex items-center justify-between gap-4">
                <div className="text-sm text-muted-foreground">{year} © Dipak Rathod.</div>

                        <div className="flex items-center gap-4">
                            <Anchor
                                href={github}
                                className="text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                                aria-label="Dipak Rathod on GitHub"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub — dipakrathod-tech"
                            >
                                <FaGithub className="h-5 w-5" />
                            </Anchor>

                            <Anchor
                                href={linkedin}
                                className="text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                                aria-label="Dipak Rathod on LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn — dipakrathod-tech"
                            >
                                <FaLinkedin className="h-5 w-5" />
                            </Anchor>

                            {/* Email: copy to clipboard */}
                            <button
                                type="button"
                                onClick={copyEmail}
                                aria-label="Copy email address"
                                title="Copy email"
                                className="relative text-muted-foreground hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                            >
                                <FaEnvelope className="h-5 w-5" />

                                {/* Transient tooltip */}
                                <span
                                    className={`absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900/95 text-white text-xs px-2 py-1 transition-opacity ${copied ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                                >
                                    Copied!
                                </span>
                            </button>

                            {/* Accessible live region for screen readers */}
                            <div aria-live="polite" className="sr-only">
                                {copied ? "Email copied to clipboard" : ""}
                            </div>
                </div>
            </div>
        </Footer>
    );
}
