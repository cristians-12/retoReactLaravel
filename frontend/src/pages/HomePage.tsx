const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[30%] text-center bg-sky-700 p-5 rounded-xl">
        <h1 className="text-[2rem] text-white font-bold">
          Bienvenido a NoteAPP! 📝
        </h1>
        <p className=" text-white">
          NoteAPP es una herramienta diseñada para ayudarte a organizar tus
          pensamientos y tareas de manera eficiente. Con una interfaz simple y
          fácil de usar, puedes crear, editar y eliminar notas para mantener un
          registro de tus actividades diarias. Ya sea que necesites anotar
          ideas, recordatorios o tareas pendientes, NoteAPP te permite hacerlo
          de manera rápida y sencilla. Además, puedes marcar tus notas como
          completadas para hacer un seguimiento de tu progreso. ¡Comienza hoy a
          mejorar tu productividad con NoteAPP!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
