import Navbar from "./components/Navbar";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/all" element={<AllUsers />} />
        <Route exact path="/add" element={<AddUser />} />
        <Route exact path="/edit/:id" element={<EditUser />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
