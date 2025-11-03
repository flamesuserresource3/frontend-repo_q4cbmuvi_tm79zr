import { Keyboard, Download, Info } from "lucide-react";

const apps = [
  {
    id: "numpad-2-9",
    name: "Numpad",
    version: "2.9",
    madeWith: "AutoHotKey",
    description:
      "Удобная раскладка цифрового блока и горячие клавиши для ускорения набора. Позволяет гибко настраивать поведение и экономить время при работе с цифрами.",
    downloadUrl: "https://example.com/numpad-2.9.zip",
    icon: Keyboard,
    tags: ["Windows", "Utility", "AHK"],
  },
];

function Tag({ label }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full bg-black/5 text-gray-700 border border-black/10">
      {label}
    </span>
  );
}

function AppCard({ app }) {
  const Icon = app.icon;
  return (
    <div className="group rounded-2xl border border-black/10 bg-white shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                {app.name}
                <span className="ml-2 text-xs font-medium text-gray-500">v{app.version}</span>
              </h3>
              <p className="text-xs text-gray-500">Сделано на {app.madeWith}</p>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-700 leading-relaxed">{app.description}</p>
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          {app.tags?.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      </div>
      <div className="border-t border-black/10 bg-gray-50/70 p-4 flex items-center justify-between">
        <a
          href={app.downloadUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-800"
        >
          <Download className="h-4 w-4" />
          Скачать
        </a>
        <div className="inline-flex items-center gap-1 text-xs text-gray-500">
          <Info className="h-3.5 w-3.5" />
          Последнее обновление: версия {app.version}
        </div>
      </div>
    </div>
  );
}

export default function AppList() {
  return (
    <section id="apps" className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  );
}
