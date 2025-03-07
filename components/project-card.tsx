import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string;
};

export function ProjectCard({
  title,
  description,
  imageSrc,
  technologies,
  demoUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2 mt-auto">
          {demoUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              asChild
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
          {codeUrl && (
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
              asChild
            >
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Código
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
