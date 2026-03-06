export const userData = {
    name: "Ahsan Hafeez",
    title: "Backend and Generative AI Developer",
    tagline: "Crafting digital experiences with code and creativity",
    location: "Karachi, Pakistan",
    email: "ahsanhafeez883@gmail.com",
    phone: "(+92) 3072793796",
    website: "https://portfolio-snowy-one-862ufp9ej2.vercel.app/",
    resumeUrl: "my_resume.pdf",
    avatar: "https://res.cloudinary.com/dpsqzixmj/image/upload/v1760878012/iybyzimpyymjyy5nbgyz.jpg",
    availableForHire: true,
    availabilityText: "Available for Hiring",
    bio: "Passionate backend and genai developer experience building scalable web applications. I love turning complex problems into simple, beautiful solutions. When I'm not coding, you'll find me exploring new technologies or contributing to open source projects.",
    social: {
        github: "https://github.com/AhsanHafeez-dev",
        linkedin: "https://www.linkedin.com/in/ahsan-hafeez-334aa8291/",
        twitter: "https://twitter.com/hiteshdotcom",
        website: "https://portfolio-snowy-one-862ufp9ej2.vercel.app/",
    },
    stats: {
        experience: "5",
        projects: "5+",
        clients: "5+",
        coffees: "1000+",
    },
};

export const projects = [
    {
        id: 1,
        title: "EduMarket – Multi-Instructor Course Platform",
        description: "Full-stack marketplace supporting instructor onboarding, course creation, assignments, quizzes, certificates, and course recommendations. Built scalable notification queues, bulk upload handling, and interactive dashboard",
        image: "https://res.cloudinary.com/dpsqzixmj/image/upload/v1765044833/adrn23zymybkpv1ayb2s.png",
        technologies: ["JavaScript", "Node.js", "Express.js", "Prisma", "Supabase", "Stripe", "Next.js", "Cloudinary", "JWT", "BullMQ"],
        liveUrl: "https://edu-front-end-xi.vercel.app/",
        githubUrl: "https://github.com/AhsanHafeez-dev/EduMarket",
        category: "Web Development",
    },
    {
        id: 2,
        title: "Video Streaming Application",
        description: "Scalable video streaming backend supporting adaptive HLS encoding, playlists, likes, comments, and subscriptions. Built community feed APIs using aggregation pipelines for recommendations and pagination.",
        image: "https://res.cloudinary.com/dpsqzixmj/image/upload/v1765089485/Screenshot_2025-12-07_113612_qoy8ot.png",
        technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Cloudinary", "ffmpeg", "JWT"],
        liveUrl: "https://tune-in-frontend.vercel.app/",
        githubUrl: "https://github.com/AhsanHafeez-dev/tuneInBackend",
        category: "Full Stack",
    },
    {
        id: 3,
        title: "Uber Ride Booking app",
        description: "An Ride booking and location tracking app similar to uber",
        image: "https://res.cloudinary.com/dpsqzixmj/image/upload/v1765101678/Screenshot_2025-12-07_145908_ljclvd.png",
        technologies: ["Javascript", "Express js", "Google Map API", "React", "WebSocket", "MongoDB"],
        liveUrl: "https://uber-frontend-navy.vercel.app/",
        githubUrl: "https://github.com/AhsanHafeez-dev/uber-backend",
        category: "Full Stack",
    },
    {
        id: 4,
        title: "AI Chat Bot",
        description: "An intelligent chatbot powered by OpenAI's GPT, featuring natural language processing and context-aware conversations and image generation.",
        image: "https://res.cloudinary.com/dpsqzixmj/image/upload/v1772795753/Screenshot_2026-03-06_161242_d4viu4.png",
        technologies: ["JavaScript", "express", "Stripe"],
        liveUrl: "https://complete-quick-gpt.vercel.app/",
        githubUrl: "https://github.com/AhsanHafeez-dev/research-paper-explainer/",
        category: "AI/ML",
    },
    {
        id: 5,
        title: "Health Care App",
        description: "An all in one android health Care app where you can book doctor's appointment, buy medicine, book tests, read health related articles, and track you orders",
        image: "https://res.cloudinary.com/dpsqzixmj/image/upload/c_crop,w_1080,h_608,ar_16:9/v1765124077/title_w4xblq.jpg",
        technologies: ["Java", "sqlite", "Android", "React", "WebSocket"],
        liveUrl: "https://github.com/AhsanHafeez-dev/HealthHarbour/releases/tag/trial",
        githubUrl: "https://github.com/AhsanHafeez-dev/HealthHarbour",
        category: "ANDROID",
    },
    {
        id: 6,
        title: "Geometry Wars Game",
        description: "Geometry wars game which reads config from file and draw entities from screen and also manage their physics engine",
        image: "https://res.cloudinary.com/dpsqzixmj/image/upload/v1765125510/Screenshot_2025-12-07_213619_ckyldp.png",
        technologies: ["CPP", "Open gl", "SFML", "Game"],
        liveUrl: "https://res.cloudinary.com/dpsqzixmj/video/upload/v1765157153/Screen_Recording_2025-12-08_062159_un2lwa.mp4",
        githubUrl: "https://github.com/AhsanHafeez-dev/Game-Programming/tree/main/Assighment2",
        category: "GAME",
    }
];

export const skills = {
    frontend: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "TypeScript", level: 88, icon: "📘" },
        { name: "Tailwind CSS", level: 85, icon: "🎨" },
        { name: "JavaScript", level: 95, icon: "🟨" },
    ],
    backend: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "Express.js", level: 90, icon: "🚀" },
        { name: "Flask", level: 82, icon: "⚡" },
        { name: "REST APIs", level: 92, icon: "🌐" },
    ],
    database: [
        { name: "PostgreSQL", level: 88, icon: "🐘" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "Redis", level: 80, icon: "🔴" },
        { name: "Prisma", level: 85, icon: "⚡" },
        { name: "Supabase", level: 82, icon: "🚀" },
    ],
    tools: [
        { name: "Git", level: 85, icon: "📝" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "AWS", level: 60, icon: "☁️" },
        { name: "Vercel", level: 80, icon: "▲" },
        { name: "VS Code", level: 95, icon: "💙" },
    ],
};

export const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Product Manager at TechCorp",
        content: "Ahsan delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations.",
        avatar: "👩‍💼",
        rating: 5,
    },
    {
        name: "Mike Chen",
        role: "Startup Founder",
        content: "Working with Ahsan was a game-changer for our startup. He built our MVP in record time without compromising on quality.",
        avatar: "👨‍💻",
        rating: 5,
    },
    {
        name: "Emily Davis",
        role: "Design Director",
        content: "Ahsan has an incredible ability to bring designs to life. His code is clean, efficient, and perfectly matches our design vision.",
        avatar: "👩‍🎨",
        rating: 5,
    },
];

export const skillCategories = [
    { id: "frontend", name: "Frontend", icon: "palette" },
    { id: "backend", name: "Backend", icon: "server" },
    { id: "database", name: "Database", icon: "database" },
    { id: "tools", name: "Tools", icon: "code" },
];
