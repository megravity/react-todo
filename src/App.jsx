import "./scss/App.scss";
import Navigation from "./components/Navigation";
import ToDosContainer from "./components/ToDosContainer";
import ToDonesContainer from "./components/ToDonesContainer";
import Help from "./views/Help";
import NotFound from "./views/NotFound";

import { Routes, Route } from "react-router-dom";
import ContextContainer from "./Context/ContextContainer";

function App() {
  return (
    <ContextContainer>
      <div className="app">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ToDosContainer />
                <ToDonesContainer />
              </>
            }
          />
          <Route path="help" element={<Help />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </ContextContainer>
  );
}

export default App;
