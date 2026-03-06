import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const project = projects.find(p => p.id === parseInt(resolvedParams.id));

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-1 w-full max-w-7xl mx-auto">
            {/* Sidebar Navigation */}
            <aside className="hidden md:flex w-64 flex-col gap-8 py-10 pr-8 sticky top-20 h-[calc(100vh-80px)] border-r border-slate-200 dark:border-surface-hover">
                <div className="flex flex-col gap-1">
                    <a href="#overview" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary transition-colors group">
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">dashboard</span>
                        <span className="text-sm font-semibold">Overview</span>
                    </a>
                    <a href="#challenge" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-hover transition-colors group text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">target</span>
                        <span className="text-sm font-medium">The Challenge</span>
                    </a>
                    <a href="#solution" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-hover transition-colors group text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">lightbulb</span>
                        <span className="text-sm font-medium">The Solution</span>
                    </a>
                    <a href="#tech" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-hover transition-colors group text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
                        <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">code</span>
                        <span className="text-sm font-medium">Tech Used</span>
                    </a>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0 pb-20">
                <div className="p-4 sm:p-6 lg:p-8" id="overview">
                    <div
                        className="relative flex min-h-[400px] md:min-h-[500px] w-full flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-2xl items-start justify-end p-8 md:p-12 overflow-hidden"
                        style={{ backgroundImage: `linear-gradient(rgba(17, 22, 33, 0.4) 0%, rgba(17, 22, 33, 0.9) 100%), url("${project.image}")` }}
                    >
                        <div className="relative z-10 flex flex-col gap-4 max-w-3xl">
                            <div className="flex gap-2">
                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-white backdrop-blur-sm border border-primary/30">{project.category}</span>
                            </div>

                            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight">
                                {project.title}
                            </h1>

                            <p className="text-slate-200 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-4 mt-4">
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 px-6 items-center justify-center rounded-lg bg-primary hover:bg-primary/90 text-white text-base font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5">
                                        <span className="material-symbols-outlined mr-2">open_in_new</span>
                                        Live Demo
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 px-6 items-center justify-center rounded-lg bg-surface-dark/80 hover:bg-surface-hover text-white text-base font-bold transition-all backdrop-blur-sm border border-slate-600 hover:-translate-y-0.5 mt-2 sm:mt-0">
                                        <span className="material-symbols-outlined mr-2">code_blocks</span>
                                        View Source
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-4 sm:px-6 lg:px-8 flex flex-col gap-16 max-w-4xl mx-auto lg:mx-0">
                    <section className="scroll-mt-24 pt-8" id="challenge">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">target</span>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">The Challenge</h2>
                        </div>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-lg leading-relaxed space-y-6">
                            <p>
                                Developing a comprehensive solution that meets modern user expectations while maintaining high performance.
                                The project required careful architectural planning to handle scalable requirements and ensure a seamless user experience.
                            </p>
                            <p>
                                As part of the {project.category} domain, {project.title} needed to address fundamental inefficiencies in traditional workflows through intelligent automation and intuitive design.
                            </p>
                        </div>
                    </section>

                    <section className="scroll-mt-24" id="solution">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">lightbulb</span>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">The Solution</h2>
                        </div>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-lg leading-relaxed space-y-6">
                            <p>
                                We implemented a tailored tech stack choosing the most efficient tools for the job. By leveraging {project.technologies.slice(0, 2).join(" and ")}, the backbone of the application was fortified.
                            </p>
                            <ul className="list-none space-y-4 mt-6">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span><strong>Optimized Architecture:</strong> Designed to minimize latency and improve overall structural integrity.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span><strong>Modern Integration:</strong> Utilized the latest APIs for secure and rapid data transfer.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                    <span><strong>Seamless UX:</strong> Adopted a mobile-first responsive approach prioritizing accessibility.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="scroll-mt-24" id="tech">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">code</span>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {project.technologies.map((tech) => (
                                <div key={tech} className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-surface-dark/50 border border-slate-200 dark:border-surface-hover hover:border-primary/50 transition-colors group cursor-pointer text-center">
                                    <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-surface-hover flex justify-between items-center">
                        <a href="/projects" className="group flex flex-col gap-1 text-slate-500 hover:text-primary transition-colors">
                            <span className="text-xs uppercase tracking-wider font-semibold">Back to All</span>
                            <span className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary flex items-center gap-2">
                                <span className="material-symbols-outlined">arrow_back</span> All Projects
                            </span>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}
