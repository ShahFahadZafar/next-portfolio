import Image from "next/image";
import Heading from "./Heading";
import { socialLinks } from "@/data/socialLinkData";
import { CustomLink } from "./CustomLink";


export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28">
        <div className="mt-20">
      <Heading title="About me" desc="Let me know something about me:"/>
        </div>
      <div className="flex gap-4 flex-col md:flex-row items-center">
        <div className="h-80 w-80 shrink-0 overflow-hidden rounded-full">
          
      
      <Image src="/portfolio-33.jpeg" 
      alt="" 
      width={600}
       height={600}
        className="w-full h-full  object-top object-cover" />

      </div>
      <div className="space-y-2">
        <p>Hii 👏, I am ShahFahad Zafar</p>
        <p className="text-zinc-400">I am a full-stack developer with 2 years of experience in web development. I have worked on various projects and I am always looking for new challenges and opportunities to grow. I am currently working on a project called <a href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" className="text-zinc-400 underline">Nextjs Portfolio</a> and I am looking for a full-time job as a developer.</p>
        <ul className="flex gap-4 mt-2">
            {socialLinks.map(({icon:Icon, href}, index) => {
                return <li key={index}>
                    <CustomLink href={href} linkType="secondary" className="h-10 w-10 p-0 rounded-full flex justify-center items-center">
                        <Icon className="text-xl shrink-0" />
                        </CustomLink>
                </li>


            })}
        </ul>
      </div>
      </div>

    </section>
  
  )}