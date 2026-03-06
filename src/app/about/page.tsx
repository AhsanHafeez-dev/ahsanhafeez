import { userData, skills } from "@/lib/data";

export default function AboutExperience() {
    return (
        <div className="flex flex-col gap-16">
            {/* Page Header */}
            <div className="flex flex-col gap-3 px-4 mb-8">
                <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">About & Experience</h1>
                <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">A professional journey through code, architecture, and creative problem solving.</p>
            </div>

            {/* Profile Section */}
            <div className="p-4 mb-12">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
                    <div className="shrink-0 relative">
                        <div
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 md:h-40 md:w-40 border-4 border-background-light dark:border-background-dark shadow-lg relative z-10"
                            style={{ backgroundImage: `url("${userData.avatar}")` }}
                        ></div>
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl -z-0 transform scale-110"></div>
                    </div>
                    <div className="flex flex-col justify-center text-center md:text-left flex-1">
                        <h2 className="text-2xl md:text-3xl font-bold mb-1">{userData.name}</h2>
                        <p className="text-primary font-medium text-lg mb-3">{userData.title}</p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-xl">
                            {userData.bio}
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            <a href={`mailto:${userData.email}`} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-xl">mail</span>
                                <span className="text-sm font-medium">{userData.email}</span>
                            </a>
                            <a href="#" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-xl">location_on</span>
                                <span className="text-sm font-medium">{userData.location}</span>
                            </a>
                            <a href={userData.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors">
                                <span className="material-symbols-outlined text-xl">link</span>
                                <span className="text-sm font-medium">GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-4 mb-16">
                {/* Experience Timeline */}
                <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="material-symbols-outlined text-primary text-2xl">work</span>
                        <h2 className="text-2xl font-bold">Experience</h2>
                    </div>
                    <div className="relative border-l-2 border-slate-200 dark:border-border-dark ml-3 space-y-8 pb-4">

                        <div className="relative pl-8 group">
                            <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background-light dark:bg-background-dark group-hover:bg-primary transition-colors duration-300"></div>
                            <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300">
                                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                    <h3 className="text-lg font-bold">Backend and Generative AI Developer</h3>
                                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                                        2021 - Present
                                    </span>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-4 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-base">business</span>
                                    Self-Employed / Freelance
                                </p>
                                <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm list-disc list-inside">
                                    <li>Developed numerous scalable web applications and SaaS platforms.</li>
                                    <li>Integrated Generative AI solutions for diverse automation tasks.</li>
                                    <li>Architected robust backend APIs and data pipelines.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Skills & Education */}
                <div className="lg:col-span-5 space-y-10">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-primary text-2xl">psychology</span>
                            <h2 className="text-2xl font-bold">Technical Skills</h2>
                        </div>
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
                            <div className="space-y-5">
                                {[...skills.frontend, ...skills.backend, ...skills.database].slice(0, 6).map((skill) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-medium">{skill.name}</span>
                                            <span className="text-sm text-primary font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-slate-100 dark:bg-surface-darker rounded-full h-2 overflow-hidden">
                                            <div className="bg-primary h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="material-symbols-outlined text-primary text-2xl">school</span>
                            <h2 className="text-2xl font-bold">Education</h2>
                        </div>
                        <div className="bg-white dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-border-dark shadow-sm">
                            <div className="flex flex-col gap-4">
                                <div className="border-b border-slate-200 dark:border-border-dark pb-4 last:border-0 last:pb-0">
                                    <h3 className="font-bold text-lg">B.S. Computer Science</h3>
                                    <p className="text-primary text-sm font-medium">University / College</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">2018 - 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
