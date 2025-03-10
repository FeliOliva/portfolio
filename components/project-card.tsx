import Image from "next/image";
import { ExternalLink, Github, Code, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ProjectType = "web" | "backend" | "fullstack" | "mobile" | "other";

type Screenshot = {
  url: string;
  caption: string;
};

type Video = {
  url: string;
  caption: string;
};

type ProjectCardProps = {
  title: string;
  description: string;
  longDescription?: string;
  imageSrc: string;
  technologies: string[];
  demoUrl?: string;
  codeUrl?: string | null;
  screenshots?: Screenshot[];
  video?: Video;
  features?: string[];
  architecture?: string;
  type: ProjectType;
};

export function ProjectCard({
  title,
  description,
  longDescription,
  imageSrc,
  technologies,
  demoUrl,
  codeUrl = null,
  screenshots = [],
  video,
  features = [],
  architecture,
  type,
}: ProjectCardProps) {
  // Icono según el tipo de proyecto
  const getTypeIcon = () => {
    switch (type) {
      case "web":
        return <ExternalLink className="h-4 w-4" />;
      case "backend":
        return <Layers className="h-4 w-4" />;
      case "fullstack":
        return <Code className="h-4 w-4" />;
      default:
        return <Code className="h-4 w-4" />;
    }
  };

  return (
    <Card className="overflow-hidden border border-primary/20 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
        <Badge
          className="absolute top-2 right-2 flex items-center gap-1"
          variant="secondary"
        >
          {getTypeIcon()}
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Badge>
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
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

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="default"
                size="sm"
                className="flex items-center gap-1 ml-auto"
              >
                Detalles
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                  {longDescription || description}
                </DialogDescription>
              </DialogHeader>

              <Tabs defaultValue="screenshots" className="mt-4">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="screenshots">Capturas</TabsTrigger>
                  <TabsTrigger value="features">Características</TabsTrigger>
                  <TabsTrigger value="tech">Tecnologías</TabsTrigger>
                </TabsList>

                <TabsContent value="screenshots" className="space-y-4 mt-4">
                  {video && (
                    <div className="space-y-2 mb-6">
                      <video
                        controls
                        className="w-full rounded-md border"
                        poster={screenshots[0]?.url}
                      >
                        <source src={video.url} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                      </video>
                      <p className="text-sm text-center text-muted-foreground">
                        {video.caption}
                      </p>
                    </div>
                  )}
                  {screenshots.length > 0 ? (
                    <div className="grid gap-4">
                      {screenshots.map((screenshot, index) => (
                        <div key={index} className="space-y-2">
                          <div className="relative h-[300px] w-full rounded-md overflow-hidden border">
                            <Image
                              src={screenshot.url || "/placeholder.svg"}
                              alt={screenshot.caption}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="text-sm text-center text-muted-foreground">
                            {screenshot.caption}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    !video && (
                      <p className="text-muted-foreground">
                        No hay capturas disponibles para este proyecto.
                      </p>
                    )
                  )}
                </TabsContent>

                <TabsContent value="features" className="space-y-4 mt-4">
                  {features.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">
                      No hay características detalladas para este proyecto.
                    </p>
                  )}
                </TabsContent>

                <TabsContent value="tech" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <Badge key={tech} className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {architecture && (
                      <div className="space-y-2">
                        <h4 className="font-medium">Arquitectura</h4>
                        <div className="p-4 bg-muted rounded-md">
                          <pre className="whitespace-pre-wrap text-sm">
                            {architecture}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
