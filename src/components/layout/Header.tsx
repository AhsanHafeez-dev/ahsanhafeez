"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { userData } from "@/lib/data";

export default function Header() {
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/#work" },
        { name: "Tech Stack", href: "/#tech" },
        { name: "Contact", href: "/#contact" }
    ];

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800/50 px-6 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md transition-all duration-300">
            <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                <Link href="/" className="flex flex-row items-center gap-4">
                    <div className="size-6 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined !text-2xl">code</span>
                    </div>
                    <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">DevPortfolio</h2>
                </Link>
            </div>

            <div className="flex flex-1 justify-end gap-8">
                <nav className="hidden md:flex items-center gap-9">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium leading-normal transition-colors ${pathname === link.href
                                    ? "text-primary"
                                    : "text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <a
                    href={userData.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary hover:bg-primary/90 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-[0_0_15px_rgba(25,93,230,0.5)]"
                >
                    <span className="truncate">Resume</span>
                </a>
            </div>
        </header>
    );
}
