import ShowTaskList from "./SHowTaskList";

function TaskList(props) {
  const { List } = props;

  return (
    <div className="CardActivity">
      {List.map((data) => {
        return (
          <div className="CardList">
            <img src="./../src/images/listaTareas2.png" alt="lista de tareas" />
            <ShowTaskList
              // key={data.id}
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
            <div className="icons">
              <img src="./../src/images/editTasks.png" alt="Editar tarea" />
              <img src="./../src/images/delete.png" alt="eliminar tareas" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
