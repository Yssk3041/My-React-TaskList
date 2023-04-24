import ShowTaskList from "./SHowTaskList";

function TaskList(props) {
  const { List } = props;

  return (
    <div className="CardActivity">
      {List.map((data) => {
        return (
          <div className="CardList">
            <img src="./../src/images/listaTareas.png" alt="lista de tareas" />
            <ShowTaskList
              key={data.id}
              actividad={data.actividad}
              fecha={data.fecha}
              hora={data.hora}
              estado={
                data.estado ? (
                  <strong>No Realizado</strong>
                ) : (
                  <strong>No Realizado</strong>
                )
              }
            />
            <img
              src="./../src/images/delete.png"
              alt="eliminar tareas"
              className="icons"
            />
            <img
              src="./../src/images/editTasks.png"
              alt="Editar tarea"
              className="icons"
            />
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
