import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "GRC Compass - AI Compliance Assistant",
    description:
      "Built a RAG-based AI compliance assistant that processes cybersecurity framework PDF documents and provides context-aware compliance guidance, recommendations, and cited responses through an interactive chatbot interface.",
    image: "/projects/chatbot-message.png",
    tags: ["React", "Gemini API", "RAG", "Node.js", "PDF Processing"],
    link: "https://grccompass.vercel.app/dashboard/chatbot",
    github: "https://github.com/saadfoda/grccompass_chat",
  },
  {
    title: "Alberta Lakes Monitoring Site",
    description:
      "Developed a lake monitoring dashboard using React and Node.js featuring advanced filtering capabilities for algae levels, improving accessibility and exploration of Alberta environmental data.",
    image: "/projects/alberta-lakes.png",
    tags: ["React", "Node.js", "JavaScript", "REST API", "MongoDB"],
    link: null,
    github: "https://github.com/saadfoda/AlbertaLakesSite",
  },
  {
    title: "Tutor Booking Application",
    description:
      "Built a tutoring platform supporting scheduling and session management with Firebase Authentication and Realtime Database, designed to support 50+ concurrent users.",
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
  {
    title: "Workout Application Prototype",
    description:
      "Contributed to the UX research and design process for a fitness application by conducting user research, creating personas, defining user requirements, developing task flows, and supporting the design of high-fidelity Figma prototypes.",
    image: "/projects/workout-app.png",
    tags: [
      "Figma",
      "UX Research",
      "User Personas",
      "Wireframing",
      "Prototyping"
    ],
    link: "https://www.figma.com/proto/2G14qbncVXUAXFNswrx6aL/Group-3-FitFlexxer?node-id=24-2&starting-point-node-id=24%3A2&t=psAe1pXRMQwYyKyt-1",
    github: null,
  },
  {
    title: "Secure Mail Transfer Protocol",
    description: "Implemented a secure multi-client mail transfer system in Python using AES-256 encryption and message authentication codes (MAC) to ensure confidentiality and data integrity.",
    image: "/projects/smtp.png",
    tags: ["Python", "Sockets", "AES-256", "Cybersecurity"],
    link: null,
    github: null,
  }
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
            <span className="font-serif italic font-normal text-white">
              {" "}
              that showcase my skills and creativity.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of academic, personal, and collaborative projects that
            demonstrate my experience in software development, databases,
            cybersecurity, AI, and web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3>{project.title}</h3>

                  {(project.link || project.github) && (
                    <ArrowUpRight
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary
      group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  )}
                </div>
                <p className="text-muted-foreground text-sm">
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
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
