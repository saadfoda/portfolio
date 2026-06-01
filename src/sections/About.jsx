import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Problem Solving",
    description:
      "Building projects and solving techincal challenges through code.",
  },
  {
    icon: Rocket,
    title: "Continuous Learning",
    description:
      "Always improving my skills and exploring new technologies.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborating with classmates and teams on software projects.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description:
      "Finding practical and user-friendly solutions through development.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Passionate about building
              <span className="font-serif italic font-normal text-white">
                {" "}
                modern software.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Computer Science Graduate at MacEwan University with a passion for
                building modern web applications and learning new technologies. I enjoy
                turning ideas into real projects and improving my skills through hands-on
                development.
              </p>
              <p>
                My experience includes working with React, JavaScript, Node.js, SQL, and
                Tailwind CSS to build responsive websites and full-stack applications.
                Through personal, academic, and collaborative projects, I've developed a
                strong foundation in frontend and backend development.
              </p>
              <p>
                I'm currently focused on growing as a software developer, building
                meaningful projects, and gaining industry experience in software
                engineering and technology.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I enjoy building projects that improve my skills, solve real problems,
                and create better user experiences."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
