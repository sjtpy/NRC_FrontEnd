import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChildrenList from "./components/ChildrenList";
import NotFound from "./components/NotFound";
import AddChild from "./components/AddChild";

function App(){
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ChildrenList/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/add" element={<AddChild/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;