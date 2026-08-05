import { ArrowUpRight, Github } from "lucide-react";
const projects = [
  {
    title: "GRC Compass - AI Compliance Assistant",
    description:
      "AI-powered cybersecurity compliance assistant using Retrieval-Augmented Generation (RAG), PostgreSQL/pgvector, and Google Gemini to deliver grounded, context-aware compliance guidance from uploaded documents.",
    images: ["/projects/chatbot-message.png", "/projects/chatbot-upload.png"],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Gemini", "RAG"],
    link: "https://grccompass.vercel.app/dashboard/chatbot",
    github: "https://github.com/saadfoda/grccompass_chat",
    docs: [
      { label: "Report", href: "/projects/CMPT 496 Chatbot Report.pdf" },
      { label: "Presentation", href: "/projects/Chatbot Final Presentation.pdf" }
    ]
  },
  {
    title: "Secure Mail Transfer Protocol",
    description: "Implemented a secure multi-client mail transfer system in Python using TCP sockets, AES-256 encryption, and message authentication codes (MAC) to ensure secure, authenticated communication between clients.",
    images: ["/projects/smtp.png"],
    tags: ["Python", "Sockets", "AES-256", "Cybersecurity"],
    link: null,
    github: null,
    docs: [
      {label: "Report", href: "/projects/cmpt 361 pres.pdf"},
    ]
  },
  {
    title: "Alberta Lakes Monitoring Site",
    description:
      "Built a React dashboard for exploring Alberta lake monitoring data through advanced filtering and interactive visualizations, improving accessibility to environmental information.",
    images: ["/projects/alberta-lakes.png"],
    tags: ["React", "Node.js", "JavaScript", "REST API", "MongoDB"],
    link: null,
    github: "https://github.com/saadfoda/AlbertaLakesSite",
  },
  {
    title: "Tutor Booking Application",
    description:
      "Developed an Android tutoring platform with Firebase Authentication and Realtime Database, enabling scheduling and real-time session management for multiple concurrent users.",
    images: ["/projects/tutor-booking.png"],
    tags: ["Kotlin", "Firebase", "Android Studio", "Jira"],
    link: null,
    github: "https://github.com/saadfoda/F24_C3",
    docs: [
      { label: "Report", href: "/projects/UserManual_F24_C3.pdf" },
    ]
  },
  {
    title: "Property Assessment Application",
    description:
      "Collaborated in a team of three to develop a JavaFX application for property assessment analysis, providing neighborhood comparison tools and statistical visualizations.",
    images: ["/projects/property-assessment.png"],
    tags: ["Java", "JavaFX", "Data Visualization", "Git"],
    link: null,
    github: "https://github.com/saadfoda/Property-Assessment-Application-",
    docs: [
      { label: "Report", href: "/projects/305 Project Presentation.pdf" },
    ]
  },
  {
    title: "Car Rental Database System",
    description:
      "Designed and developed a C# and SQL database management system for vehicle tracking, reservation management, and customer information processing.",
    images: ["/projects/car-rental.png"],
    tags: ["C#", "SQL", "Database Design"],
    link: null,
    github: null,
  },

];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of software engineering, AI, and full-stack projects focused on solving
            practical technical and business problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
  <div
    key={idx}
    className={`group glass rounded-2xl overflow-hidden animate-fade-in ${
      idx === 0 ? "md:col-span-2" : ""
    }`}
    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
  >
    {/* Images */}
    <div
      className={`grid gap-1 ${
        idx === 0 ? "grid-cols-2 aspect-[21/9]" : "grid-cols-1 aspect-video"
      }`}
    >
      {project.images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${project.title} screenshot ${i + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ))}
    </div>

    {/* Content */}
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-semibold">
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-surface border border-border text-xs"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 pt-2">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm flex items-center gap-1 hover:underline"
          >
            Live Demo
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm flex items-center gap-1 hover:underline"
          >
            GitHub
            <Github className="w-4 h-4" />
          </a>
        )}

        {project.docs?.map((doc) => (
  <a
    key={doc.label}
    href={doc.href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary text-sm hover:underline"
  >
    {doc.label}
  </a>
))}
      </div>
    </div>
    </div>
  ))}

        </div>
      </div>
    </section>
  );
};