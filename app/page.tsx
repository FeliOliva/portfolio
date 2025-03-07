import Image from "next/image";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { SkillCard } from "@/components/skill-card";
import { ProjectCard } from "@/components/project-card";

export default function Portfolio() {
  // Datos de ejemplo para proyectos
  const projects = [
    {
      title: "E-commerce App",
      description:
        "Una aplicación de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
      imageSrc: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "https://example.com",
      codeUrl: "https://github.com/example/project",
    },
    {
      title: "Sistema de Gestión",
      description:
        "Sistema para gestionar inventario, clientes y ventas para pequeñas empresas.",
      imageSrc: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "PostgreSQL", "Tailwind CSS", "Docker"],
      demoUrl: "https://example.com",
      codeUrl: "https://github.com/example/project",
    },
    {
      title: "App de Finanzas Personales",
      description:
        "Aplicación para seguimiento de gastos, presupuestos y análisis financiero personal.",
      imageSrc: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "TypeScript", "Firebase", "Chart.js"],
      demoUrl: "https://example.com",
      codeUrl: "https://github.com/example/project",
    },
    {
      title: "Portal de Noticias",
      description:
        "Portal de noticias con categorías, búsqueda y sistema de comentarios.",
      imageSrc: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "MySQL", "Redis", "Tailwind CSS"],
      demoUrl: "https://example.com",
      codeUrl: "https://github.com/example/project",
    },
  ];

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="/profile5.jpg"
              alt="Felipe Oliva"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">Felipe Oliva</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Bienvenido a mi portfolio. Soy Analista en Sistemas.
            </p>
          </div>
        </header>

        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Sobre Mí</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
            nulla enim. Phasellus molestie magna non est bibendum non venenatis
            nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris
            iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
            Proin quis tortor orci. Etiam at risus et justo dignissim congue.
          </p>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                codeUrl={project.codeUrl}
              />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <SkillCard icon="nodejs" name="Node.js" />
            <SkillCard icon="redis" name="Redis" />
            <SkillCard icon="postman" name="Postman" />
            <SkillCard icon="docker" name="Docker" />
            <SkillCard icon="nginx" name="Nginx" />
            <SkillCard icon="mysql" name="MySQL" />
            <SkillCard icon="postgresql" name="PostgreSQL" />
            <SkillCard icon="mongodb" name="MongoDB" />
            <SkillCard icon="react" name="React" />
            <SkillCard icon="nextjs" name="Next.js" />
            <SkillCard icon="tailwind" name="Tailwind CSS" />
            <SkillCard icon="typescript" name="TypeScript" />
            <SkillCard icon="javascript" name="JavaScript" />
            <SkillCard icon="git" name="Git" />
            <SkillCard icon="github" name="GitHub" />
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Contacto</h2>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button variant="outline" className="flex items-center gap-2">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              GitHub
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Teléfono
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email
            </Button>
          </div>
        </section>

        <footer className="text-center text-muted-foreground mt-12 pt-4 border-t">
          <p>
            © {new Date().getFullYear()} Felipe Oliva. Todos los derechos
            reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}
