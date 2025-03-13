import Image from "next/image";
import { Github, Linkedin, Mail, Phone, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { SkillCard } from "@/components/skill-card";
import { ProjectCard, type ProjectType } from "@/components/project-card";

export default function Portfolio() {
  // Datos de proyectos
  const projects: {
    title: string;
    description: string;
    longDescription?: string;
    imageSrc: string;
    technologies: string[];
    demoUrl?: string;
    codeUrl?: string | null;
    screenshots?: { url: string; caption: string }[];
    video?: { url: string; caption: string };
    features?: string[];
    architecture?: string;
    type: ProjectType;
  }[] = [
    {
      title: "Sistema de Gestión de Ventas",
      description:
        "Sistema completo para gestión de ventas, clientes, artículos, entregas y notas de crédito.",
      longDescription:
        "Este sistema permite la gestión integral de un negocio, incluyendo el manejo de inventario, clientes, ventas, entregas y generación de notas de crédito. Incluye un resumen de cuenta por cliente y seguimiento de entregas realizadas.",
      imageSrc: "/CapturaInicio.jpeg",
      technologies: ["Node.js", "Express", "MySQL", "Docker", "React"],
      screenshots: [
        {
          url: "/CapturaInicio.jpeg",
          caption: "Dashboard principal del sistema",
        },
        { url: "/CapturaArticulos.jpeg", caption: "Gestión de artículos" },
        { url: "/CapturaVentas.jpeg", caption: "Registro de ventas" },
      ],
      video: {
        url: "/VideoPortfolio1.mp4",
        caption: "Demostración del sistema en funcionamiento",
      },
      features: [
        "Gestión de clientes con historial completo",
        "Inventario de artículos con control de stock",
        "Registro de ventas y facturación",
        "Resumen de cuenta por cliente",
        "Registro de entregas realizadas por clientes",
        "Generación de notas de crédito",
        "Panel de administración completo",
      ],
      architecture: `
Frontend: React con Redux para gestión de estado
Backend: Node.js con Express
Base de datos: MySQL
Contenedorización: Docker para desarrollo y despliegue local
Autenticación: JWT
      `,
      type: "fullstack",
      codeUrl: "https://github.com/FeliOliva/ariel",
    },
    {
      title: "Backend con Prisma y Redis",
      description:
        "Backend optimizado con ORM Prisma y caché Redis para alto rendimiento.",
      longDescription:
        "Este backend implementa una arquitectura moderna utilizando Prisma como ORM para la gestión de base de datos y Redis para caché, mejorando significativamente el rendimiento de las consultas frecuentes.",
      imageSrc: "/Backend.png",
      technologies: [
        "Node.js",
        "Express",
        "Prisma",
        "Redis",
        "Mysql",
        "Docker",
      ],
      screenshots: [
        {
          url: "/PostmanBackend.png",
          caption: "Captura de postman",
        },
      ],
      features: [
        "API RESTful con Express",
        "ORM Prisma para gestión de base de datos",
        "Caché con Redis para optimizar consultas frecuentes",
        "Autenticación y autorización con JWT",
        "Validación de datos con Zod",
        "Logs estructurados",
        "Tests unitarios e integración",
      ],
      architecture: `
Arquitectura en capas:
- Controllers: Manejo de requests y responses
- Services: Lógica de negocio
- Repositories: Acceso a datos con Prisma
- Middleware: Autenticación, validación, etc.

Caché:
- Redis para almacenar resultados de consultas frecuentes
- Invalidación automática de caché en actualizaciones
- Para usar de forma local levante un contenedor de Redis con Docker

Contenedorización:
- Docker Compose para desarrollo local
      `,
      type: "backend",
      codeUrl: "https://github.com/FeliOliva/backend-MiFamilia",
    },
    {
      title: "Landing Page",
      description: "Landing page moderna desarrollada con Next.js y shadcn/ui.",
      longDescription:
        "Una landing page moderna y responsive desarrollada con Next.js y componentes de shadcn/ui, desplegada en Vercel.",
      imageSrc: "/LandingCaptura.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
      demoUrl: "https://boiero-landing-maqueta.vercel.app/",
      codeUrl: "https://github.com/FeliOliva/boiero-landing-maqueta",
      screenshots: [
        {
          url: "/LandingCaptura.png",
          caption: "Vista principal de la landing page",
        },
      ],
      features: [
        "Diseño responsive para todos los dispositivos",
        "Optimización de imágenes con Next.js",
        "Componentes reutilizables con shadcn/ui",
        "Animaciones suaves para mejor experiencia de usuario",
        "Optimización SEO",
      ],
      type: "web",
    },
  ];

  return (
    <main className="min-h-screen bg-background transition-colors duration-300">
      <ThemeToggle />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="/profile.jpeg"
              alt="Felipe Oliva"
              fill
              className="object-cover object-center scale-[1.02]"
              priority
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">Felipe Oliva</h1>
            <p className="text-xl text-muted-foreground mt-2">
              Bienvenidos a mi portfolio.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4 flex items-center gap-2"
              asChild
            >
              <a href="/CurriculumVitae.pdf" download>
                <FileDown className="h-4 w-4" />
                Descargar CV
              </a>
            </Button>
          </div>
        </header>

        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b pb-2 mb-4">Sobre Mí</h2>
          <p className="text-muted-foreground mb-4">
            ¡Hola! Soy Felipe Oliva, Analista en Sistemas y desarrollador Full
            Stack con 22 años de pasión por la tecnología y la programación. Me
            encanta aprender constantemente y asumir nuevos desafíos, siempre
            con un enfoque proactivo, responsable y comprometido en cada
            proyecto que desarrollo.
          </p>
          <p className="text-muted-foreground">
            Me formé en el Instituto Superior Leibnitz, donde actualmente solo
            me resta completar la tesis para graduarme. A lo largo de mi
            trayectoria, he desarrollado diversos sistemas de manera
            independiente, trabajando con tecnologías como Node.js, React,
            Next.js, MongoDB, PostgreSQL, MySQL, Redis y Docker, entre otras.
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
                longDescription={project.longDescription}
                imageSrc={project.imageSrc}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                codeUrl={project.codeUrl}
                screenshots={project.screenshots}
                video={project.video}
                features={project.features}
                architecture={project.architecture}
                type={project.type}
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
            <Button
              variant="outline"
              className="flex items-center gap-2"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/felipe-oliva-zarate-35a795175/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              asChild
            >
              <a
                href="https://github.com/FeliOliva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              asChild
            >
              <a href="tel:+543535623575">
                <Phone className="h-5 w-5" />
                3535623575
              </a>
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              asChild
            >
              <a href="mailto:Felitooliva2@gmail.com">
                <Mail className="h-5 w-5" />
                Felitooliva2@gmail.com
              </a>
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
