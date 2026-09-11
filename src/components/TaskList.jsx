import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  onToggle,
  onDelete,
  onEdit,
}) {
  return (
    <div className="mt-6 space-y-3">

      {tasks.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <p className="text-lg font-semibold text-slate-600">
            No tasks found
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Try adding a new task or changing your search.
          </p>
        </div>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))
      )}

    </div>
  );
}

export default TaskList;