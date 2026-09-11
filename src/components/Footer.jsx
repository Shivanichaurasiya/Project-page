import { Sparkles, Database } from "lucide-react";

function Footer() {
  return (
    <footer className="flex flex-col gap-3 border-t border-slate-100 px-6 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-10">

      <p className="flex items-center gap-2">
        <Sparkles size={18} className="text-indigo-500" />
        Small steps make big progress 💜
      </p>

      <div className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2">
        <Database size={16} />
        Saved in local storage
      </div>

    </footer>
  );
}

export default Footer;