import { Rocket, Github } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-indigo-600" />
          <span className="font-semibold tracking-tight">Flames Team • Apps</span>
        </div>
        <nav className="flex items-center gap-3 text-sm">
          <a href="#apps" className="px-3 py-1.5 rounded-md hover:bg-black/5 transition">Приложения</a>
          <a href="#about" className="px-3 py-1.5 rounded-md hover:bg-black/5 transition">О команде</a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-black/10 hover:border-black/20 transition"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
