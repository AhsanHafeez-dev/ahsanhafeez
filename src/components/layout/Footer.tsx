"use client";

import { useState } from "react";
import { userData } from "@/lib/data";

export default function Footer() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message.");
            }

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });

            // Reset success status after 3 seconds
            setTimeout(() => setStatus("idle"), 3000);
        } catch (error: any) {
            console.error(error);
            setStatus("error");
            setErrorMessage(error.message || "An unexpected error occurred.");
        }
    };

    return (
        <footer className="mt-12 rounded-t-2xl bg-slate-900 border-t border-slate-800 p-8 md:p-16 relative overflow-hidden" id="contact">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let&apos;s build something together.</h2>
                    <p className="text-slate-400 text-lg mb-8 max-w-md">Have a project in mind or looking for a developer to join your team? I&apos;m currently open to new opportunities.</p>
                    <div className="flex flex-col gap-4">
                        <a href={`mailto:${userData.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-primary">mail</span>
                            {userData.email}
                        </a>
                        <a href={userData.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-primary">link</span>
                            LinkedIn
                        </a>
                        <a href={userData.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-primary">code</span>
                            GitHub
                        </a>
                    </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-slate-700/50">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={userData.name}
                                required
                                className="rounded-lg bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-primary focus:ring-primary h-11 px-3 disabled:opacity-50"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                                className="rounded-lg bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-primary focus:ring-primary h-11 px-3 disabled:opacity-50"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5 mb-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                required
                                className="rounded-lg bg-slate-900/50 border-slate-700 text-white placeholder-slate-500 focus:border-primary focus:ring-primary resize-none p-3 disabled:opacity-50"
                            ></textarea>
                        </div>

                        {status === "error" && (
                            <div className="text-red-400 text-sm">{errorMessage}</div>
                        )}

                        {status === "success" && (
                            <div className="text-green-400 text-sm">Message sent successfully! I will get back to you soon.</div>
                        )}

                        <button
                            type="submit"
                            disabled={status === "loading" || status === "success"}
                            className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all w-full mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                © {new Date().getFullYear()} {userData.name}. All rights reserved.
            </div>
        </footer>
    );
}
