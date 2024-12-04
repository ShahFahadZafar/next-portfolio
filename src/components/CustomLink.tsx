import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react';
import { cn } from '@/utils/helper';


interface IProps extends LinkProps{
    className?: string;
    children: ReactNode;
    linkType?: "primary" | "secondary" | "none" | "link";
}

const styled = {
    baseStyled: "px-6 py-2 rounded-full inline-block text-sm cursor-pointer",
    primary: "bg-lime-400 duration-300 hover:bg-lime-500 text-zinc-900",
    secondary: "border border-zinc-700 hover:bg-zinc-700",
    link: "text-zinc-400 hover:text-zinc-50 hover:underline",
    none: "px-0"
    
}


export  function CustomLink({ children,linkType = "primary",className, ...props }: IProps) {
  return (
    <Link {...props}
     className={cn(linkType !== "link" && styled.baseStyled, styled[linkType],className)}>
        {children}</Link>
  )
}
