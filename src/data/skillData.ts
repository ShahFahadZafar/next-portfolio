import {  FaNodeJs, FaHtml5, FaCss3, } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql, SiSupabase, SiReact, SiExpress } from "react-icons/si";

export const skills =  {
    frountend: {
        title: "Frontend",
        stacks: [
            {
                stack: "React.Js",
                icon: SiReact
            },
            {
                stack: "Next.js",
                icon: SiNextdotjs
            },
            
            {
                stack: "HTML5",
                icon: FaHtml5
            },
            {
                stack: "CSS",
                icon: FaCss3
            },
            {
                stack: "Tailwindcss",
                icon: SiTailwindcss
            },
            {
                stack: "TypeScript",
                icon: SiTypescript,
            }
        ]
    },
    backend: {
        title: "Backend",
        stacks: [
            {
                stack: "Node.Js",
                icon: FaNodeJs
            },
            {
                stack: "PostgreSQL",
                icon: SiPostgresql
            },
            {
                stack: "Supabase",
                icon: SiSupabase,
            },
            {
                stack: "Express",
                icon: SiExpress,
            }
        ]
    }
}
   