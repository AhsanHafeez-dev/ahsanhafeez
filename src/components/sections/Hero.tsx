import { userData } from "@/lib/data";

export default function Hero() {
    return (
        <section className="relative min-h-[70vh] flex flex-col justify-center items-start text-left pt-12 md:pt-24 pb-12">
            {/* Subtle background effect */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background-dark/0 to-background-dark/0 dark:from-primary/20 dark:via-background-dark/0 dark:to-background-dark/0 opacity-50"></div>

            {userData.availableForHire && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    {userData.availabilityText}
                </div>
            )}

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-[-0.04em] mb-6 text-slate-900 dark:text-white max-w-4xl">
                Engineering <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Digital Experiences</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-2xl mb-10">
                {userData.bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <a href="#work" className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-[0_0_20px_rgba(25,93,230,0.4)] hover:shadow-[0_0_30px_rgba(25,93,230,0.6)]">
                    View Selected Projects
                </a>
                <a href="#contact" className="flex items-center justify-center rounded-lg h-12 px-8 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-base font-bold leading-normal tracking-[0.015em] transition-all">
                    Get in Touch
                </a>
            </div>
        </section>
    );
}
