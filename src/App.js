import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChildrenList from "./components/ChildrenList";
import NotFound from "./components/NotFound";
import AddChild from "./components/AddChild";
import LogInPage from "./components/LogInPage";
import Discharge from "./components/Discharge";
import DischargedList from "./components/DischargedList";
import SearchResult from "./components/SearchResult";

function App(){
  return (
    <BrowserRouter>
     
      <div>
        <Routes>
          <Route path="/" element={<ChildrenList/>}/>
          <Route path="Login" element={<LogInPage/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/children/edit/:samId" element={<AddChild/>}/>
          <Route path="/add" element={<AddChild/>}/>
          <Route path="/children/discharge/:samId" element={<Discharge/>}/>
          <Route path="/children/discharged" element={<DischargedList/>}/>
          <Route path="children/search/:samId" element={<SearchResult/>}></Route>
          
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;

