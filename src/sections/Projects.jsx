import { ArrowUpRight, Github } from "lucide-react";
const projects = [
  {
    title: "GRC Compass - AI Compliance Assistant",
    description:
      "Designed and built an AI-powered cybersecurity compliance assistant that enables analysts to query large regulatory frameworks using natural language. Implemented Retrieval-Augmented Generation (RAG), semantic vector search with PostgreSQL/pgvector, and PDF processing to deliver grounded, context-aware responses.",
    image: "/projects/chatbot-message.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Gemini", "RAG"],
    link: "https://grccompass.vercel.app/dashboard/chatbot",
    github: "https://github.com/saadfoda/grccompass_chat",
  },
  {
    title: "Secure Mail Transfer Protocol",
    description: "Implemented a secure multi-client mail transfer system in Python using TCP sockets, AES-256 encryption, and message authentication codes (MAC) to ensure secure, authenticated communication between clients.",
    image: "/projects/smtp.png",
    tags: ["Python", "Sockets", "AES-256", "Cybersecurity"],
    link: null,
    github: null,
  },
  {
    title: "Alberta Lakes Monitoring Site",
    description:
      "Built a React dashboard for exploring Alberta lake monitoring data through advanced filtering and interactive visualizations, improving accessibility to environmental information.",
    image: "/projects/alberta-lakes.png",
    tags: ["React", "Node.js", "JavaScript", "REST API", "MongoDB"],
    link: null,
    github: "https://github.com/saadfoda/AlbertaLakesSite",
  },
  {
    title: "Tutor Booking Application",
    description:
      "Developed an Android tutoring platform with Firebase Authentication and Realtime Database, enabling scheduling and real-time session management for multiple concurrent users.",
    image: "/projects/tutor-booking.png",
    tags: ["Kotlin", "Firebase", "Android Studio", "Jira"],
    link: null,
    github: "https://github.com/saadfoda/F24_C3",
  },
  {
    title: "Property Assessment Application",
    description:
      "Collaborated in a team of three to develop a JavaFX application for property assessment analysis, providing neighborhood comparison tools and statistical visualizations.",
    image: "/projects/property-assessment.png",
    tags: ["Java", "JavaFX", "Data Visualization", "Git"],
    link: null,
    github: "https://github.com/saadfoda/Property-Assessment-Application-",
  },
  {
    title: "Car Rental Database System",
    description:
      "Designed and developed a C# and SQL database management system for vehicle tracking, reservation management, and customer information processing.",
    image: "/projects/car-rental.png",
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
              className={`group glass rounded-2xl overflow-hidden animate-fade-in ${idx === 0 ? "md:col-span-2" : ""
                }`}
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${idx === 0 ? "aspect-[21/9]" : "aspect-video"
                  }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${idx === 0 ? "object-top" : ""
                    }`}
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}

              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold leading-tight">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 pt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo`}
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
                      aria-label={`View ${project.title} GitHub repository`}
                      className="text-primary text-sm flex items-center gap-1 hover:underline"
                    >
                      GitHub
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
