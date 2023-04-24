function ShowTaskList(props) {
  const { actividad, fecha, hora, estado } = props;
  return (
    <div className="CardTaskList">
      <p>Actividad: {actividad}</p>
      <p>Fecha: {fecha}</p>
      <p>Hora: {hora}</p>
      <p>Estado: {estado}</p>
    </div>
  );
}

export default ShowTaskList;
