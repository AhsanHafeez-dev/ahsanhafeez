import Link from "next/link";
import { projects } from "@/lib/data";

export default function SelectedProjects() {
    // Let's take the first 2 projects for the landing page
    const selectedProjects = projects.slice(0, 2);

    return (
        <section id="work" className="flex flex-col gap-8">
            <div className="flex items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em] text-slate-900 dark:text-white">Selected Projects</h2>
                <Link href="/projects" className="text-primary hover:text-primary/80 font-medium hidden sm:flex items-center gap-1 transition-colors">
                    View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {selectedProjects.map((project, index) => (
                    <Link href={`/projects/${project.id}`} key={project.id} className={`group flex flex-col gap-4 cursor-pointer ${index === 1 ? 'md:mt-12' : ''}`}>
                        <div className="w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-xl overflow-hidden relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url("${project.image}")` }}
                            ></div>
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="text-xl font-bold leading-normal text-slate-900 dark:text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                <span className="material-symbols-outlined text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">arrow_outward</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal mb-3 line-clamp-2">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.slice(0, 3).map(tech => (
                                    <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
