import Link from "next/link";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-3 px-4 mb-8">
                <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">All Projects</h1>
                <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">A comprehensive list of things I have built.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4">
                {projects.map((project) => (
                    <Link href={`/projects/${project.id}`} key={project.id} className="group flex flex-col gap-4 cursor-pointer">
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
        </div>
    );
}
