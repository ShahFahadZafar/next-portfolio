export function Footer() {
    return <footer className="w-full py-4 mt-28 px-4 md:px-8 border-t border-t-zinc-700">
        <div className="max-7-xl mx-auto flex justify-between">
            <p className="text-zinc-500 text-sm">&copy;copyright {new Date().getFullYear()} </p>
            <p className="text-lime-400 hover:text-lime-500 font-semibold text-sm">Made with ❤️ by ShahFahad Zafar</p>
        </div>
    </footer>
}