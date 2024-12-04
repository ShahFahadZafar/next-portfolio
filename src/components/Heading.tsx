
interface IProps {
  title: string,
  desc: string,
}



export default function Heading({title, desc}: IProps) {
  return (
    <>
    <p className="font-title tracking-wide text-4xl uppercase">{title}</p>
    <p className="text-zinc-400 mb-16">{desc}</p>
    </>
  )
}
