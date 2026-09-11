import { useState } from "react";

import {
  Check,
  Circle,
  Pencil,
  Trash2,
  CalendarDays,
} from "lucide-react";

function TaskItem({
  task,
  onToggle,
  onDelete,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleEdit = () => {
    if (!title.trim()) return;

    onEdit(task.id, title.trim());

    setIsEditing(false);
  };

  const priorityClasses = {
    High: "bg-rose-50 text-rose-500",
    Medium: "bg-blue-50 text-blue-500",
    Low: "bg-emerald-50 text-emerald-600",
  };

  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl border p-4 transition sm:flex-row sm:items-center sm:justify-between ${
        task.completed
          ? "border-emerald-100 bg-emerald-50/60"
          : "border-slate-200 bg-white hover:border-indigo-200 hover:shadow-sm"
      }`}
    >

      <div className="flex min-w-0 items-center gap-4">

        <button
          onClick={() => onToggle(task.id)}
          className="shrink-0"
          aria-label="Toggle task"
        >
          {task.completed ? (
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500 text-white">
              <Check size={19} strokeWidth={3} />
            </span>
          ) : (
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-slate-300 text-slate-300 hover:border-indigo-400">
              <Circle size={25} />
            </span>
          )}
        </button>

        <div className="min-w-0">

          {isEditing ? (
            <div className="flex gap-2">

              <input
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleEdit();
                  }

                  if (e.key === "Escape") {
                    setIsEditing(false);
                    setTitle(task.title);
                  }
                }}
                className="w-full rounded-lg border border-indigo-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-100"
              />

              <button
                onClick={handleEdit}
                className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white"
              >
                Save
              </button>

            </div>
          ) : (
            <h3
              className={`truncate text-base font-semibold sm:text-lg ${
                task.completed
                  ? "text-slate-400 line-through"
                  : "text-slate-800"
              }`}
            >
              {task.title}
            </h3>
          )}

          <div className="mt-1 flex items-center gap-1 text-sm text-slate-400">
            <CalendarDays size={16} />
            {task.date}
          </div>

        </div>

      </div>

      <div className="flex items-center justify-between gap-4 sm:justify-end">

        <span
          className={`rounded-full px-4 py-1.5 text-sm font-semibold ${priorityClasses[task.priority]}`}
        >
          {task.priority}
        </span>

        <div className="flex items-center gap-3">

          <button
            onClick={() => {
              setIsEditing(true);
              setTitle(task.title);
            }}
            className="text-slate-500 transition hover:text-indigo-600"
          >
            <Pencil size={20} />
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="text-rose-400 transition hover:text-rose-600"
          >
            <Trash2 size={20} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default TaskItem;