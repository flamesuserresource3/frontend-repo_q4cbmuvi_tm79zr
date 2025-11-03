export default function Footer() {
  return (
    <footer className="mt-10 border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Flames Team. Все права защищены.</p>
        <p id="about" className="text-gray-500">Мы создаём маленькие, но полезные инструменты для продуктивной работы.</p>
      </div>
    </footer>
  );
}
