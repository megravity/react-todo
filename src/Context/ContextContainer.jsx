import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/reducer";

export const MyContext = createContext();
const ContextContainer = (props) => {
  const tasks = [
    { id: 0, text: "Walk a cat", done: false },
    { id: 1, text: "Walk a dog", done: false },
    { id: 2, text: "Pay taxes", done: false },
    { id: 3, text: "Buy food", done: false },
    { id: 4, text: "Play some music", done: false },
    { id: 5, text: "Learn React", done: true }, // toDone
    { id: 6, text: "Build a Website", done: true },
    { id: 7, text: "Reading", done: true },
    { id: 8, text: "Sleep more than 6 hours", done: true },
  ];

  const [state, dispatch] = useReducer(reducer, tasks);
  const todos = state.filter((element) => !element.done);
  const todones = state.filter((element) => element.done);

  const addItem = (value) => {
    dispatch({ type: "ADD_ITEM", payload: value });
  };

  const updateItem = (id) => {
    dispatch({ type: "UPDATE_ITEM", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "ONLOAD" });
  }, []);
  return (
    <MyContext.Provider value={{ todos, todones, addItem, updateItem }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default ContextContainer;
