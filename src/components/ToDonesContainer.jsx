import ToDoneItem from "./ToDoneItem";
import { useContext } from "react";
import { MyContext } from "../Context/ContextContainer";

const ToDonesContainer = () => {
  const { todones } = useContext(MyContext);
  const toDonesItems = todones.map((todone) => {
    return <ToDoneItem key={todone.id} item={todone} />;
  });

  return (
    <div className="todones-container">
      <h3>BACKLOG</h3>
      {todones.length > 0 && toDonesItems}
    </div>
  );
};

export default ToDonesContainer;
