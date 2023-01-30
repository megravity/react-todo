import { useContext } from "react";
import { MyContext } from "../Context/ContextContainer";
const ToDoneItem = ({ item }) => {
  const { updateItem } = useContext(MyContext);
  return (
    <div className="todones-item">
      <p>{item.text}</p>
      <div className="actions">
        <button onClick={() => updateItem(item.id)} className="btn">
          &#8635;
        </button>
      </div>
    </div>
  );
};

export default ToDoneItem;
