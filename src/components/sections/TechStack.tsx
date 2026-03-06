import { skillCategories } from "@/lib/data";

// Extracted from original design
// adding python langchain flask spring boot  express prisma etc
const topTech = [
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "code_blocks" },
    { name: "React", icon: "webhook" },
    { name: "Node.js", icon: "terminal" },
    { name: "PostgreSQL", icon: "database" },
    { name: "Tailwind", icon: "palette" },
    { name: "Python", icon: "code" },
    { name: "LangChain", icon: "code" },
    { name: "Flask", icon: "code" },
    { name: "Spring Boot", icon: "code" },
    { name: "Express", icon: "code" },
    { name: "Prisma", icon: "code" },
];

export default function TechStack() {
    return (
        <section id="tech" className="flex flex-col gap-8 py-12">
            <div className="text-center mb-4">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white mb-4">
                    Technologies I Work With
                </h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    A selection of my favorite tools and technologies for building scalable applications.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {topTech.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 dark:hover:border-primary/50 transition-colors group">
                        <span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary mb-3 transition-colors">{tech.icon}</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
