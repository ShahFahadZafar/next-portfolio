import { projects } from "@/data/projectData";
import Image from "next/image";
import { CustomLink } from "./CustomLink";
import Heading from "./Heading";


export default function ProjectSection() {
  return (
    <section id="projects" className="scroll-mt-28" >
        
        <Heading title="Projects" desc="My best projects i have built:" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project)=>(
                <ProjectCard key={project.title} project={project} />
            ))}
            

        </div>
        <div className="flex justify-center mt-10">
            <CustomLink href="https://github.com/shahfahadzafar" linkType="secondary">See All Projects</CustomLink>
        </div>
        
    </section>



  )
}

interface IProjectCard{
    project:(typeof projects)[0]
}


function ProjectCard({project}: IProjectCard){
    return <div className="bg-zinc-800/50 border border-zinc-800 rounded-lg overflow-hidden">
        <div>
            <Image src={project.image}
             alt={project.title}
             width={500}
             height={500}
             className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
            <ul className="flex gap-4 mb-2">
                {project.stacks.map((stack) => {
                    return <li key={stack} className="px-4 py-1 text-xs border border-zinc-700 text-zinc-400 rounded-md">{stack}</li>
                })}
            </ul>
            <p className="text-lg font-medium">{project.title}</p>
            <p className="text-zinc-400">{project.desc}</p>
            <div className="flex gap-4 mt-4">
                <CustomLink href={project.sourceCode} linkType="secondary">Source Code</CustomLink>
                <CustomLink href={project.liveAt}linkType="secondary">Live At</CustomLink>
            </div>
        </div>
        </div>
}