"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  SiNodedotjs,
  SiRedis,
  SiPostman,
  SiDocker,
  SiNginx,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiGithub,
} from "react-icons/si";

type SkillIconProps = {
  name: string;
  className?: string;
};

const SkillIcon = ({ name, className = "w-10 h-10" }: SkillIconProps) => {
  const iconMap = {
    nodejs: SiNodedotjs,
    redis: SiRedis,
    postman: SiPostman,
    docker: SiDocker,
    nginx: SiNginx,
    mysql: SiMysql,
    postgresql: SiPostgresql,
    mongodb: SiMongodb,
    react: SiReact,
    nextjs: SiNextdotjs,
    tailwind: SiTailwindcss,
    typescript: SiTypescript,
    javascript: SiJavascript,
    git: SiGit,
    github: SiGithub,
  };

  const Icon = iconMap[name as keyof typeof iconMap] || SiJavascript;

  return <Icon className={className} />;
};

type SkillCardProps = {
  icon: string;
  name: string;
};

export function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <Card className="border border-primary/20 hover:border-primary/50 transition-colors">
      <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
        <div className="text-primary dark:text-primary">
          <SkillIcon name={icon} />
        </div>
        <p className="text-sm font-medium text-center">{name}</p>
      </CardContent>
    </Card>
  );
}
