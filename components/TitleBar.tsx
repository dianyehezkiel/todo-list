export default function TitleBar() {
  return (
    <header data-cy='header-background' className="bg-primary sticky top-0">
      <div className="todo-container navbar py-0">
        <h1 data-cy='header-title' className="uppercase text-lg md:text-xl lg:text-2xl font-bold text-primary-content">
          To Do List App
        </h1>
      </div>
    </header>
  );
}
