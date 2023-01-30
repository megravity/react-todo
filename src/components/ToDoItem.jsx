import { useContext } from "react";
import { MyContext } from "../Context/ContextContainer";

const ToDoItem = ({ item }) => {
  const { updateItem } = useContext(MyContext);
  return (
    <div className="todo-item">
      <p>{item.text}</p>
      <div className="actions">
        <button onClick={() => updateItem(item.id)} className="btn">
          &#10004;
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
