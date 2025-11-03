import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium mb-6">
          <Sparkles className="h-3.5 w-3.5" />
          Мини-портфолио приложений
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Наши приложения
          <span className="block text-indigo-600">простые, удобные, полезные</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-600">
          Здесь собраны проекты команды — с кратким описанием и ссылками на загрузку. Мы аккуратно оттачиваем опыт, чтобы вам было проще работать каждый день.
        </p>
      </div>
    </section>
  );
}
